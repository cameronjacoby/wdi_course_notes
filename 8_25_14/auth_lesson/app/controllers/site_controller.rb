class SiteController < ApplicationController

  before_action :is_authenticated?

  def index
    @user = User.find(session[:user_id])
    render text: 'Hi #{@user.email}, this is your secret page.'
  end

end