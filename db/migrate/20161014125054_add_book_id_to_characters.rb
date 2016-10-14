class AddBookIdToCharacters < ActiveRecord::Migration
  def change
    add_column :characters, :book_id, :integer
  end
end
