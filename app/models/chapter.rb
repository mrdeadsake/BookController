class Chapter < ActiveRecord::Base
  belongs_to :book
  has_many :characters
  has_many :character_details
  validates_uniqueness_of :name
end
