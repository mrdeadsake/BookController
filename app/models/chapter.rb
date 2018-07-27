class Chapter < ActiveRecord::Base
  require 'csv'
  belongs_to :book
  has_many :characters
  has_many :character_details
  validates_uniqueness_of :name

  attr_reader :csv, :map_csv, :hashing

  def hashing
    @hashing ||= csv.map{|c| c.to_hash}
  end


  def mapped
    mappings = { "character" => :character_id, "chapter_id"=> :chapter_id, "details"=> :details, "location"=>:location }
    @map_csv ||= hashing.map do |sub|
      sub.map { |k, v| [mappings[k]||k, v] }.to_h
    end
    @map_csv.map{|x|
      x[:character_id] = names(x[:character_id])
     x[:chapter_id] = x[:chapter_id].to_i
    }

  end


  def names(x)
    if x == "Szeth"
      1
    elsif
      x == "Kaladin"
      2
    elsif
      x == "Shallan"
      3
    end
  end
end
