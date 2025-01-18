const sidebar = document.getElementById('sidebar');
const toggleButton = document.querySelector('.toggle-btn');

function toggleSidebar() {
    sidebar.classList.toggle('open');
}

// Initialize OpenLayers map and layers
var osm = new ol.layer.Tile({
    title: "OpenStreetMap",
    groupName: "base",
    source: new ol.source.OSM()
});

// Define other layers and the map object here
// Include the logic for loading layers, handling visibility, etc.
