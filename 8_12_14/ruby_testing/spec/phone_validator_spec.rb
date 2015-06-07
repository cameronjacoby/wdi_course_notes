require "./phone_validator"

describe "phone_validator" do
  
  it "should validate a seven digit number with a dash" do
    expect(phone_validator("123-4567")).to be(true)
  end
end