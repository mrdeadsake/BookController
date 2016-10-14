class Character < ActiveRecord::Base
  has_many :character_details
  belongs_to :book_series
  validates_uniqueness_of :name
end
