# == Schema Information
#
# Table name: topics_users
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  topic_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TopicsUser < ApplicationRecord
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :topic,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Topic
end
