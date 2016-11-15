Rails.application.routes.draw do
	root 'home#index'

	get '/get_country', to: 'home#get_country'

	get '/map', to: 'map#index'
    get '/requested-articles', to: 'file#index'
    get '/credits', to: 'credit#index'
    get '/downloads', to: 'download#index'
    get '//downloaded-articles', to: 'downloaded#index'
end
