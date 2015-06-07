Rails.application.routes.draw do
  root 'site#index'
  resources :to_dos, except: [:new, :edit]
end