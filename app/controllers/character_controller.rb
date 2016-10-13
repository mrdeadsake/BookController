class CharacterController < ApplicationController
  respond_to :html, :json
  def index
    @chapters = Chapter.all
    @characters = Character.all
    respond_with(@characters)
  end
end
