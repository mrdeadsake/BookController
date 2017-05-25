class AddPlayerNameToDndCharacter < ActiveRecord::Migration
  def change
    add_column :dnd_characters, :player_name, :string
  end
end
