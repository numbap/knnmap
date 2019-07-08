function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    var uluru2 = {lat: -25.444, lng: 132.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 12, center: uluru});
    // The marker, positioned at Uluru
    var marker = []
    marker.push(new google.maps.Marker({position: {lat: -25.314, lng: 131.046}, map: map, icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}));
    marker.push(new google.maps.Marker({position: {lat: -25.364, lng: 131.026}, map: map, icon: { url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png" }}));
    marker.push(new google.maps.Marker({position: {lat: -25.384, lng: 131.016}, map: map, icon: { url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png" }}));
    marker.push(new google.maps.Marker({position: {lat: -25.301, lng: 131.096}, map: map, icon: { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }}));
    marker.push(new google.maps.Marker({position: {lat: -25.310, lng: 131.092}, map: map, icon: { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }}));
    marker.push(new google.maps.Marker({position: {lat: -25.343, lng: 131.083}, map: map, icon: { url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" }}));
    marker.push(new google.maps.Marker({position: {lat: -25.396, lng: 131.057}, map: map, icon: { url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" }}));
    marker.push(new google.maps.Marker({position: {lat: -25.303, lng: 131.028}, map: map, icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}));
    marker.push(new google.maps.Marker({position: {lat: -25.339, lng: 131.040}, map: map, icon: { url: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png" }}));
    marker.push(new google.maps.Marker({position: {lat: -25.372, lng: 131.019}, map: map, icon: { url: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png" }}));
  }