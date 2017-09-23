json.extract! question, :id, :body

json.author do
  json.partial! 'api/users/user', user: question.author
end

json.time_posted_ago question.time_posted_ago


json.answers do
  json.partial! 'api/answers/answer', collection: question.answers, as: :answer
end

json.topic question.topics.first
