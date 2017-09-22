# == Schema Information
#
# Table name: questions_topics
#
#  id          :integer          not null, primary key
#  topic_id    :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class QuestionsTopic < ApplicationRecord
  belongs_to :question,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Question

  belongs_to :topic,
    primary_key: :id,
    foreign_key: :topic_id,
    class_name: :Topic
end
