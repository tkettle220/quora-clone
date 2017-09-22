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

  #code for time posted ago from github.com/katrinalui
  include ActionView::Helpers::DateHelper

  def time_posted_ago
    time_ago_in_words(created_at) + " ago"
  end

  def post_day
    created_at.strftime("%B %d, %Y")
  end


end
