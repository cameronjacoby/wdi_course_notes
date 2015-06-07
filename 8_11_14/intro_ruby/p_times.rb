# Write a method called p_times that takes a statement 
# and a num puts the statement some num of times to the console.


def p_times(statement, num)
  num.times do
    puts statement
  end
end


p_times("Hello world", 25)