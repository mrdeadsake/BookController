class CreateDndCharacters < ActiveRecord::Migration
  def change
    create_table :dnd_characters do |t|
      t.string :name
      t.string :class
      t.string :race
      t.string :subrace
      t.string :background
      t.string :alignment
      t.integer :level
      t.integer :strength
      t.integer :dexterity
      t.integer :constitution
      t.integer :intelligence
      t.integer :wisdom
      t.integer :charisma
      t.integer :experience
    end
  end
end
