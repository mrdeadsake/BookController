class CharacterDetail < ActiveRecord::Base
  validates :character_id, uniqueness: {:scope=> :chapter_id}
  belongs_to :Character
  belongs_to :Chapter
end
