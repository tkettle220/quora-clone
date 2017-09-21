json.extract! topic, :id, :name, :description, :num_followers

json.questions do
  json.partial! 'api/questions/question', collection: topic.questions, as: :question
end
