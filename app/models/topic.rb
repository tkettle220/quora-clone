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
end
