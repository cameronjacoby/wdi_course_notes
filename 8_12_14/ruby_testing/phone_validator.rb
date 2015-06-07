def phone_validator(str)
  matches = str.match(/\A\(\d{3}\)\s|\-{0,1}\d{3}-\d{4}\z/)
  # check that match length == 1
  # returns true or false
  matches.length == 1
end