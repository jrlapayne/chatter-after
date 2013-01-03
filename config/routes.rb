Chatter::Application.routes.draw do
  resources :messages
  root to: 'messages#main'
end
