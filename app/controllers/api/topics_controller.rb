class Api::TopicsController < ApplicationController
  #modify index to only return current_user.questions or something like that
  #do a before action ensure login

  #index assumes a current_user and returns JUST their subscribed topics
  def index
    @topics = current_user.subscribed_topics.includes(:questions)
    render :index
  end

  def show
    @topic = Topic.find(params[:id])
    render :show
  end

  def create
    @topic = Topic.create!(topic_params)
    render :show
  end

  private

  def topic_params
    params.require(:topic).permit(:name, :description)
  end
end
