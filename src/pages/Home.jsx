import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Header from '../components/header';
import './Home.css';
import maplibregl from 'maplibre-gl';  // Import maplibre-gl here
import "maplibre-gl/dist/maplibre-gl.css";

export default function Home() {
  const mapContainer = useRef(null);

  // State to manage popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // State to manage the current POI being displayed
  const [currentPOI, setCurrentPOI] = useState(1);

  // State to manage animation direction
  const [direction, setDirection] = useState('right');

  // Function to toggle popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Function to navigate to the previous POI
  const previousPOI = () => {
    setDirection('left');
    setCurrentPOI((prevPOI) => (prevPOI === 1 ? 5 : prevPOI - 1));
  };

  // Function to navigate to the next POI
  const nextPOI = () => {
    setDirection('right');
    setCurrentPOI((prevPOI) => (prevPOI === 5 ? 1 : prevPOI + 1));
  };

  useEffect(() => {
    // Ensure the map is initialized after the component is mounted
    if (mapContainer.current) {
      const map = new maplibregl.Map({
        container: mapContainer.current, // Use the mapContainer ref
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
        zoom: 4 // Initial zoom level for better view
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
    }

    document.body.classList.add('home-page');

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <>
      <Header />
      {/* Map container */}
      <div ref={mapContainer} id="map" style={{ height: '100vh', width: '100%' }}></div>

      {/* Button to display info for the first POI */}
      <div className="button-container">
        <button onClick={togglePopup} className="open-popup-button">Display info POI1</button>
      </div>

      {/* Play button */}
      <div className="play-button-container">
        <a className='PlayBtn' href="/createjoin">Play</a>
      </div>

      {/* Popup for POI information */}
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={currentPOI}
                timeout={500}
                classNames={direction}
              >
                <div className="poi-content">
                  <div className="poi-content-title">
                    <div className="navigation-buttons">
                      <button onClick={previousPOI} className="nav-button">
                        &#8592;
                      </button>
                      <h2>POI {currentPOI}</h2>
                      <button onClick={nextPOI} className="nav-button">
                        &#8594;
                      </button>
                    </div>
                  </div>
                  <hr className="PCThr" />
                  <div className="popup-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis.
                  </div>
                </div>
              </CSSTransition>
            </SwitchTransition> 
            <div className="close-button">
              <button onClick={togglePopup} className="close-button">
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
