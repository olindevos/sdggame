import { useEffect, useState } from "react";

const TestLocation = () => {
  const [userCoords, setUserCoords] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Gebruik de Geolocation API om de huidige locatie op te halen
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Huidige locatie:", latitude, longitude); // Log locatie in console
          setUserCoords({ lat: latitude, lon: longitude }); // Zet de locatie in de state
        },
        (err) => {
          console.error("Fout met GPS:", err);
          setError(err.message); // Sla foutmelding op in state
        },
        { enableHighAccuracy: true } // Vraag GPS om hoge precisie
      );
    } else {
      setError("Geolocatie wordt niet ondersteund in deze browser."); // Browser ondersteunt geen GPS
    }
  }, []);

  return (
    <div>
      <h1>Locatietest</h1>
      {userCoords ? (
        <p>
          <strong>Huidige locatie:</strong> <br />
          Latitude: {userCoords.lat} <br />
          Longitude: {userCoords.lon}
        </p>
      ) : error ? (
        <p style={{ color: "red" }}>
          <strong>Fout:</strong> {error}
        </p>
      ) : (
        <p>Locatie ophalen...</p>
      )}
    </div>
  );
};

export default TestLocation;
