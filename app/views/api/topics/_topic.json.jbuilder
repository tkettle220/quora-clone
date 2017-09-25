json.extract! topic, :id, :name, :description, :num_followers


json.question_ids topic.questions.map{|question| question.id}

json.follower_ids topic.follower_ids


# json.questions do
#   json.partial! 'api/questions/question', collection: topic.questions, as: :question
# end
