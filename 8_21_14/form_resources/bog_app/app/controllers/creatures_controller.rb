class CreaturesController < ApplicationController

  def index
    @creatures = Creature.all
    render :index
  end

  def new
    @creature = Creature.new
    render :new
  end

  def create
    new_creature = params.require(:creature).permit(:name, :description)
    Creature.create(new_creature)
    redirect_to '/creatures'
  end

  def show
    id = params[:id]
    @creature = Creature.find_by_id(id)
    render :show
  end

  def edit
    id = params[:id]
    @creature = Creature.find_by_id(id)
    render :edit
  end

  def update
    creature_id = params[:id]
    creature = Creature.find_by_id(creature_id)

    updated_params = params.require(:creature).permit(:name, :description)
    creature.update_attributes(updated_params)
    redirect_to creature
  end

  def destroy
    id = params[:id]
    creature = Creature.find_by_id(id)
    creature.destroy
    redirect_to '/creatures'
  end
end
