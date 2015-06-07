$(document).ready(function() {

  $('div.box').each(function(index) {
    $(this).delay(1000 * index).fadeOut('1000');
  }).promise().done(function() {
    console.log('done fading');
  });

});