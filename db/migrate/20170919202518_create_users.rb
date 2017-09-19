class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.string :email, null: false
      t.string :pro_pic_url, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :users, [:username, :email, :session_token], :unique => true
  end
end
