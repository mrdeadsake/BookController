class BookSeries < ActiveRecord::Base
  has_many :books
  validates_uniqueness_of :name

end
