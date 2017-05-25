class DndCharacterController < ApplicationController
  respond_to :html, :json
  def index

    @all = DndCharacter.all
    respond_to do |format|
      format.html
      format.json {render json: @all}
    end
  end

  def show
    @current = DndCharacter.find(params[:id])
    respond_with(@current)
  end
end
