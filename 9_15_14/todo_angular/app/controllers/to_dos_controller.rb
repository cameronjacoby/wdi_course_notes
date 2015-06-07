class ToDosController < ApplicationController

  before_action :set_to_do, only: [:show, :update, :destroy]

  respond_to :json, :html

  def index
    respond_with ToDo.all
  end

  def create
    respond_with ToDo.create(to_do_params)
  end

  def show
    respond_with @to_do
  end

  def update
    respond_with @to_do.update(to_do_params)
  end

  def destroy
    respond_with @to_do.destroy
  end

  private

  def set_to_do
    @to_do = ToDo.find(params[:id])
  end

  def to_do_params
    params.require(:to_do).permit(:task, :details, :done)
  end

end