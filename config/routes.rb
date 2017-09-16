Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'
  get 'admin', to: 'pages#admin', as: :admin

  get 'guest', to: 'guest#show'
  # , as: :guest

  namespace :api do
    resources :guests
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
