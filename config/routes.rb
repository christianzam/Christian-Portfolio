Rails.application.routes.draw do
  get 'pages/contact'
  get 'pages/projects'
  get 'pages/OLD_HOME'
  root to: 'pages#home'
end
