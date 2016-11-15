class HomeController < ApplicationController
  def index
  end

  def get_country
    requested_location = Geocoder.search(params['location'])

    if requested_location.length != 0
      data = requested_location[0].data

      location = {}
      location['geometry'] = data['geometry']['location']
      location['address']  = data['formatted_address']
      location['country']  = data['address_components']

      render(json: location)
    else
      render(json: {})
    end
  end

end
