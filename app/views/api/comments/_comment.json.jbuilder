json.extract! comment, :id, :body

json.author do
  json.partial! 'api/users/user', user: author
end

json.time_posted_ago comment.time_posted_ago

json.upvoter_ids comment.upvoter_ids

json.upvoted current_user.upvoted?(comment)
json.downvoted current_user.downvoted?(comment)
