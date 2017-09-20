class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    facebook_data = request.env["omniauth.auth"]

    # You need to implement the method below in your model
    @user = User.find_or_create_by_facebook_oauth(facebook_data)

    sign_in_and_redirect @user
  end
end
