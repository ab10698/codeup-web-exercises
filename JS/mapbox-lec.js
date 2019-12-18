mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 15,
    center: [-98.4916, 29.4252],
    pitch: 5

});
var markerOptions = {
    color: "purple",
    draggable: true,
    // pitchAlignment: "viewport"
};
var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.4861, 29.4260])
    .addTo(map);

var popup = new mapboxgl.Popup()
    .setLngLat([-98.489615, 29.426827])
    .setHTML("<p>Codeup Rocks!</p>")
    .addTo(map)

var alamoPopup = new mapboxgl.Popup()
    .setHTML("<p>Remember The Alamo!</p>")
    .addTo(map)

marker.setPopup(alamoPopup)