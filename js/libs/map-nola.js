google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(29.968386, -90.095543),
            zoom: 12,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
            'elementType': 'geometry',
            'stylers': [{
                'hue': '#e8ddbd'
            }, {
                'saturation': -18
            }, {
                'lightness': -10
            }, {
                'gamma': 0.72
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels.icon'
        }, {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry',
            'stylers': [{
                'hue': '#ffffff'
            }, {
                'gamma': 3.1
            }]
        }, {
            'featureType': 'water',
            'stylers': [{
                'hue': '#442523'
            }, {
                'gamma': 10
            }, {
                'saturation': 0
            }]
        }, {
            'featureType': 'poi.park',
            'stylers': [{
                'hue': '#e8ddbd'
            }, {
                'saturation': -23
            }]
        }, {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'hue': '#826967'
            }, {
                'gamma': 0.77
            }, {
                'saturation': 65
            }, {
                'lightness': 99
            }]
        }, {
            'featureType': 'water',
            'elementType': 'labels.text.stroke',
            'stylers': [{
                'gamma': 0.11
            }, {
                'weight': 5.6
            }, {
                'saturation': 99
            }, {
                'hue': '#826967'
            }, {
                'lightness': -86
            }]
        }, {
            'featureType': 'transit.line',
            'elementType': 'geometry',
            'stylers': [{
                'lightness': -48
            }, {
                'hue': '#ff5e00'
            }, {
                'gamma': 1.2
            }, {
                'saturation': -23
            }]
        }, {
            'featureType': 'transit',
            'elementType': 'labels.text.stroke',
            'stylers': [{
                'saturation': -64
            }, {
                'hue': '#826967'
            }, {
                'lightness': 16
            }, {
                'gamma': 0.47
            }, {
                'weight': 2.7
            }]
        }],
        }
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['Paris Parker Canal Place', '333 Canal St. <br>New Orleans, LA 70130', '615.771.6400', '../../images/canal/3.jpg', 'http://parisparker.com/booking-and-gifts/', 29.951753, -90.064995, 'http://haircoloroffer.com/images/map-marker.png'],['Salon Diversions', '838 Royal St, Suite O <br>New Orleans, LA 70116', '504-299-0040', '../../images/diversions/1.jpg', 'https://local.intuit.com/b/salondiversions/schedule', 29.959564, -90.063393, 'http://haircoloroffer.com/images/map-marker.png'],['Paris Parker Lakeside Mall', '3301 Veterans Memorial Blvd. <br>Metairie, LA 70002', '504.846.5256', '../../images/lakeside/1.jpg', 'http://parisparker.com/booking-and-gifts/', 30.005426, -90.158630, 'http://haircoloroffer.com/images/map-marker.png'],['Paris Parker Magazine', '5434 Magazine Street <br>New Orleans, LA 70115', '615.900.3377', '../../images/magazine/1.jpg', 'http://parisparker.com/booking-and-gifts/', 29.920895, -90.115976, 'http://haircoloroffer.com/images/map-marker.png'],['Keith Noonan Salon', '800 Metairie Road, Suite O <br>Metairie, LA 70005', '504.482.1866', '../../images/noonan/1.jpg', 'http://www.keithnoonansalon.net/appointments.php', 29.988091, -90.132022, 'http://haircoloroffer.com/images/map-marker.png'],['Paris Parker Prytania', '4900 Prytania St. <br>New Orleans, LA 70115', '504.891.8874', '../../images/prytania/1.jpg', 'http://parisparker.com/booking-and-gifts', 29.926715, -90.107753, 'http://haircoloroffer.com/images/map-marker.png']
        ];
        for (i = 0; i < locations.length; i++) {
      if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
      if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
           if (locations[i][3] =='undefined'){ thumb ='';} else { thumb = locations[i][3];}
           if (locations[i][4] =='undefined'){ booknow ='';} else { booknow = locations[i][4];}
           if (locations[i][6] =='undefined'){ web ='';} else { web = locations[i][6];}

           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: locations[i][1],
                tel: telephone,
                thumb: thumb,
                booknow: booknow
            });
link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, thumb, booknow, web, link);
     }
 function bindInfoWindow(marker, map, title, desc, telephone, thumb, booknow, web, link) {
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());
           iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
               if (infoWindowVisible()) {
                   iw.close();
                   infoWindowVisible(false);
               } else {
                   //var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p></div>";
                   var html = "<div style='color:#000;background-color:#fff;padding:5px;;'><div style='float: left;width:46%;padding-right:15px;'><img src='" + thumb + "'></div><h4>" + title + "</h4><p>" + desc + "<p><p>" + telephone + "</p><a class='map-button' target='_blank' href='" + booknow + "'>BOOK NOW</a><p><a href='" + link + "'' >" + "</a></div>";
                   iw = new google.maps.InfoWindow({content:html});
                   iw.open(map,marker);
                   infoWindowVisible(true);
                   
               }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
 }
}


