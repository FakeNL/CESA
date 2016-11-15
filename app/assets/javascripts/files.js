if(redditData) {
  var topPublishers = [
    {
      publisher: 'Wiley-Blackwell',
      requests: 233,
      color: "#1E7F3F"
    },

    {
      publisher: 'China Science Publishing & Media Ltd.',
      requests: 27,
      color: "#36E574"
    },

    {
      publisher: 'Ovid Technologies (Wolters Kluwer Health)',
      requests: 24,
      color: "#07A358"
    },

    {
      publisher: 'Informa UK Limited',
      requests: 12,
      color: "#3CFF80"
    },

    {
      publisher: 'Association for Computing Machinery',
      requests: 12,
      color: "#1E7F40"
    },

    {
      publisher: 'Others',
      requests: 89,
      color: "#2DBF60"
    }
  ];

  var chart = AmCharts.makeChart( "piechart", {
    "type": "pie",
    "theme": "light",
    "dataProvider": topPublishers,
    "valueField": "requests",
    "colorField": "color",
    "titleField": "publisher",
    "balloon":{
      "fixedPosition": false
    },
    "export": {
      "enabled": false
    }
  } );

  $(window).load(function(){
    $('.amcharts-chart-div a').remove();
  });
}



