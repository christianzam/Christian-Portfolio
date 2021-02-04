Rails.application.routes.draw do
  root to: 'pages#home'
  get 'pages/projects' 
  # get 'projects', to: 'pages#projects' FOREIGN CODE
  resources :contacts, only: [:new, :create]
end
