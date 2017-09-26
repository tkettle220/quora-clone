@comments.each do |comment|
  json.set! comment.id do
    author = User.find(comment.user_id)
    json.partial! 'comment', comment: comment, author: author
  end
end
