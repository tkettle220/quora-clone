json.extract! question, :id, :body

json.author do
  json.partial! 'api/users/user', user: question.author
end

json.answers do
  json.partial! 'api/answers/answer', collection: question.answers, as: :answer
end
