class DndCharacterController < ApplicationController
  respond_to :html, :json
  def index
    respond_with(DndCharacter.all)
  end

  def show
    @current = DndCharacter.where(params[:player_name]).first
    respond_with(@current)
  end
end
