class ChapterController < ApplicationController
  respond_to :html, :json
  def index
    @chapters = Chapter.all
    respond_with(@chapters)
  end
end
