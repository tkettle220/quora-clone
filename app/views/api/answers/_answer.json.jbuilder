json.extract! answer, :id, :body

json.author do
  json.partial! 'api/users/user', user: answer.author
end
