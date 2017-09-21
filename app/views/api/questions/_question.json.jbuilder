json.extract! question, :id, :body

json.author do
  json.partial! 'api/users/user', user: question.author
end
