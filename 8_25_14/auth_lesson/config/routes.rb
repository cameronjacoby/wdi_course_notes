Rails.application.routes.draw do

  root 'site#index'
  get '/login' => 'session#new'
  post '/login' => 'session#create'

  delete '/logout' => 'session#destroy'
  get '/logout' => 'session#destroy' #TODO: DELETE THIS BEFORE PRODUCTION

  resources :passwords

end