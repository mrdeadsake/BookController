class BookSeriesController < ApplicationController
  respond_to :html, :json
  def index
    @bookseries = BookSeries.all
    respond_with(@bookseries)
  end

  def show
    current = BookSeries.find(params[:id])
    books = current.books.as_json
    chapters = current.chapters.as_json
    characters = current.characters.as_json
    character_details = current.character_details
    details = character_details.map{|c| c.as_json.merge({number: Chapter.find(c[:chapter_id])[:number]})}

    response = {books: books, chapters: chapters, characters: characters, details: details}
    respond_with(response)
  end
end
