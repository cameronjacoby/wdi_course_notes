class ThingsController < ApplicationController

  before_action :set_thing, only: [:show, :update, :destroy]

  # allows both json & html
  # respond_to :json, :html

  # only want json for api controller
  # views do not work anymore
  respond_to :json

  def index
    # @things = Thing.all
    # respond_with @things

    respond_with Thing.all

    # respond_to do |format|
    #   format.html
    #   format.json {render :json => @things}
    # end
  end

  def create
    respond_with Thing.new(thing_params)
  end

  def show
    respond_with @thing
  end

  def update
    respond_with @thing.update(thing_params)
  end

  def destroy
    respond_with @thing.destroy
  end

  # private methods
  private

  def set_thing
    @thing = Thing.find_by_id(params[:id])
  end

  def thing_params
    params.require(:thing).permit(:name, :description)
  end

end