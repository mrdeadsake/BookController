class CreateCharaterDetails < ActiveRecord::Migration
  def change
    create_table :charater_details do |t|

      t.timestamps null: false
    end
  end
end
