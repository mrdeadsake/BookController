class ChapterController < ApplicationController
  respond_to :html, :json
  def index
    current_series = BookSeries.find(params[:book_series_id])
    chapters = current_series.chapters
    respond_with(chapters)
  end

  def show
    current_series = BookSeries.find(params[:book_series_id])
    chapter = current_series.chapters.where(number: params[:id]).first
    c = chapter.as_json
    details = chapter.character_details
    response = c.merge({details: details})
    respond_with(response)
  end
end
