json.extract! topic, :id, :name, :description, :num_followers


json.question_ids topic.questions.map{|question| question.id}

json.follower_ids topic.follower_ids
json.followed current_user.followed?(topic)


# json.questions do
#   json.partial! 'api/questions/question', collection: topic.questions, as: :question
# end
