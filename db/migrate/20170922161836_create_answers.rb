class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.text :body
      t.integer :question_id
      t.integer :author_id
      t.timestamps
    end
    add_index  :answers, :question_id
    add_index  :answers, :author_id
    add_index  :answers, [:question_id,:author_id], :unique => true
  end
end
