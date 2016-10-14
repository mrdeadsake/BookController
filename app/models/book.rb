class Book < ActiveRecord::Base
  belongs_to :book_series
  has_many :chapters
  has_many :characters
  validates_uniqueness_of :name
end
