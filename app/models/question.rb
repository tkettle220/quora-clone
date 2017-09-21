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


end
