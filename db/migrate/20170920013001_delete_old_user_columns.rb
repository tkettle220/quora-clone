class DeleteOldUserColumns < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :username
    remove_column :users, :firstname
    remove_column :users, :lastname
    remove_column :users, :pro_pic_url
    remove_column :users, :password_digest
    remove_column :users, :session_token
  end
end
