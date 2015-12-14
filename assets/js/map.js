$(function(){

	/* Configuration */

			L.mapbox.accessToken = 'pk.eyJ1IjoiYmFiYW1hcmt1cyIsImEiOiJjaWh6MHBtbnUwNDF1dGxtMXRsMHlqcXdmIn0.K_lbDRn-NCpfEG5dhdmMrA';
			var map = L.mapbox.map('map', 'mapbox.streets')
			.setView([42.87596410238254, -100.546875], 4);

			// Start and end points, in x = longitude, y = latitude values
			var start = { x: -122, y: 48 };
			var end = { x: -77, y: 39 };
			var generator = new arc.GreatCircle(start, end, { name: 'Seattle to DC' });
			var line = generator.Arc(100, { offset: 10 });
			L.geoJson(line.json()).addTo(map);
    L.control.locate().addTo(map);

	//var map = L.map('map').setView([51.505, -0.09], 13);
	
//	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmFiYW1hcmt1cyIsImEiOiJjaWh6MHBtbnUwNDF1dGxtMXRsMHlqcXdmIn0.K_lbDRn-NCpfEG5dhdmMrA', {
  //  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
   // maxZoom: 18,
   // id: 'map',
    //accessToken: 'pk.eyJ1IjoiYmFiYW1hcmt1cyIsImEiOiJjaWh6MHBtbnUwNDF1dGxtMXRsMHlqcXdmIn0.K_lbDRn-NCpfEG5dhdmMrA'
//}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);


marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);
	
	function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

});
