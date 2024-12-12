// Mapa con OpenStreetMap
var map = L.map('map').setView([9.992547, -84.221051], 14); // Coordenadas de ejemplo (San José, Costa Rica)

// Capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//9.992547, -84.221051
// Marcador en la ubicación del cine (ejemplo)
L.marker([9.992547, -84.221051]).addTo(map)
    .bindPopup('Cine Cultura')
    .openPopup();