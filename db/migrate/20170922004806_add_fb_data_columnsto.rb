class AddFbDataColumnsto < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :access_token
    add_column :users, :name, :string
    add_column :users, :pro_pic_url, :string
    add_column :users, :fb_id, :integer
  end
end
