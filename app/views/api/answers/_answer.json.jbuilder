json.extract! answer, :id, :body

question = answer.question

json.author do
  json.partial! 'api/users/user', user: answer.author
end

json.question do
  json.id question.id
  json.body question.body
end

json.time_posted_ago answer.time_posted_ago

json.upvoter_ids answer.upvoter_ids
json.commentIds answer.commentIds

json.upvoted current_user.upvoted?(answer)
json.downvoted current_user.downvoted?(answer)
