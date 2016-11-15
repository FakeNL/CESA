/**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

window.choseLocations = [];
if(typeof twitterData !== 'undefined') {
  /*  var locations = [];

  twitterData.forEach(function(item, index){
    var location = item.user.location;

    if(location.length > 3) {
      if(location.indexOf(',') !== -1) {
        location = location.split(',')[0]
      }

      if(location.indexOf('-') !== -1) {
        location = location.split('-')[0]
      }

      if(location.indexOf('/') !== -1) {
        location = location.split('/')[0]
      }

      if(location.indexOf('...') !== -1) {
        location = location.split('...')[0]
      }

      locations.push({
        'location': location.trim(),
        'index': index
      });
    }
  });

  locations.forEach(function(item, index){
    setTimeout(function(){
      $.ajax('/get_country', { data: { location: item.location } }).then(function(response){
        if(response && typeof response.address !== 'undefined') {
          choseLocations.push({
            "zoomLevel": 5,
            "scale": 0.5,
            "title": response.address,
            "latitude": response.geometry.lat,
            "longitude": response.geometry.lng,
            "twitterIndex": item.index
          });
        }
      });
    }, 300 * index + 1)
  });
  */

  var map = AmCharts.makeChart( "chartdiv", {
    "type": "map",
    "theme": "theme",
    "projection": "miller",

    "imagesSettings": {
      "rollOverColor": "#5da6d6",
      "rollOverScale": 3,
      "selectedScale": 3,
      "selectedColor": "#5da6d6",
      "color": "#13564e"
    },

    "areasSettings": {
      "unlistedAreasColor": "#5da6d6"
    },

    "dataProvider": {
      "map": "worldLow",
      "images": [{"zoomLevel":5,"scale":0.5,"title":"Newcastle upon Tyne, UK","latitude":54.978252,"longitude":-1.61778,"twitterIndex":1},{"zoomLevel":5,"scale":0.5,"title":"Heilbronn, Germany","latitude":49.1426929,"longitude":9.210879,"twitterIndex":2},{"zoomLevel":5,"scale":0.5,"title":"Phnom Phen City, Cambodia","latitude":11.5448729,"longitude":104.8921668,"twitterIndex":3},{"zoomLevel":5,"scale":0.5,"title":"Toronto, ON, Canada","latitude":43.653226,"longitude":-79.3831843,"twitterIndex":5},{"zoomLevel":5,"scale":0.5,"title":"Heilbronn, Germany","latitude":49.1426929,"longitude":9.210879,"twitterIndex":8},{"zoomLevel":5,"scale":0.5,"title":"Sweden","latitude":60.12816100000001,"longitude":18.643501,"twitterIndex":10},{"zoomLevel":5,"scale":0.5,"title":"State of Minas Gerais, Brazil","latitude":-18.512178,"longitude":-44.5550308,"twitterIndex":11},{"zoomLevel":5,"scale":0.5,"title":"State of Minas Gerais, Brazil","latitude":-18.512178,"longitude":-44.5550308,"twitterIndex":12},{"zoomLevel":5,"scale":0.5,"title":"Richmond, VA, USA","latitude":37.5407246,"longitude":-77.4360481,"twitterIndex":13},{"zoomLevel":5,"scale":0.5,"title":"Oxfordshire, UK","latitude":51.7612056,"longitude":-1.2464674,"twitterIndex":18},{"zoomLevel":5,"scale":0.5,"title":"New York, NY, USA","latitude":40.7127837,"longitude":-74.0059413,"twitterIndex":19},{"zoomLevel":5,"scale":0.5,"title":"Brussels, Belgium","latitude":50.8503396,"longitude":4.3517103,"twitterIndex":20},{"zoomLevel":5,"scale":0.5,"title":"Étang de Terre Creuse, 36800 Migné, France","latitude":46.6859869,"longitude":1.2843589,"twitterIndex":21},{"zoomLevel":5,"scale":0.5,"title":"St, Cozad, NE 69130, USA","latitude":40.8717205,"longitude":-99.9953915,"twitterIndex":23},{"zoomLevel":5,"scale":0.5,"title":"Maryland, USA","latitude":39.0457549,"longitude":-76.64127119999999,"twitterIndex":24},{"zoomLevel":5,"scale":0.5,"title":"Uganda","latitude":1.373333,"longitude":32.290275,"twitterIndex":26},{"zoomLevel":5,"scale":0.5,"title":"Niskayuna, NY, USA","latitude":42.8000049,"longitude":-73.89144069999999,"twitterIndex":27},{"zoomLevel":5,"scale":0.5,"title":"Merida, Yucatan, Mexico","latitude":20.9673702,"longitude":-89.5925857,"twitterIndex":28},{"zoomLevel":5,"scale":0.5,"title":"Heilbronn, Germany","latitude":49.1426929,"longitude":9.210879,"twitterIndex":31},{"zoomLevel":5,"scale":0.5,"title":"Oxford Cres, Malibu Village, Cape Town, 7100, South Africa","latitude":-33.997216,"longitude":18.689328,"twitterIndex":34},{"zoomLevel":5,"scale":0.5,"title":"Oulu, Finland","latitude":65.0120888,"longitude":25.4650773,"twitterIndex":36},{"zoomLevel":5,"scale":0.5,"title":"Milton Keynes, UK","latitude":52.0406224,"longitude":-0.7594171,"twitterIndex":37},{"zoomLevel":5,"scale":0.5,"title":"Scotland, UK","latitude":56.49067119999999,"longitude":-4.2026458,"twitterIndex":38},{"zoomLevel":5,"scale":0.5,"title":"Scotland, UK","latitude":56.49067119999999,"longitude":-4.2026458,"twitterIndex":39},{"zoomLevel":5,"scale":0.5,"title":"New York, NY, USA","latitude":40.7127837,"longitude":-74.0059413,"twitterIndex":40},{"zoomLevel":5,"scale":0.5,"title":"Manaus, AM, Brazil","latitude":-3.1190275,"longitude":-60.0217314,"twitterIndex":43},{"zoomLevel":5,"scale":0.5,"title":"Oslo, Norway","latitude":59.9138688,"longitude":10.7522454,"twitterIndex":44},{"zoomLevel":5,"scale":0.5,"title":"Annapolis, MD, USA","latitude":38.9784453,"longitude":-76.4921829,"twitterIndex":46},{"zoomLevel":5,"scale":0.5,"title":"10713 SD-44, Rapid City, SD 57702, USA","latitude":44.0651978,"longitude":-103.4009782,"twitterIndex":47},{"zoomLevel":5,"scale":0.5,"title":"Grenoble, France","latitude":45.188529,"longitude":5.724524,"twitterIndex":48},{"zoomLevel":5,"scale":0.5,"title":"London, UK","latitude":51.5073509,"longitude":-0.1277583,"twitterIndex":50},{"zoomLevel":5,"scale":0.5,"title":"Kent, Irvine, CA 92603, USA","latitude":33.64874229999999,"longitude":-117.8054488,"twitterIndex":51},{"zoomLevel":5,"scale":0.5,"title":"Lima District, Peru","latitude":-12.046374,"longitude":-77.0427934,"twitterIndex":52},{"zoomLevel":5,"scale":0.5,"title":"Canada, KY, USA","latitude":37.6061055,"longitude":-82.3246094,"twitterIndex":56},{"zoomLevel":5,"scale":0.5,"title":"Chelmsford, UK","latitude":51.7355868,"longitude":0.4685497,"twitterIndex":57},{"zoomLevel":5,"scale":0.5,"title":"Boulder, CO, USA","latitude":40.0149856,"longitude":-105.2705456,"twitterIndex":53},{"zoomLevel":5,"scale":0.5,"title":"Austin, TX, USA","latitude":30.267153,"longitude":-97.7430608,"twitterIndex":58},{"zoomLevel":5,"scale":0.5,"title":"Hereweg, Landgraaf, Netherlands","latitude":50.9035491,"longitude":6.0344532,"twitterIndex":61}]
    }
  } );

  // add events to recalculate map position when the map is moved or zoomed
  map.addListener( "positionChanged", updateCustomMarkers );
  // this function will take current images on the map and create HTML elements for them
  function updateCustomMarkers( event ) {
    // get map object
    var map = event.chart;

    // go through all of the images
    for ( var x in map.dataProvider.images ) {
      // get MapImage object
      var image = map.dataProvider.images[ x ];

      // check if it has corresponding HTML element
      if ( 'undefined' == typeof image.externalElement )
        image.externalElement = createCustomMarker( image );

      // reposition the element accoridng to coordinates
      var xy = map.coordinatesToStageXY( image.longitude, image.latitude );
      image.externalElement.style.top = xy.y + 'px';
      image.externalElement.style.left = xy.x + 'px';
    }
  }

  // this function creates and returns a new marker element
  function createCustomMarker( image ) {
    var holder = document.createElement( 'div' );
    holder.className = 'map-marker';
    holder.title = image.title;
    holder.id= image.twitterIndex;
    holder.style.position = 'absolute';

    // maybe add a link to it?
    if ( undefined != image.url ) {
      holder.onclick = function() {
        window.location.href = image.url;
      };
      holder.className += ' map-clickable';
    }

    // create dot
    var dot = document.createElement( 'div' );
    dot.className = 'dot';
    holder.appendChild( dot );

    // create pulse
    var pulse = document.createElement( 'div' );
    pulse.className = 'pulse';
    holder.appendChild( pulse );

    // append the marker to the map container
    image.chart.chartDiv.appendChild( holder );

    return holder;
  }

  $(window).load(function(){
    $('.amcharts-chart-div a').remove();

    $('.map-marker').on('click', function(){
      var tIndex = $(this).attr('id');
      var content = twitterData[tIndex].text.replace('\n', '<br>');
      content = content.replace('#icanhazpdf', '<a href="https://twitter.com/search?src=typd&q=%23icanhazpdf">#icanhazpdf</a>')
      content = content.replace('#ICanHazPDF', '<a href="https://twitter.com/search?src=typd&q=%23icanhazpdf">#icanhazpdf</a>')
      $('.tweet-target').html(content);
    })
  })
}
