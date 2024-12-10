import maplibregl from 'maplibre-gl';

// Initialize the map
const map = new maplibregl.Map({
    container: 'map', // ID of the HTML element
    style: {
        version: 8,
        sources: {
            osm: {
                type: 'raster',
                tiles: [
                    'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                ],
                tileSize: 256
            }
        },
        layers: [
            {
                id: 'osm',
                type: 'raster',
                source: 'osm',
                minzoom: 0,
                maxzoom: 20
            }
        ]
    },
    center: [5.109664, 52.088890], // Utrecht Centraal Station
    zoom: 14 // Initial zoom level for better view
});

// Add navigation controls to the map
map.addControl(new maplibregl.NavigationControl());

// Add markers
const markers = [
    [5.10990, 52.08941], // Utrecht Centraal Station
    [5.12366, 52.09478],
    [5.10780, 52.11200],
    [5.12804, 52.09869],
    [-77.58871, 35.27128],
    [5.10990, 52.08941],
    [5.10990, 52.08941]
];

// Add each marker to the map
markers.forEach(([lng, lat]) => {
    new maplibregl.Marker().setLngLat([lng, lat]).addTo(map);
});

// Export the map for use elsewhere (if needed)
export default map;
