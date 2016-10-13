class CreateCharaterDetails < ActiveRecord::Migration
  def change
    create_table :charater_details do |t|
      t.references :character
      t.references :chapter
      t.string :details
      t.string :location
      t.timestamps null: false
    end
  end
end
