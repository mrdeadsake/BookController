class CreateCharacterDetails < ActiveRecord::Migration
  def change
    create_table :character_details do |t|
      t.references :character
      t.references :chapter
      t.string :details
      t.string :location
    end
  end
end
