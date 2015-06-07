# Write a method called word_count to count word occurence in a string, returned as a Hash.


def word_count(statement)
  words = {}
  wordsArr = statement.split(" ")

  wordsArr.each do |word|
    words[word.to_sym] ||= 0
    words[word.to_sym] += 1
  end
  # returns words
  words
end


statement = gets.chomp
p word_count(statement)