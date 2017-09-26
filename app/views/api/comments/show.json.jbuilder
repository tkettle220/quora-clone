json.partial! '/api/comments/comment', comment: @comment, author: User.find(@comment.user_id)
