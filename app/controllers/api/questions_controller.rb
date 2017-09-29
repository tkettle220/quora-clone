class Api::QuestionsController < ApplicationController
  #modify index to only return current_user.questions or something like that
  #do a before action ensure login

  #shows all of the questions for a user
  def index
    questions = Question.all.includes(:author)
    if params[:query]
      @keywords = params[:query].downcase.split(" ")
      questions = []
      @keywords.each do |keyword|
        questions += Question.where("LOWER(body) LIKE ? ", "%#{keyword.downcase}%")
      end
      @questions = questions.uniq
    else
      @questions = Question.take(20).includes(:author)
    end
    render :index
  end

  def show
    @question = Question.find(params[:id])
    unless @question
      @question = {}
    end
    render :show
  end

  def create
    @question = Question.new(question_params)
    @question.author = current_user
    @question.save
    render :show
  end

  def vote
    @question = Question.find_by_id(params[:question_id])
    type = params[:type]
    case type
    when "upvote"
      current_user.upvote(@question)
    when "downvote"
      current_user.downvote(@question)
    when "cancel_vote"
      current_user.cancel_vote(@question)
    end
    render :show
  end

  def follow
    @question = Question.find_by_id(params[:question_id])
    current_user.follow(@question)
    render :show
  end

  def unfollow
    @question = Question.find_by_id(params[:question_id])
    current_user.unfollow(@question)
    render :show
  end

  private

  def question_params
    params.require(:question).permit(:body)
  end

end
