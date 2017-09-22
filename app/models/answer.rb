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

    #code for time posted ago from github.com/katrinalui
    include ActionView::Helpers::DateHelper

    def time_posted_ago
      time_ago_in_words(created_at) + " ago"
    end

    def post_day
      created_at.strftime("%B %d, %Y")
    end
end
