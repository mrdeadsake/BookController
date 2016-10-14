class BookSeriesController < ApplicationController
  respond_to :html, :json

  def index
    @bookseries = BookSeries.all
    respond_with(@bookseries)
  end
end
