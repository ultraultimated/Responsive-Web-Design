
function initMap() {
    var uluru = {lat: 23.039685, lng: 72.547707};
    var map = new google.maps.Map(
        document.getElementById('map-display'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}
