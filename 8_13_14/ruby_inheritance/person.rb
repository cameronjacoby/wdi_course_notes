require "./animal_4"
class Person < Animal
  @@banned_foods = /person|people|human|humans|woman|woman|children|child|baby|babies/i

  # must manually definite the attr_accessor for class vars
  def self.banned_foods
    @@banned_foods
  end

  attr_accessor :age, :gender, :name

  def initialize(age, gender, name)
      # call the super initialize
      super("person")
      @age = age
      @gender = gender
      @name = name
  end

  # stop cannibalism!
  def eat(food)
    unless @@banned_foods.match(food)
      super(food)
    else
      puts "(cannibalism is not allowed!!)"
    end
    self
  end
end