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
stormlight.books.create([{name: "Way of Kings", order: 0},{name: "Words of Radiance", order: 1}])
potter.books.create([{name: "Harry Potter and the Philosopher's Stone", order:0}, {name: "Harry Potter and the Chamber of Secrets", order:1}])


# Book.first.chapters.create({name: "Gardens of the Moon - Chapter 2"})

szeth = Character.create({name: "Szeth"}).save
kaladin = Character.create({name: 'Kaladin'}).save

szeth.character_details.create({
    chapter_id: 0,
    location: 'Kholinar',
    details: 'Szeth assassinates King Gavilar'
                               })
kaladin.character_details.create([{
    chapter_id: 1,
    location: 'Killing Fields',
    details: 'Kaladin is the squad leader over a contingent that aqcuires Cenn, a new recruit'
                                 },
                                  {
                                      chapter_id: 2,
                                      location: 'Caravan Squad',
                                      details: 'Kaladin, now a slave is escorted to the shattered plains'
                                  }
                                 ])




