# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

stormlight = BookSeries.create({name: "Stormlight Archive"})
# malazan = BookSeries.create({name: "Malazan Book of the Fallen"})
potter = BookSeries.create({name: "Harry Potter"})

# malazan.books.create([{name: "Gardens of the Moon", order: 0}, {name: "Deadhouse Gates", order: 1}])
stormlight.books.create([{name: "Way of Kings", order: 0},{name: "Words of Radiance", order: 1}, {name: "Edgedancer"}])

way_of_kings = stormlight.books.first

kings_chapters = [{number: 1, name: "Prelude to the Stormlight Archive"},
{number: 2, name: "Prologue: To Kill"},
{number: 3, name: "Chapter 1: Stormblessed"},
{number: 4, name: "Chapter 2: Honor is Dead"},
{number: 5, name: "Chapter 3: City of Bells"},
{number: 6, name: "Chapter 4: The Shattered Plains"},
{number: 7, name: "Chapter 5: Heretic"},
{number: 8, name: "Chapter 6: Bridge Four"},
{number: 9, name: "Chapter 7: Anything Reasonable"},
{number: 10, name: "Chapter 8: Nearer the Flame"},
{number: 11, name: "Chapter 9: Damnation"},
{number: 12, name: "Chapter 10: Stories of Surgeons"},
{number: 13, name: "Chapter 11: Droplets"},
{number: 14, name: "Interlude I-1: Ishikk"},
{number: 15, name: "Interlude I-2: Nan Balat"},
{number: 16, name: "Interlude I-3: The Glory of Ignorance"},
{number: 17, name: "Chapter 12: Unity"},
{number: 18, name: "Chapter 13: Ten Heartbeats"},
{number: 19, name: "Chapter 14: Payday"},
{number: 20, name: "Chapter 15: The Decoy"},
{number: 21, name: "Chapter 16: Cocoons"},
{number: 22, name: "Chapter 17: A Bloody Red Sunset"},
{number: 23, name: "Chapter 18: Highprince of War"},
{number: 24, name: "Chapter 19: Starfalls"},
{number: 25, name: "Chapter 20: Scarlet"},
{number: 26, name: "Chapter 21: Why Men Lie"},
{number: 27, name: "Chapter 22: Eyes, Hands, or Spheres"},
{number: 28, name: "Chapter 23: Many Uses"},
{number: 29, name: "Chapter 24: The Gallery of Maps"},
{number: 30, name: "Chapter 25: The Butcher"},
{number: 31, name: "Chapter 26: Stillness"},
{number: 32, name: "Chapter 27: Chasm Duty"},
{number: 33, name: "Chapter 28: Decision"},
{number: 34, name: "Interlude I-4: Rysn"},
{number: 35, name: "Interlude I-5: Axies the Collector"},
{number: 36, name: "Interlude I-6: A Work of Art"},
{number: 37, name: "Chapter 29: Errorgance"},
{number: 38, name: "Chapter 30: Darkness Unseen"},
{number: 39, name: "Chapter 31: Beneath the Skin"},
{number: 40, name: "Chapter 32: Side Carry"},
{number: 41, name: "Chapter 33: Cymatics"},
{number: 42, name: "Chapter 34: Stormwall"},
{number: 43, name: "Chapter 35: A Light By Which to See"},
{number: 44, name: "Chapter 36: The Lesson"},
{number: 45, name: "Chapter 37: Sides"},
{number: 46, name: "Chapter 38: Envisager"},
{number: 47, name: "Chapter 39: Burned Into Her"},
{number: 48, name: "Chapter 40: Eyes of Red and Blue"},
{number: 49, name: "Chapter 41: Of Alds and Milp"},
{number: 50, name: "Chapter 42: Beggars and Barmaids"},
{number: 51, name: "Chapter 43: The Wretch"},
{number: 52, name: "Chapter 44: The Weeping"},
{number: 53, name: "Chapter 45: Shadesmar"},
{number: 54, name: "Chapter 46: Child of Tanavast"},
{number: 55, name: "Chapter 47: Stormblessings"},
{number: 56, name: "Chapter 48: Strawberry"},
{number: 57, name: "Chapter 49: To Care"},
{number: 58, name: "Chapter 50: Backbreaker Powder"},
{number: 59, name: "Chapter 51: Sas Nahn"},
{number: 60, name: "Interlude I-7: Baxil"},
{number: 61, name: "Interlude I-8: Geranid"},
{number: 62, name: "Interlude I-9: Death Wears White"},
{number: 63, name: "Chapter 52: A Highway to the Sun"},
{number: 64, name: "Chapter 53: Dunny"},
{number: 65, name: "Chapter 54: Gibletish"},
{number: 66, name: "Chapter 55: An Emerald Broam"},
{number: 67, name: "Chapter 56: That Storming Book"},
{number: 68, name: "Chapter 57: Wandersail"},
{number: 69, name: "Chapter 58: The Journey"},
{number: 70, name: "Chapter 59: An Honor"},
{number: 71, name: "Chapter 60: That Which We Cannot Have"},
{number: 72, name: "Chapter 61: Right for Wrong"},
{number: 73, name: "Chapter 62: Three Glyphs"},
{number: 74, name: "Chapter 63: Fear"},
{number: 75, name: "Chapter 64: A Man of Extremes"},
{number: 76, name: "Chapter 65: The Tower"},
{number: 77, name: "Chapter 66: Codes"},
{number: 78, name: "Chapter 67: Words"},
{number: 79, name: "Chapter 68: Eshonai"},
{number: 80, name: "Chapter 69: Justice"},
{number: 81, name: "Chapter 70: A Sea of Glass"},
{number: 82, name: "Chapter 71: Recorded In Blood"},
{number: 83, name: "Chapter 72: Veristitalian"},
{number: 84, name: "Chapter 73: Trust"},
{number: 85, name: "Chapter 74: Ghostblood"},
{number: 86, name: "Chapter 75: In the Top Room"},
{number: 87, name: "Epilogue: Of Most Worth"}]

names= %w(Szeth Talenel Elhokar Kholin Rock Aladar Abrial Thaidakar Restares Kaladin Jezrien Sylphrena Teft Bethab Boriar Iyatil Shallan Davar Nale Gavilar Kholin Skar Hatham Evinor Mraize Jasnah Kholin Chanarach Moash Roion Jal Mala Jin Adolin Kholin Vedel Sigzil Ruthar Valam Kabsal Dalinar Kholin Paliah Adis Torol Sadeas Lin Davar Balat Davar Shalash Amark Sebarial Luesh Baxil Battar Arik Thanadal Cenn Kalak Corl Vamah Eshonai Ishar Dabbid Grump Drehy Hoid Dunny Gaz Eth Geranid Gadol Hauka Hobber Ishikk Earless Jaks Lhan Koolf Lift Leyten Lopen Lopen Meridas Amaram Malop Moash Mart Navani Kholin Maps Rysn Murk Taravangian Narm Teft Pedin Zahel Peet Ym Renarin Rlain Torfin Yake)
kings_characters = names.map{|name| {name: name }}


way_of_kings.chapters.create(kings_chapters)
way_of_kings.characters.create(kings_characters)

potter.books.create([{name: "Harry Potter and the Philosopher's Stone", order:0}, {name: "Harry Potter and the Chamber of Secrets", order:1}])


# Book.first.chapters.create({name: "Gardens of the Moon - Chapter 2"})


# szeth.character_details.create({
#     chapter_id: 0,
#     location: 'Kholinar',
#     details: 'Szeth assassinates King Gavilar'
#                                })
# kaladin.character_details.create([{
#     chapter_id: 1,
#     location: 'Killing Fields',
#     details: 'Kaladin is the squad leader over a contingent that aqcuires Cenn, a new recruit'
#                                  },
#                                   {
#                                       chapter_id: 2,
#                                       location: 'Caravan Squad',
#                                       details: 'Kaladin, now a slave is escorted to the shattered plains'
#                                   }
#                                  ])




