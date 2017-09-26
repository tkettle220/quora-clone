Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :show, :create, :update, :destroy]
    resources :topics, only: [:index, :show, :create, :update, :destroy]
    resources :answers, only: [:index, :show, :create, :destroy]
    resources :comments, only: [:show, :create, :destroy]

    post 'questions/vote', :to => 'questions#vote'
    post 'questions/follow', :to => 'questions#follow'
    post 'questions/unfollow', :to => 'questions#unfollow'

    post 'answers/vote', :to => 'answers#vote'

    post 'topics/follow', :to => 'topics#follow'
    post 'topics/unfollow', :to => 'topics#unfollow'


  end

  devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks", :registrations => "registrations" }



end
