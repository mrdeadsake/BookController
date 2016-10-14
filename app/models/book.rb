class Book < ActiveRecord::Base
  has_many :chapters
  validates_uniqueness_of :name
end
