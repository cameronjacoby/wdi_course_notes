def fib(pos)
  if pos <= 2
    return 1
  else
    return fib(pos - 1) + fib(pos - 2)
  end
end


puts fib(10)