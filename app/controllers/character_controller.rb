class CharacterController < ApplicationController
  require 'csv'

  respond_to :html, :json

  attr_reader :csv, :map_csv, :hashing

  def index
    @chapters = Chapter.all
    @characters = Character.all
    respond_with(@characters)
  end

  def upload
    csv_text = File.read('/Users/derekadams/Projects/BookControl/details.csv')
    csv = CSV.parse(csv_text, :headers => true)
    csv.each do |r|
      puts r.to_hash
    end
  end

  def create
    data = Base64.decode64(params[:data]).force_encoding("UTF-8")
    @csv = CSV.parse(data, :headers => true)

    map_csv.each do |r|
      record = CharacterDetail.find_or_initialize_by({:chapter_id=>r[:chapter_id], :character_id=>r[:character_id]})

      unless record.new_record?
        r.map {|k,v|
          boo = (v == record[k.to_sym])
          record.update_attributes(k.to_sym => r[k.to_sym]) unless boo
        }
      end
    end

    if @character
      return head :no_content
    else
      render({
                 :json => {
                     :success => false,
                     :message => "FAKE OUT!"
                 }
             })
    end
  end


  def create_params
    params.permit(:character_id, :chapter_id, :details, :location)
  end

  def hashing
    @hashing ||= csv.map{|c| c.to_hash}
  end


  def map_csv
    mappings = { "character" => :character_id, "chapter_id"=> :chapter_id, "details"=> :details, "location"=>:location }
    @map_csv ||= hashing.map do |sub|
      sub.map { |k, v| [mappings[k]||k, v] }.to_h
    end
    @map_csv.map{|x|
      x[:character_id] = names(x[:character_id])
      x[:chapter_id] = x[:chapter_id].to_i
    }

    @map_csv
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
