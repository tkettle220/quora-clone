class Api::CommentsController < ApplicationController

  #returns based on params
  def index
    case params[:type]
    when "question"
      question = Question.find_by_id(params[:id])
      unless question
        render json: ["Question not found"], status: 404
        return
      end
      @comments = question.comment_threads.includes(:user)

    when "answer"
      answer = Answer.find_by_id(params[:id])
      unless answer
        render json: ["Topic not found"], status: 404
        return
      end
      @comments = answer.comment_threads.includes(:user)

    when "user"
      @comments = current_user.comments
      render :index
    end

  end

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
