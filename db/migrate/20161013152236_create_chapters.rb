class CreateChapters < ActiveRecord::Migration
  def change
    create_table :chapters do |t|

      t.timestamps null: false
    end
  end
end
