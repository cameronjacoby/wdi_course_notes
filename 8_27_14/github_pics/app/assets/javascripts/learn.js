$(document).ready(function() {

  $('.getInfo').on('submit', function(e) {
    e.preventDefault();
    var user = $('.userName').val();
    $.getJSON('https://api.github.com/users/' + user, function(data) {
      console.log(data.avatar_url);
      $('.userData').html('<img src=' + data.avatar_url + '>');
    });
  });

});