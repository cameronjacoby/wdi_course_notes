Rails.application.routes.draw do
  root 'info#index'
  get 'info/results'
  resources :info
end