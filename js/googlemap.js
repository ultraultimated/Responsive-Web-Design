
function initMap() {
    var uluru = {lat: 23.105851 ,lng: 72.593756};
    var map = new google.maps.Map(
        document.getElementById('map-display'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}
