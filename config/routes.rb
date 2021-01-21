Rails.application.routes.draw do
  get 'pages/contact'
  get 'pages/projects'
  root to: 'pages#home'
end
