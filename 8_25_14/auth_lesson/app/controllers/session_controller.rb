class SessionController < ApplicationController

  def new
    # login form
  end

  def create
    @user = User.authenticate(params[:user][:email], params[:user][:password])

    if @user
      session[:user_id] = @user.id
      # render text: "Logged you in"
      redirect_to login_url, :notice => "Logged in!"
    else
      flash.now[:notice] = "Can't log you in."
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    # render text: "You destroyed the session"
    redirect_to login_path
  end

end