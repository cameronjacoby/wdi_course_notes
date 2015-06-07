# Reverse a string

def swap_indices(str, index_one, index_two)
  str[index_one], str[index_two] = str[index_two], str[index_one]
end

def str_reverse(str)
  mid = str.length / 2
  (0...mid).each do |index|
    swap_indices(str, index, -index - 1)
  end
  str
end