JournalApp::Application.routes.draw do
  namespace "api", :defaults => { :format => :json } do
    resources :posts
  end

  root :to => "static_pages#index"
end
