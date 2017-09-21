class CreateQuestionsTopicsJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_table :questions_topics do |t|
      t.integer :topic_id, null: false
      t.integer :question_id, null: false
      t.timestamps
    end
    add_index :questions_topics, :topic_id
    add_index :questions_topics, :question_id
    add_index :questions_topics, [:question_id, :topic_id], unique: true
  end
end
