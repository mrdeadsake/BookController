class ChangeClassNameToCharacterClass < ActiveRecord::Migration
  def change
    remove_column :dnd_characters, :class, :string
    add_column :dnd_characters, :character_class, :string
  end
end
