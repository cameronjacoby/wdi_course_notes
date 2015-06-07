require ('pry')
class Rectangle

  # attr_reader :side1, :side2
  # attr_writer :side1, :side2
  attr_accessor :side1, :side2

  @@num_of_rects = 0

  def initialize(side1, side2)
    @side1 = side1
    @side2 = side2
    @@num_of_rects += 1
    puts "#{@@num_of_rects} rectangle was created"
  end

  # # method to access instance vars
  # # getter / reader
  # def side1
  #   @side1
  # end

  # # method to change instance vars
  # # setter / writer
  # def side1=(input)
  #   @side1 = input
  # end

  # instance method
  def area
    @side1 * @side2
    # secret_stuff
  end

  # class method uses 'self'
  def self.taco
    "this is not a taco"
  end

  def self.num_of_rects
    @@num_of_rects
  end

  private

  def secret_stuff
    "this is a secret method"
  end

end


# r1 = Rectangle.new(5, 8)
# r2 = Rectangle.new(3, 4)
# puts "number of rectangles: #{Rectangle.num_of_rects}" 
# # p r1.side1
# puts r1.area
# # puts r1.side1=30
# # puts r1.area
# # puts Rectangle.taco


class Square < Rectangle

  def initialize(side)
    # @side1 = side
    # @side2 = side
    super(side, side)
  end

  # def area
  #   @side1 * @side2
  # end

  def to_s 
    "this square is #{@side1} x #{@side2}"
  end

end

s1 = Square.new(5)
puts s1

# puts s1.area
# puts s1.inspect
# p s1
# puts s1.class.superclass
# puts s1.class.superclass.superclass