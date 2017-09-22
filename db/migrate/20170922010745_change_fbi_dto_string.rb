class ChangeFbiDtoString < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :fb_id
    add_column :users, :fb_id, :string
  end
end
