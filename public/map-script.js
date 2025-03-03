// Define a function to initialize the map
function initMap() {
    // Specify the location (latitude and longitude) to center the map
    const myLatLng = { lat: 28.6139, lng: 77.2090 }; // Replace with your desired location
    const myLatLng2 = { lat: 19.075983, lng: 72.877655 };
    const myLatLng3 = { lat: 22.309425, lng: 72.136230 };

    // Create a new Google Map instance
    const map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 4 // Adjust the zoom level as needed
    });

    const marker1 = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'My Marker1'
    });

    // Add a marker to the map
    const marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map,
        title: 'My Marker2'
    });

    const marker3 = new google.maps.Marker({
        position: myLatLng3,
        map: map,
        title: 'My Marker3'
    });
}


