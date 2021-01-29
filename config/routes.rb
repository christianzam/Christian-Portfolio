Rails.application.routes.draw do
  get 'pages/contact'
  get 'pages/projects'
  get 'pages/testing_page'
  root to: 'pages#home'
end
