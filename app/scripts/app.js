define(['vendor/leaflet/leaflet'], function() {
    'use strict';

    var L = window.L;

    var map = L.map('map').setView([40.78678, -73.96957], 15);

    L.tileLayer('http://localhost:2323/{z}/{x}/{y}.png', {
        maxZoom: 17,
        //attribution: 'Fuckikng Darknessmap'
    }).addTo(map);
  
    var ajax = {
        url:'http://178.79.145.84:8080/api/darkness',
        type:'GET',
        success:function(data) {
            var item;
            for(var i = 0; i < data.length; i++){
                item = data[i];
                L.circle([item.loc.lat, item.loc.lon], 10, {
                    color: 'none',
                    fillColor: '#B2B200',
                    fillOpacity: (item.payload / 255)
                }).addTo(map);//.bindPopup("I am a circle.");
            }

            map.setView([item.loc.lat, item.loc.lon],15);
        }
    };
    $.ajax(ajax); 
    return 'Hello from Yeoman!';
});