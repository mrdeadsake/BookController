class ChapterController < ApplicationController
  respond_to :html, :json
  def index
    @characters = Character.all
    @chapters = Chapter.all
    respond_with(@chapters)
  end
end
