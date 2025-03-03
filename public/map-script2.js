// Define a function to initialize the map
function initMap() {
    // Specify the location (latitude and longitude) to center the map
    const myLatLng = { lat: 17.3850, lng: 78.4867 }; // Replace with your desired location
    const myLatLng2 = { lat: 22.9868, lng: 87.8550 };
    const myLatLng3 = { lat: 13.0827, lng: 80.2707 };

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
