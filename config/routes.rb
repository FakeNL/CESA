Rails.application.routes.draw do
	root 'home#index'

	get '/get_country', to: 'home#get_country'
	get '/map', to: 'map#index'
    get '/request-articles', to: 'file#index'
end
