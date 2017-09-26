class Api::CommentsController < ApplicationController

  def create
    debugger
    commentableClass = Object.const_get(params[:commentableClass])
    commentable = commentableClass.find(params[:commentableId])
    author = current_user
    @comment = Comment.build_from( commentable, author.id, params[:body] )
    @comment.save!
    render :show
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def destroy

  end

end
