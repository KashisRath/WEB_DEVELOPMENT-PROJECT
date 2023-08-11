
// Function to initialize Google Map
function initMap() {
    const mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 }, // Replace with your latitude and longitude
        zoom: 14,
    };

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    const marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 }, // Replace with your marker's latitude and longitude
        map: map,
        title: 'Our Location',
    });
}
