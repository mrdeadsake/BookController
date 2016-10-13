class CharacterDetail < ActiveRecord::Base
  belongs_to :Character
  belongs_to :Chapter
end
