# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_14_015036) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "my_list_sentences", force: :cascade do |t|
    t.bigint "my_list_id", null: false
    t.bigint "sentence_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["my_list_id"], name: "index_my_list_sentences_on_my_list_id"
    t.index ["sentence_id"], name: "index_my_list_sentences_on_sentence_id"
  end

  create_table "my_lists", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_my_lists_on_user_id"
  end

  create_table "sections", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sentences", force: :cascade do |t|
    t.bigint "section_id", null: false
    t.string "english", null: false
    t.string "japanese", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["section_id"], name: "index_sentences_on_section_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name", default: "", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "words", force: :cascade do |t|
    t.bigint "sentence_id", null: false
    t.string "english", null: false
    t.string "japanese", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sentence_id"], name: "index_words_on_sentence_id"
  end

  add_foreign_key "my_list_sentences", "my_lists"
  add_foreign_key "my_list_sentences", "sentences"
  add_foreign_key "my_lists", "users"
  add_foreign_key "sentences", "sections"
  add_foreign_key "words", "sentences"
end
