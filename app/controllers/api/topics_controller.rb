class Api::TopicsController < ApplicationController
  #modify index to only return current_user.questions or something like that
  #do a before action ensure login

  #index assumes a current_user and returns JUST their subscribed topics
  def index

    if params[:topicQuery]
      ##if it's empty, we want to fetch random topics to show
      if params[:topicQuery] == ""
        @topics = Topic.order("RANDOM()").limit(7)
        reject_topics = current_user.followed_topics
        @topics.reject!{|topic| reject_topics.include?(topic)}
      else
        @keywords = params[:topicQuery].downcase.split(" ")
        topics = []

        @keywords.each do |keyword|
          topics += Topic.where("LOWER(name) LIKE ? ", "%#{keyword.downcase}%")
        end

        @topics = topics.uniq
      end

    else
      @topics = current_user.followed_topics
      render :index
    end
  end

  def show
    @topic = Topic.find(params[:id])
    render :show
  end

  def create
    @topic = Topic.create!(topic_params)
    render :show
  end

  def follow
    @topic = Topic.find(params[:topic_id])
    current_user.follow(@topic)
    render :show
  end

  def unfollow
    @topic = Topic.find(params[:topic_id])
    current_user.unfollow(@topic)
    render :show

  end

  private

  def topic_params
    params.require(:topic).permit(:name, :description)
  end
end
