require 'nokogiri'
require 'open-uri'
require 'awesome_print'

# open gets the file ready, read gets the data
# url = open("https://news.ycombinator.com/").read
url = open("hn.html").read

page = Nokogiri::HTML(url)
results = []

# page.css(".title a").each do |link|
#   puts link.text
#   puts link["href"]
#   puts "*"*60
# end

results = page.css(".title a").map do |link|
  {title: link.text, url: link["href"]}
end

ap results