# == Schema Information
#
# Table name: topics
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Topic < ApplicationRecord
  has_many :topics_users,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :TopicsUser

  has_many :subscribers,
    through: :topics_users,
    source: :user

  has_many :questions_topics,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :QuestionsTopic

  has_many :questions,
    through: :questions_topics,
    source: :question

  def num_followers
    subscribers.count
  end

  #code for time posted ago from github.com/katrinalui
  include ActionView::Helpers::DateHelper

  def time_posted_ago
    time_ago_in_words(created_at) + " ago"
  end

  def post_day
    created_at.strftime("%B %d, %Y")
  end
  
end
