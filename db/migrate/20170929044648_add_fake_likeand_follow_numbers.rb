class AddFakeLikeandFollowNumbers < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :num_initial_follows, :integer, :default => 0
    add_column :topics, :num_initial_follows, :integer, :default => 0
    add_column :answers, :num_initial_upvotes, :integer, :default => 0
  end
end
