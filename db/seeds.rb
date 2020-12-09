10.times do |i|
  Post.create!(title: "TEST_TITLE#{i}", content: "CONTENT#{i}")
end
