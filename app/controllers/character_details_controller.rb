class CharacterDetailsController < ApplicationController
  require 'csv'
  respond_to :json
  def create
    puts "hello!"
  end

  def index
    puts "hello!"
  end

  def update
    @detail = CharacterDetail.find(params.require(:id))
    @detail.update_attributes({details: params.require(:details)})
    render({:json=>{params: params}})
  end
end
