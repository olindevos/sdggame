import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/LastPage.css"; // CSS behouden

const LastPage = () => {
  const [userCoords, setUserCoords] = useState(null); // Gebruikerscoördinaten
  const [questionData, setQuestionData] = useState(null); // Vraaggegevens van de API
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Geselecteerd antwoord
  const [loading, setLoading] = useState(false); // Laadstatus
  const [error, setError] = useState(""); // Foutstatus
  const navigate = useNavigate(); // Voor navigatie naar andere pagina's

  // Haal de huidige locatie van de gebruiker op
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserCoords({ lat: 52.0842391, lon: 5.1756274 });
        },
        (err) => setError("Kan huidige locatie niet ophalen."),
        { enableHighAccuracy: true }
      );
    } else {
      setError("Geolocatie wordt niet ondersteund in deze browser.");
    }
  }, []);

  // Stuur coördinaten periodiek naar de API
  useEffect(() => {
    if (userCoords) {
      const interval = setInterval(() => {
        fetch("https://87.106.86.138:8000/gps/location", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCoords),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`API-fout: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log("Vraag ontvangen:", data);
            setQuestionData(data);
            setLoading(false);
          })
          .catch((err) => {
            console.error("API Fout:", err.message);
            setError("Fout bij ophalen van vraag.");
          });
      }, 10000); // Stuur coördinaten elke 10 seconden

      return () => clearInterval(interval); // Ruim interval op als component unmount
    }
  }, [userCoords]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextClick = () => {
    navigate("/Olintest"); // Navigeren naar de volgende pagina (pas aan indien nodig)
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div className="vraag-container">
      {questionData ? (
        <>
          <h1 className="vraag-titel">{questionData.question.question_text}</h1>
          <div className="antwoorden">
            {Object.entries(questionData.question.answers).map(([key, value]) => (
              <button
                key={key}
                className={`antwoord-knop ${
                  selectedAnswer === key
                    ? key === questionData.question.correct_answer
                      ? "correct"
                      : "incorrect"
                    : "neutral"
                }`}
                onClick={() => handleAnswerClick(key)}
                disabled={selectedAnswer !== null} // Disable knoppen na selectie
              >
                {key}: {value}
              </button>
            ))}
          </div>
          <p className="vraag-beschrijving">Locatie: {questionData.estimated_address}</p>
          {selectedAnswer && (
            <button className="next-button" onClick={handleNextClick}>
              Volgende
            </button>
          )}
        </>
      ) : (
        <p>Wachten op een vraag...</p>
      )}
    </div>
  );
};

export default LastPage;
