class ChapterController < ApplicationController
  respond_to :html, :json
  def index
    puts params
    #current_series = BookSeries.find(params[:book_series_id])
    current_book = Book.find(params[:id])
    puts current_book
    chapters = current_book.chapters
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
