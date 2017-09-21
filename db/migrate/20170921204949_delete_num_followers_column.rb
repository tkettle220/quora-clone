class DeleteNumFollowersColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :topics, :num_followers
  end
end
