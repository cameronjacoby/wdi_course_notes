class InfoController < ApplicationController

  def index
  end

  def results
    @query = params[:query]

    request = Typhoeus.get(
      'http://omdbapi.com',
      :params => {:s => @query}
    )

    @results = JSON.parse(request.body)
    puts @results

    # render the response
  end

  def show
    @movie = params[:id]

    request = Typhoeus.get(
      'http://omdbapi.com',
      :params => {:i => @movie}
    )

    @movie_result = JSON.parse(request.body)
    puts @movie_result
  end

end