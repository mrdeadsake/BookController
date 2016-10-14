json.array! @bookseries do |series|
  json.call(series,
            :name,
            :books
  )
end