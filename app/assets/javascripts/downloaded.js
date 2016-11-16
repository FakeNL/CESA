if(typeof sciHubData !== 'undefined') {

  var categoryData = [
    {
      category: 'None',
      value: 13,
    },
    {
      category: 'Biochemistry',
      value: 8
    },
    {
      category: 'Biophysics',
      value: 2
    },
    {
      category: 'Chemistry(all)',
      value: 5
    },
    {
      category: 'Engineering',
      value: 2
    },
    {
      category: 'General',
     value: 18,
    },
    {
      category: 'Genetics',
     value: 2,
    },
    {
      category: 'Geology',
      value: 1
    },
    {
      category: 'Mechanical Engineering',
      value: 7
    },
    {
      category:'Medicine',
      value: 11
    },
    {
      category: 'Molecular Biology',
      value: 2
    },
    {
      category: 'Neuroscience(all)',
      value: 2
    },
    {
      category: 'Physics and Astronomy',
      value: 3
    },
    {
      category: 'Physiology',
      value: 2
    },
    {
      category: 'Political Science and International Relations',
      value: 1
    },
    {
      category: 'Spectroscopy',
      value: 1
    }
  ];

    var piechart = AmCharts.makeChart( "piechart-downloaded", {
      "legend":{
        "position":"bottom",
        "autoMargins": false
      },
      "type": "pie",
      "theme": "light",
      "dataProvider": categoryData,
      "valueField": "value",
      "colorField": "color",
      "titleField": "category",
      "outlineAlpha": 0.4,
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "depth3D": 15,
      "balloon":{
        "fixedPosition": false
      },
      "export": {
        "enabled": false
      }
    } );

    $(window).load(function(){
      $('.target-articles').html(generatetop10);
      $('.amcharts-chart-div a').remove();
    });
  }
