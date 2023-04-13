let ipList = [];

fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=988347346abd482f8b13e2467d03d81b")
.then((response) => {
    return response.json();
})
.then ((data) => {
    console.log(data);
    ipList = data.ip_address;
    let address = data.ip_address;
    let addressResult = document.querySelector("#address-result");
    addressResult.innerHTML = `${address}`;

    let location = data.city;
    let region = data.region_iso_code;
    let postalCode = data.postal_code;
    let locationResult = document.querySelector("#location-result");
    locationResult.innerHTML = `${location + ", " + region + " "+ postalCode}`;

    let timezone = data.timezone.abbreviation;
    let offset = data.timezone.gmt_offset;
    let timezoneResult = document.querySelector("#timezone-result");
    timezoneResult.innerHTML = `${timezone + offset + ":00"}`;

    let isp = data.connection.isp_name;
    let ispResult = document.querySelector("#isp-result");
    ispResult.innerHTML = `${isp}`;

    const lati = data.latitude;
    const longi = data.longitude;
    map.panTo(new L.LatLng(lati, longi));
})

var blackIcon = L.icon({
    iconUrl: '/images/icon-location.svg'
});

var map = L.map('map');
map.setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

navigator.geolocation.watchPosition(success, error);

function success(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

    L.marker([lat, lng], {icon: blackIcon}).addTo(map);
    //L.circle([lat, lng], { radius: accuracy }).addTo(map);
    map.panTo(new L.LatLng(lat, lng));
}

function error(err) {

    if (err.code === 1) {
        alert("Please allow geolocation access");
    } else {
        alert("Cannot get current location");
    }

}

function centerLeafletMapOnMarker(map, marker) {
  var lat = [ marker.getLatLng() ];
  var markerBounds = L.latLngBounds(lat);
  map.fitBounds(markerBounds);
}

var searchBar = document.querySelector("#ipsearch");
var submitButton = document.querySelector("#submit");

searchBar.addEventListener("keyup", (e) => {
    console.log(e.target.value);
});

function searchAddress(event) {
    const ipSearched = event.target.value;
    
    alert(searchBar.value);
}