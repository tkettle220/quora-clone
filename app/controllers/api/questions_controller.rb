class Api::QuestionsController < ApplicationController
  #modify index to only return current_user.questions or something like that
  #do a before action ensure login

  #shows all of the questions for a user
  def index
    questions = Question.all.includes(:author)
    if params[:query]
      @keywords = params[:query].split(" ")
      questions = []
      @keywords.each do |keyword|
        questions += Question.where("LOWER(body) LIKE ? ", "%#{keyword.downcase}%")
      end
      p questions
      @questions = questions.uniq
    else
      @questions = Question.all.includes(:author)
    end
    render :index
  end

  def show
    @question = Question.find(params[:id])
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
