$(document).ready(function() {
  $('.loading').hide();

  function getMovies(search) {
    return $.getJSON('http://www.omdbapi.com/?s=' + search, function(){});
  }

  $('.movieSearch').on('submit', function(e) {
    e.preventDefault();
    $('.loading').show();
    $('#movieData').html('');

    var search = $('#title').val();

    $.when(getMovies(search)).done(function(result) {
      $('.loading').hide();
      if(typeof result.Search === 'undefined') {
        $('#movieData').html('<h3>Sorry, nothing came up.</h3>');
      }
      else {
        var compiledTemplate = HandlebarsTemplates['demo/index']({result: result});
        $('#movieData').append(compiledTemplate);
      }
    });

    $('#title').val('');

  });

});