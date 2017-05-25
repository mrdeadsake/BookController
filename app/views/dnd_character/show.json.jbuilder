json.array! @current do |each|
  json.call(each,
            :name,
            :race,
            :subrace,
            :background,
            :alignment,
            :level,
            :strength,
            :dexterity,
            :constitution,
            :intelligence,
            :wisdom,
            :charisma,
            :experience,
            :player_name,
            :character_class)
end