class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :trackable, :validatable
  # devise :rememberable
  devise :omniauthable, :omniauth_providers => [:facebook]
  devise :confirmable
  # validates :username, :firstname, :lastname, :email, :pro_pic_url, :password_digest, :session_token, presence: true
  # validates :username, :email, :session_token, uniqueness: true
  # validates :password, length: {minimum: 6}, allow_nil: true



  # for oauth
  # attr_accessor :provider, :uid

  def self.find_or_create_by_facebook_oauth(auth)
   user = User.where(:provider => auth.provider, :uid => auth.uid).first

   unless user
     user = User.create!(
     provider: auth.provider,
     uid: auth.uid,
     email: auth.info.email,
     password: Devise.friendly_token[0,20]
   )
   end

  user
end


  # after_initialize :ensure_session_token
  # attr_reader :password
  #
  # def self.find_by_credentials(username, password)
  #   user = User.find_by(username: username)
  #   if user && user.is_password?(password)
  #     user
  #   else
  #     nil
  #   end
  # end
  #
  # def password=(password)
  #   @password = password
  #   self.password_digest = BCrypt::Password.create(password)
  # end
  #
  # def is_password?(password)
  #   BCrypt::Password.new(self.password_digest).is_password?(password)
  # end
  #
  # def reset_session_token!
  #   generate_session_token
  #   self.save!
  #   self.session_token
  # end
  #
  # private
  #
  # def ensure_session_token
  #   generate_session_token unless self.session_token
  # end
  #
  # def generate_session_token
  #   self.session_token = SecureRandom.urlsafe_base64
  #   self.session_token
  # end
end
