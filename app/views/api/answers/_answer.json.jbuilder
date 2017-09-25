json.extract! answer, :id, :body

json.author do
  json.partial! 'api/users/user', user: answer.author

end
json.time_posted_ago answer.time_posted_ago

json.upvoter_ids answer.upvoter_ids
