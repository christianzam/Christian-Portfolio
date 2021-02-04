Rails.application.routes.draw do
  root to: 'pages#home'
  get 'pages/projects'
  resources :contacts, only: [:new, :create]
end
