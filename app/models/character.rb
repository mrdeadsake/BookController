class Character < ActiveRecord::Base
  has_many :character_details
  validates_uniqueness_of :name
end
