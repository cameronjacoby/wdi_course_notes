def fizz_buzz(num)
  (0..num).each do |n|
    if n == 0
    elsif n % 3 == 0 && n % 5 == 0
      puts "FizzBuzz"
    elsif n % 3 == 0
      puts "Fizz"
    elsif n % 5 == 0
      puts "Buzz"
    end
  end
end


fizz_buzz(15)