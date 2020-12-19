Rails.application.routes.draw do
  get "/chat", to: "messages#show"
  mount ActionCable.server => "/cable"
  
  root to: "posts#index"
  resources :posts
  devise_for :users, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions'   
  } 
  devise_scope :user do
    get "sign_in", :to => "users/sessions#new"
    get "sign_out", :to => "users/sessions#destroy" 
  end

  resources :users, only: [:show]
  resources :youtubes
end
