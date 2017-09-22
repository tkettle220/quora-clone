class Answer < ApplicationRecord

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :question,
      primary_key: :id,
      foreign_key: :question_id,
      class_name: :Question

    has_many :topics,
      through: :question,
      source: :topics
end
