import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Header from '../components/header';
import './Home.css'; // Zorg ervoor dat je de bijbehorende CSS file hebt toegevoegd.

export default function Home() {
  // State om de popup te tonen of te verbergen
  const [showPopup, setShowPopup] = useState(false);

  // State om bij te houden welke POI moet worden getoond
  const [currentPOI, setCurrentPOI] = useState(1);

  // State om de richting van de animatie te bepalen
  const [direction, setDirection] = useState('right');

  // Functie om de popup te openen/sluiten
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Functie om naar de vorige POI te gaan
  const previousPOI = () => {
    setDirection('left'); // Stel de richting in als 'left'
    setCurrentPOI((prevPOI) => (prevPOI === 1 ? 5 : prevPOI - 1));
  };

  // Functie om naar de volgende POI te gaan
  const nextPOI = () => {
    setDirection('right'); // Stel de richting in als 'right'
    setCurrentPOI((prevPOI) => (prevPOI === 5 ? 1 : prevPOI + 1));
  };

  return (
    <>
      <Header />
      <div>Home Page</div>
      <button onClick={togglePopup} className="open-popup-button">Display info POI1</button>

      {/* Toon de popup als showPopup true is */}
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            {/* Voeg SwitchTransition en CSSTransition toe voor animatie */}
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={currentPOI}
                timeout={500}
                classNames={direction} // Gebruikt de direction ('left' of 'right') voor animatie
              >
                <div className="poi-content">
                  <h2>Point of Interest {currentPOI}</h2>
                  <p>Hier kun je alle informatie over POI {currentPOI} tonen.</p>
                </div>
              </CSSTransition>
            </SwitchTransition>

            {/* Sluit de popup */}
            <button onClick={togglePopup} className="close-button">Close</button>

            {/* Knoppen voor navigeren naar de vorige en volgende POI */}
            <div className="navigation-buttons">
              <button onClick={previousPOI} className="nav-button">&#8592;</button> {/* Pijl naar links */}
              <button onClick={nextPOI} className="nav-button">&#8594;</button>   {/* Pijl naar rechts */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
