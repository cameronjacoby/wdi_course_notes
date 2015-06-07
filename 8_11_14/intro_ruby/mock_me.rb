# Write a method called mock_me that gets some input from the terminal and
# puts it until the input is the word quit or q. (Be sure to remove trailing \n.)


def mock_me()
  puts "Enter your input below. Type 'quit' to exit."
  input = gets.chomp
  until input == "quit" do
    puts input
    input = gets.chomp
  end
end


mock_me()