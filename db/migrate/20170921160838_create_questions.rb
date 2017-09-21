class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :questions, :author_id
    add_index :questions, [:author_id, :body], unique: true
  end
end
