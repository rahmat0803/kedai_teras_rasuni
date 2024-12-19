// Tunggu hingga halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    // Inisialisasi AOS (animasi scroll)
    AOS.init();

    // Inisialisasi Leaflet Map
    const map = L.map('peta').setView([-5.1521495, 119.4378956], 14);

    // Tambahkan tile layer dari OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Tambahkan marker dengan popup
    L.marker([-5.1521495, 119.4378956]).addTo(map)
        .bindPopup('Kedai Teras Rasuni.<br>Jl. Diponegoro.')
        .openPopup();
});
