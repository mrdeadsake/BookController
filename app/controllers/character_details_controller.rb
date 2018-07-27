class CharacterDetailsController < ApplicationController

  respond_to :json

  def create
    name = params.require(:character)
    chapter =  params.require(:chapter)
  	character = create_new_character(name, chapter['book_id'])
  	CharacterDetail.create(details: params.require(:details), chapter_id: chapter["id"], character_id: character.id)
  end

  def update
    @detail = CharacterDetail.find(params.require(:id))
    @detail.update_attributes({details: params.require(:details)})
    render({:json=>{params: params}})
  end

  def create_new_character(name, book_id)
    character = Character.find_or_initialize_by({name: name, book_id: book_id})
    character.save! if character.new_record?
    character
  end
end
