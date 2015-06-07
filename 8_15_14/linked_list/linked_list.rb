class List
  attr_accessor :head, :tail
  
  def initialize()
    @head = nil
    @tail = nil
    @count = 0
  end

  def length
    @count
  end
  
  def shift
    if @tail == nil
      value = @head
      @head = nil
      @count -= 1
    else
      value = @head
      @head = @tail.head
      @tail = @tail.tail
      @count -= 1
    end
    value
  end

  def unshift(val)
    if @head == nil
      @head = val
      @count += 1
    else
      new_list = List.new
      new_list.head = @head
      new_list.tail = @tail
      @head = val
      @tail = new_list
      @count += 1
    end
    self
  end
  
  def [](index)
  end

  def []=(index, value)
  end

  def slice(start, finish)
  end

  def each
  end

end