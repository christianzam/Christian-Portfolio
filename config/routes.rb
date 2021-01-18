Rails.application.routes.draw do
  get 'pages/projects'
  root to: 'pages#home'
end
