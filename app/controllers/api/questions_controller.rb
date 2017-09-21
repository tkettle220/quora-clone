class Api::QuestionsController < ApplicationController
  #modify index to only return current_user.questions or something like that
  #do a before action ensure login

  #shows all of the questions for a user
  def index
    @questions = current_user.feed_questions.includes(:author)
    render :index
  end

  def show
    @question = Question.find(params[:id]).includes(:author)
    render :show
  end

  def create
    @question = Question.new(question_params)
    @question.author = current_user
    @question.save
    render :show
  end

  private

  def question_params
    params.require(:question).permit(:body)
  end
end
