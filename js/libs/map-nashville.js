google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(36.040121, -86.741891),
            zoom: 10,
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
            draggable : false,
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
                'hue': '#e8ddbd'
            }, {
                'gamma': 0.44
            }, {
                'saturation': -33
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
['JON ALAN SALON - COOL SPRINGS', '2000 Meridian Blvd. STE 104  <br>Franklin, TN 37065', '615.771.6400', '../../images/cool/1.jpg', 'http://jonalansalon.com/read-reviews/', 35.9515509, -86.80799330000002, 'http://haircoloroffer.com/images/map-marker.png'],['JON ALAN SALON - BELLEVUE CORNER', '7052 Hwy 70 South <br>Nashville, TN 37221', '615.646.8600', '../../images/bellevue/1.jpg', 'http://jonalansalon.com/read-reviews/', 36.07542919999999, -86.9180475, 'http://haircoloroffer.com/images/map-marker.png'],['JON ALAN SALON - NIPPERS CORNER', '15556 Old Hickory Blvd. <br>Nashville, TN 37211', '615.331.9800', '../../images/nippers/1.jpg', 'http://jonalansalon.com/read-reviews/', 36.0400346, -86.74159829999996, 'http://haircoloroffer.com/images/map-marker.png'],['ONU SALON', '2615 Medical Center Parkway, #2065 <br>Murfreesboro, TN 37129', '615.900.3377', '../../images/onu/1.jpg', 'http://onusalon.com/request-appointment.html', 35.8628485, -86.4464451, 'http://haircoloroffer.com/images/map-marker.png'],['ORIGINA SALON SPA', '443 Cool Springs Blvd. Suite 105 <br>Franklin, TN 37067', '615.771.9005', '../../images/origina/1.jpg', 'http://www.originasalon.com/request-appointment.html', 35.9466244, -86.8249073, 'http://haircoloroffer.com/images/map-marker.png'],['TANGERINE SALON', '845 N Thompson Ln  <br>Murfreesboro, TN 37129', '615.896.3302', '../../images/tangerine/1.jpg', 'http://www.tangerinesalonandspa.com/request-an-appointment.html', 35.8607828, -86.4302098, 'http://haircoloroffer.com/images/map-marker.png'],['TRUE BLUE SALON', '2817 West End Ave., Ste 109 <br>Nashville, TN 37203', '615.329.4454', '../../images/tangerine/1.jpg', 'http://www.truebluesalon.com/booking-giftcards.html', 36.1445108, -86.81237870000001, 'http://haircoloroffer.com/images/map-marker.png'],['WILLIAM EDGE - NASHVILLE', '2214 Elliston Place <br>Nashville, TN 37203', '(615) 515-3767', '../../images/edge/1.jpg', 'http://williamedge.com/nashville-salons/elliston/appointment-request/', 36.1509908, -86.8048382, 'http://haircoloroffer.com/images/map-marker.png']
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