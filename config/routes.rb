require Rails.root.join("lib/json_constraints")
json_defaults = { :defaults => { :format => :json } }

Rails.application.routes.draw do
  get "overview", {:to =>"book_series#index"}

  resources :book_series, {:param => :id} do
    get "book", {:to => "book#index"}
    get "chapter", {:to => "chapter#index"}
    resources :chapter, {:param => :id} do

    end
  end

  resources :chapter, {:param => :id} do
  end

  resources :character do
    post "/character", { :to =>"character_details#create", :as => :create }
  end

  resources :character_details, { :path => :character_details } do
    post "/character_details", { :to =>"character_details#create", :as => :create }
    get "/character_details", {:to => "character_details#index"}
  end

  resources :book, {:param => :book_id } do
    get "chapter", {:to => "chapter#show"}
  end

  get '/chapter', {:to => "chapter#index"}

  root({ :to => redirect("/overview") })
end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
