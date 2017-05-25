require Rails.root.join("lib/json_constraints")
json_defaults = { :defaults => { :format => :json } }

Rails.application.routes.draw do
  get 'overview', {:to =>"book_series#index"}
  get 'goteamadams', :to => "dnd_character#index", constraints: {:format => :html}
  get '/books/', to: 'book_series#index', constraints: {:format => :json}
  get 'book_series/:id', to: 'book_series#show', constraints: {:format => :json}
  get 'character', to: 'character#index'
  get 'book_series/book/:id/chapter/index', to: 'chapter#index'
  post 'book_series/:id/character', to: 'character#create'
  get 'about', {:to =>"book_series#index"}
  get '/dnd', :to => "dnd_character#index", constraints: {:format => :json}
  get '/dnd/:id', :to => "dnd_character#show", constraints: {:format => :json}
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
