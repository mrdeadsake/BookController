class AddSkillsToCharacter < ActiveRecord::Migration
  def change
    add_column :dnd_characters, :skills, :string
    add_column :dnd_characters, :proficiencies, :string
  end
end
