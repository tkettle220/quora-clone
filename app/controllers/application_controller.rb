class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  #return user to sign in page after logout
  def after_sign_out_path_for(resource_or_scope)
    "/users/sign_in"
  end

  # def after_inactive_sign_up_path_for(resource_or_scope)
  #   "/users/sign_up"
  # end
  #
  # def after_sign_up_path_for(resource_or_scope)
  #   "/users/sign_up"
  # end

#   helper_method :current_user, :logged_in?
#
# private
#
#  def current_user
#    return nil unless session[:session_token]
#    @current_user ||= User.find_by(session_token: session[:session_token])
#  end
#
#  def logged_in?
#     !!current_user
#   end
#
#   def login(user)
#     user.reset_session_token!
#     session[:session_token] = user.session_token
#     @current_user = user
#   end
#
#   def logout
#     current_user.reset_session_token!
#     session[:session_token] = nil
#     @current_user = nil
#   end
#
#   def require_logged_in
#     unless current_user
#       render json: { base: ['invalid credentials'] }, status: 401
#     end
#   end


end
