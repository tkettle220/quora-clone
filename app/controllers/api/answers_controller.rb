class Api::AnswersController < ApplicationController
  #modify index to only return current_user.answers or something like that
  #do a before action ensure login

  #shows all of the answers for a question, topic, or user, depending on params

  def index
    if params[:question_id]
      question = Question.find_by_id(params[:question_id])
      unless question
        render json: ["Question not found"], status: 404
        return
      end
      @answers = question.answers.includes(:author)
    elsif params[:topic_id]
      topic = Topic.find_by_id(params[:topic_id])
      unless topic
        render json: ["Topic not found"], status: 404
        return
      end
      @answers = topic.answers.includes(:author)
    else
      @answers = current_user.followed_topics.
      render :index
    end
  end

  #shows an answer
  def show
    @answer = Answer.find(params[:id])
    render :show
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.author = current_user
    @answer.save
    render :show
  end

  def vote
    @answer = Answer.find_by_id(params[:answer_id])
    type = params[:type]
    case type
    when "upvote"
      current_user.upvote(@answer)
    when "downvote"
      current_user.downvote(@answer)
    when "cancel_vote"
      current_user.cancel_vote(@answer)
    end
    render :show
  end

  private

  def answer_params
    params.require(:answer).permit(:body)
  end

end
