import { useEffect, useState } from "react";
import mockLocations from "../data/mockLocations"; // Locaties
import { getDistance } from "../utils/geoUtils"; // Functie om afstand te berekenen
import "../pages/LastPage.css"; // CSS voor styling

const GPSGame = () => {
  const [userCoords, setUserCoords] = useState(null); // Huidige coördinaten
  const [currentLocation, setCurrentLocation] = useState(null); // Locatie op basis van coördinaten
  const [answer, setAnswer] = useState(""); // Antwoord van gebruiker
  const [feedback, setFeedback] = useState(""); // Feedback

  // Haal de huidige locatie op via de Geolocation API
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Huidige locatie:", latitude, longitude); // Log locatie
          setUserCoords({ lat: latitude, lon: longitude });
        },
        (error) => console.error("Fout met GPS:", error),
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocatie wordt niet ondersteund in deze browser.");
    }
  }, []);

  // Controleer welke locatie overeenkomt met de gebruiker
  useEffect(() => {
    if (userCoords) {
      const foundLocation = mockLocations.find((loc) => {
        const distance = getDistance(userCoords.lat, userCoords.lon, loc.lat, loc.lon);
        console.log(`Afstand tot ${loc.name}: ${distance} meter`);
        return distance < 70; // Controleer of de gebruiker binnen 50 meter is
      });
      setCurrentLocation(foundLocation || null); // Zet de huidige locatie
    }
  }, [userCoords]);

  // Controleer het antwoord
  const handleAnswerSubmit = () => {
    if (currentLocation && answer.toLowerCase() === currentLocation.answer.toLowerCase()) {
      setFeedback("Goed gedaan! 🎉");
    } else {
      setFeedback("Helaas, dat is niet correct. Probeer opnieuw!");
    }
  };

  return (
    <div className="vraag-container">
      {currentLocation ? (
        <>
          <h1 className="vraag-titel">{currentLocation.question}</h1>
          <div className="antwoorden">
            <input
              type="text"
              className="antwoord-knop neutral"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Typ je antwoord hier"
            />
            <button className="antwoord-knop correct" onClick={handleAnswerSubmit}>
              Controleer
            </button>
          </div>
          <p className="vraag-beschrijving">{feedback}</p>
        </>
      ) : (
        <p className="vraag-beschrijving">
          Geen locatie gevonden. Zorg dat je GPS aanstaat en beweeg naar een bekende locatie.
        </p>
      )}
    </div>
  );
};

export default GPSGame;
