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
