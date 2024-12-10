const map1 = new maplibregl.Map({
    container: 'map', // ID of the HTML element
    style: 'https://example.com/style.json', // Style URL
    center: [lng, lat], // Longitude, Latitude
    zoom: 12, // Initial zoom level
    style: 'https://demotiles.maplibre.org/style.json'
});
const map = new maplibregl.Map({
    container: 'map',
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
                maxzoom: 18
            }
        ]
    },
    center: [-122.420679, 37.772537],
    zoom: 12
});
