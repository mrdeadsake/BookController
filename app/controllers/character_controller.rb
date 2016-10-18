class CharacterController < ApplicationController
  respond_to :html, :json
  def index
    @chapters = Chapter.all
    @characters = Character.all
    respond_with(@characters)
  end

  def new
    puts 'hello'
  end

  def create

    @character = CharacterDetail.create(create_params).save
    if @character
      return head :no_content
    else
      render({
                 :json => {
                     :success => false,
                     :message => "Unable to create DataSift identity."
                 }
             })
    end
  end


  def create_params
    params.permit(:character_id, :chapter_id, :details, :location)
  end
end
