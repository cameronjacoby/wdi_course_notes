require "./hello_world"

describe "Hello World" do

  it "should say hello world" do
    expect(greeting).to eql("hello world")
  end

end