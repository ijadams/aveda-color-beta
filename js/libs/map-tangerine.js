/* jshint ignore:start */
google.maps.event.addDomListener(window, 'load', init);
var myCenter = new google.maps.LatLng(35.861335, -86.429871);

var map = null;
var marker = null;

function init() {
    var mapOptions = {
        center: myCenter,
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: true,
        panControl: true,
        streetViewControl: false,
        draggable: true,
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
        ['Tangerine Salon', '845 N Thompson Ln  <br>Murfreesboro, TN 37129', '615.896.3302', 'undefined', 'undefined', 35.861335, -86.429871, 'http://haircoloroffer.com/images/map-marker.png']
    ];
    for (i = 0; i < locations.length; i++) {
        if (locations[i][1] == 'undefined') {
            description = '';
        } else {
            description = locations[i][1];
        }
        if (locations[i][2] == 'undefined') {
            telephone = '';
        } else {
            telephone = locations[i][2];
        }
        if (locations[i][3] == 'undefined') {
            email = '';
        } else {
            email = locations[i][3];
        }
        if (locations[i][4] == 'undefined') {
            web = '';
        } else {
            web = locations[i][4];
        }
        if (locations[i][7] == 'undefined') {
            markericon = '';
        } else {
            markericon = locations[i][7];
        }
        marker = new google.maps.Marker({
            icon: markericon,
            position: myCenter,
            map: map,
            title: locations[i][0],
            desc: description,
            tel: telephone,
            email: email,
            web: web
        });
        if (web.substring(0, 7) != "http://") {
            link = "http://" + web;
        } else {
            link = web;
        }
        bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
    }

    function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
        var infoWindowVisible = (function() {
            var currentlyVisible = false;
            return function(visible) {
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
                var html = "<div style='color:#000;background-color:#fff;padding:5px;;'><div style='float: left;width:46%;padding-right:15px;'><img src='../../images/tangerine/1.jpg'></div><h4>" + title + "</h4><p>" + desc + "<p><p>" + telephone + "<a class='map-button' href='http://www.tangerinesalonandspa.com/request-an-appointment.html'>BOOK NOW</a><p><a href='" + link + "'' >" + web + "</a></div>";
                iw = new google.maps.InfoWindow({
                    content: html
                });
                iw.open(map, marker);
                infoWindowVisible(true);
            }
        });
        google.maps.event.addListener(iw, 'closeclick', function() {
            infoWindowVisible(false);
        });
    }
}
/* jshint ignore:end */
