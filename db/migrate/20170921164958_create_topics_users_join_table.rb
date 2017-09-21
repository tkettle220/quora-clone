class CreateTopicsUsersJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_table :topics_users do |t|
      t.integer :user_id, null: false
      t.integer :topic_id, null: false
      t.timestamps
    end
    add_index :topics_users, :user_id
    add_index :topics_users, :topic_id
    add_index :topics_users, [:topic_id, :user_id], unique: true
  end
end
