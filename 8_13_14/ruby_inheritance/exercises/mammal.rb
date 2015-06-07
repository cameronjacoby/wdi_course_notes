class Mammal
  attr_accessor :kind, :fur, :state

  def initialize(kind)
    @kind = kind
    @fur = true
    @state = "awake"
  end

  def eat(food)
    if @state == "awake"
      puts "#{@kind} is eating #{food}"
    end
  end
end


class Dog < Mammal
  attr_accessor :breed, :gender, :name

  def initialize(breed, gender, name)
    super("dog")
    @breed = breed
    @gender = gender
    @name = name
  end

  def bark
    puts "woof!"
  end
end


class Cat < Mammal
  attr_accessor :color, :gender, :name

  def initialize(color, gender, name)
    super("cat")
    @color = color
    @gender = gender
    @name = name
  end

  def meow
    puts "meow!"
  end
end