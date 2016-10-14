class BookSeries < ActiveRecord::Base
  has_many :books
  has_many :chapters, through: :books
  has_many :characters, through: :books
  has_many :character_details, through: :chapters

  validates_uniqueness_of :name

end
