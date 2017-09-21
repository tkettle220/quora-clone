class CreateQuestionsUsersJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_table :questions_users do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.timestamps
    end
    add_index :questions_users, :user_id
    add_index :questions_users, :question_id
    add_index :questions_users, [:question_id, :user_id], unique: true
  end
end
