class BookSeriesController < ApplicationController
  respond_to :html, :json
  def index
    @bookseries = BookSeries.all
    respond_with(@bookseries)
  end

  def show
    @current = BookSeries.find(params[:id])
    respond_with(@current)
  end
end
