class BookSeriesController < ApplicationController

  def index
    @bookseries = BookSeries.all
    puts @bookseries
    respond_to do |format|
      format.html
      format.json {render json: @bookseries}
    end
  end

  def show
    current = BookSeries.find(params[:id])
    books = current.books.as_json
    chapters = current.chapters.as_json
    characters = current.characters.as_json
    character_details = current.character_details
    details = character_details.map{|c| c.as_json.merge({number: Chapter.find(c[:chapter_id])[:number]})}

    @response = {books: books, chapters: chapters, characters: characters, details: details}
    response = {books: books, chapters: chapters, characters: characters, details: details}
    respond_to do |format|
      format.html
      format.json {render json: @response}
    end

  end

  def current_series
    @current_series ||= BookSeries.find(params[:id])
  end
end
