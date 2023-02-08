var map = L.map('map').setView([40.73, -73.93], 9);
//https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
//'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//https://wiki.openstreetmap.org/wiki/Tile_servers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adding police precints from my arc account

  var feature2 = 
      $.getJSON("https://raw.githubusercontent.com/ddlj1397/DataForProject1/main/Subway%20Stations.geojson", function(data2){
     var subIcon = L.icon({
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Noto_Emoji_v2.034_1f687.svg/1024px-Noto_Emoji_v2.034_1f687.svg.png',
      iconSize: [60,60]
    }) 
     var subs = L.geoJson(data2,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: subIcon});
        marker.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT + '<br/>' + feature.properties.SUBJECT);
        return marker;
      }
});
var clusters = L.markerClusterGroup();
    clusters.addLayer(subs);
    map.addLayer(clusters);
       
});

// Now we add the underneath polygon

var feature1 = $.getJSON("https://raw.githubusercontent.com/ddlj1397/DataForProject1/main/NYC_Police_Precincts.geojson", function(data){
  L.geoJson(data).addTo(map);
});
