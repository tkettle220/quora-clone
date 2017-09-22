class AddDefaultPropicToUser < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:users, :pro_pic_url, "https://graph.facebook.com/123/picture")
  end
end
