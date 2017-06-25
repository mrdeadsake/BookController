class CharacterController < ApplicationController
  require 'csv'

  respond_to :html, :json

  attr_reader :csv, :map_csv, :hashing, :mappings

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
    create_or_update
      render({
                 :json => {
                     :success => true,
                     :message => "Everything should have uploaded fine"
                 }
             })

  end


  def create_params
    params.permit(:character_id, :chapter_id, :details, :location)
  end

  def hashing
    @hashing ||= csv.map{|c| c.to_hash}
  end

  def update_entry(row, record)
    unless record.new_record?
      row.map {|k,v|
        attributes_are_same = (v == record[k.to_sym])
        record.update_attributes(k.to_sym => row[k.to_sym]) unless attributes_are_same
      }
    end
  end

  def create_or_update
    map_csv.each do |row|
      record = CharacterDetail.find_or_initialize_by({:chapter_id=>row[:chapter_id], :character_id=>row[:character_id]})
      allowed_attributes = row.with_indifferent_access.select {|k| record.attributes.keys.include? k}
      update_entry(allowed_attributes, record) unless record.new_record?
      if record.new_record?
        record.attributes = allowed_attributes
        record.save!
      end
      if record.errors
        Rails.logger.info(record.errors.full_messages)
      end
    end
  end


  def map_csv
    @map_csv ||= hashing.map do |sub|
      sub.map { |k, v| [mappings[k]||k, v.strip] }.to_h
    end

    @map_csv.map{|x|
      book_id = get_book_id_from_name(x[:book_id])
      chapter_id = get_chapter_id_from_name(x[:chapter_id], book_id)
      x[:character_id] = create_new_character(x[:character_id], book_id)
      x[:chapter_id] = chapter_id
    }

    @map_csv
  end

  def mappings
    @mappings ||= { "character" => :character_id, "book_series" => :book_series_id, "book"=> :book_id, "chapter"=> :chapter_id, "details"=> :details, "location"=>:location }
  end

  def create_new_character(name, book_id)
    character = Character.find_or_initialize_by({name: name, book_id: book_id})
    character.save! if character.new_record?
    return character[:id] if character
  rescue => exception
    puts character.errors.full_messages
    puts exception
  end

  def get_book_id_from_name(name)
    Book.find_by(name: name.strip).id
  end

  def get_chapter_id_from_name(name, book_id)
    Book.find(book_id).chapters.where(name: name).first.id
  end


end
