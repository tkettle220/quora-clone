# == Schema Information
#
# Table name: topics
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  description   :text             not null
#  num_followers :integer          default(0)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class TopicTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
