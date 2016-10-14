class BookController < ApplicationController
  respond_to :html, :json
  def index
    @current = BookSeries.find(params[:book_series_id])
    @books = @current.books
    respond_with(@books)
  end

  def show
    @current = BookSeries.first
    book = @current.books.first
    respond_with(book)
  end
end
