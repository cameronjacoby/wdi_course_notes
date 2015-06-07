# Require the file for testing
require "./str_reverse"

describe "str_reverse" do
  
  it "should reverse an odd string" do
    my_string = "hello"
    expect(str_reverse(my_string)).to eql("olleh")
  end

  it "should reverse an even string" do
    my_string = "hellos"
    expect(str_reverse(my_string)).to eql("solleh")
  end

end