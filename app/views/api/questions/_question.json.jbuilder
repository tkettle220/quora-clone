json.extract! question, :id, :body

json.author do
  json.partial! 'api/users/user', user: question.author
end

json.time_posted_ago question.time_posted_ago

json.answer_ids question.answers.map{|answer| answer.id}

json.topic question.topics.first
json.tags question.topics.map{|topic| topic.name}

json.num_answers question.num_answers_str
keywords ||= []
debugger
json.match_score question.match_score(keywords)

json.commentIds question.commentIds


json.follower_ids question.follower_ids
json.upvoter_ids question.upvoter_ids

json.followed current_user.followed?(question)
