class Box

  def initialize(w, h)
    @width = w 
    @height = h
  end

  def get_area
    @width * @height
  end

end

class BigBox < Box

  def print_area
    @area = @width * @height
  end

end

# How would I create a box? How could I create a BigBox?
# How would I print the area of the BigBox?

box_1 = Box.new(4, 5)
big_box_1 = BigBox.new(20, 30)

puts big_box_1.print_area