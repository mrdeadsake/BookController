class CharacterDetailsController < ApplicationController

  respond_to :json

  def create
  	character = Character.where(name: params.require(:character)).first
  	CharacterDetail.create(details: params.require(:details), chapter_id: params.require(:chapter), character_id: character.id)

  end

  def update
    @detail = CharacterDetail.find(params.require(:id))
    @detail.update_attributes({details: params.require(:details)})
    render({:json=>{params: params}})
  end
end
