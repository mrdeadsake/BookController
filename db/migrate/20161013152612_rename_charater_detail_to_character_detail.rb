class RenameCharaterDetailToCharacterDetail < ActiveRecord::Migration
  def change
    rename_table :charater_details, :character_details
  end
end
