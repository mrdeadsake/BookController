# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170415015140) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "book_series", force: :cascade do |t|
    t.string "name"
  end

  create_table "books", force: :cascade do |t|
    t.string  "name"
    t.integer "order"
    t.integer "book_series_id"
  end

  create_table "chapters", force: :cascade do |t|
    t.string  "name"
    t.integer "book_id"
    t.integer "number"
  end

  create_table "character_details", force: :cascade do |t|
    t.integer "character_id"
    t.integer "chapter_id"
    t.string  "details"
    t.string  "location"
  end

  create_table "characters", force: :cascade do |t|
    t.string  "name"
    t.integer "book_id"
  end

  create_table "dnd_characters", force: :cascade do |t|
    t.string  "name"
    t.string  "race"
    t.string  "subrace"
    t.string  "background"
    t.string  "alignment"
    t.integer "level"
    t.integer "strength"
    t.integer "dexterity"
    t.integer "constitution"
    t.integer "intelligence"
    t.integer "wisdom"
    t.integer "charisma"
    t.integer "experience"
    t.string  "player_name"
    t.string  "character_class"
  end

end
