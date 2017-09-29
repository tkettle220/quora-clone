# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  validates :body, :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :questions_topics,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :QuestionsTopic

  has_many :topics,
    through: :questions_topics,
    source: :topic

  has_many :answers,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Answer

  acts_as_votable
  acts_as_commentable

  def follower_ids
    get_likes(:vote_scope => 'follow').map{|v| v.voter_id} + Array.new(self.num_initial_follows)
  end

  def upvoter_ids
    #to inflate likes, can just add a bunch of extra stuff to this array that isn't a number
    get_likes.reject{|v| v.vote_scope}.map{|v| v.voter_id}
  end

  def commentIds
    self.comment_threads.map{|comment| comment.id}
  end

  def num_comments
    self.comment_threads.count
  end

  def num_followers
    get_likes(:vote_scope => 'follow').count
  end

  def num_upvotes
    get_likes.reject{|v| v.vote_scope}.count
  end

  #code for time posted ago from github.com/katrinalui
  include ActionView::Helpers::DateHelper

  def time_posted_ago
    time_ago_in_words(created_at) + " ago"
  end

  def post_day
    created_at.strftime("%B %d, %Y")
  end

  def num_answers_str
    num_answers = answers.count
    case num_answers
    when 0
      "No answers yet"
    when 1
      "1 Answer"
    else
      "#{num_answers} Answers"
    end
  end

#What fraction of keywords are contained somewhere in the question body?
#keywords should already be processed to lower
  def match_score(keywords)
    question = self.body.downcase
    matching_keywords = keywords.reduce(0){|acc, keyword| question.include?(keyword) ? acc + 1 : acc}
    return matching_keywords/keywords.count.to_f
  end

end
