class CharacterDetailsController < ApplicationController

  respond_to :json

  def update
    @detail = CharacterDetail.find(params.require(:id))
    @detail.update_attributes({details: params.require(:details)})
    render({:json=>{params: params}})
  end
end
