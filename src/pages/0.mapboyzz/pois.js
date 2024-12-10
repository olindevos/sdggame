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

// Add navigation controls
map.addControl(new maplibregl.NavigationControl());

// Add a marker at Utrecht Centraal Station
const marker1 = new maplibregl.Marker()
    .setLngLat([5.10990, 52.08941]) // Utrecht Centraal Station
    .addTo(map);

const marker2 = new maplibregl.Marker()
    .setLngLat([5.12366, 52.09478]) // Utrecht Centraal Station
    .addTo(map);

const marker3 = new maplibregl.Marker()
    .setLngLat([5.10780, 52.11200]) // Utrecht Centraal Station
    .addTo(map);

const marker4 = new maplibregl.Marker()
    .setLngLat([5.12804, 52.09869]) // Utrecht Centraal Station
    .addTo(map);

const marker5 = new maplibregl.Marker()
    .setLngLat([-77.58871, 35.27128]) // Utrecht Centraal Station
    .addTo(map);

const marker6 = new maplibregl.Marker()
    .setLngLat([5.10990, 52.08941]) // Utrecht Centraal Station
    .addTo(map);

const marker7 = new maplibregl.Marker()
    .setLngLat([5.10990, 52.08941]) // Utrecht Centraal Station
    .addTo(map);
