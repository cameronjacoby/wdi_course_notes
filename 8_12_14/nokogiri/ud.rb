require 'nokogiri'
require 'open-uri'
require 'awesome_print'

term = ARGV[0]

url = open("http://www.urbandictionary.com/define.php?term=#{term}").read
page = Nokogiri::HTML(url)

puts page.css(".meaning").first.text.strip

# results = page.css(".box").map do |box|
#   {word: box.css(".word").text.strip, meaning: box.css(".meaning").text.strip}
# end

# ap results.first