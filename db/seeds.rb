10.times do |i|
  User.create!(name: "User#{i}",
              email: "test#{i}@sample.com",
              password: "password#{i}", 
              password_confirmation: "password#{i}")
end

10.times do |i|
  Post.create!(title: "TEST_TITLE#{i}", content: "CONTENT#{i}", user_id: 1)
end
