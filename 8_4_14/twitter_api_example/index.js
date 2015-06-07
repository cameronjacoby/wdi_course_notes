var OAuth = require('oauth');
var _ = require('lodash');

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);

var query = 'San Francisco';

var searchURL = 'https://api.twitter.com/1.1/search/tweets.json?q=' + query + '&result_type=recent&count=100';

oauth.get(searchURL, null, null, function(e, data, res) {
  console.log(JSON.parse(data));
  // var tweets = JSON.parse(data).statuses;
  // tweets.forEach(function(tweet) {
  //   console.log(tweet);
  // });
});