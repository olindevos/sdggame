import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/ThirdPage.css"; // CSS behouden

const ThirdPage = () => {
  const [userCoords, setUserCoords] = useState(null); // Gebruikerscoördinaten
  const [questionData, setQuestionData] = useState(null); // Vraaggegevens van de API
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Geselecteerd antwoord
  const [loading, setLoading] = useState(false); // Laadstatus
  const [error, setError] = useState(""); // Foutmelding
  const navigate = useNavigate(); // Voor navigatie naar andere pagina's

  // Haal de huidige locatie van de gebruiker op
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserCoords({ lat: latitude, lon: longitude });
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

  // Verwerk de selectie van een antwoord
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  // Verwerk de klik op de volgende knop
  const handleNextClick = () => {
    if (selectedAnswer === questionData.question.correct_answer) {
      console.log("Correct antwoord!");
    } else {
      console.log("Onjuist antwoord!");
    }
    navigate("/dupe"); // Navigeren naar de volgende pagina
  };

  if (loading) {
    return <div>Loading...</div>; // Toon een laadstatus
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>; // Toon een foutmelding
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
                disabled={selectedAnswer !== null} // Blokkeer knoppen na selectie
              >
                {key}: {value}
              </button>
            ))}
          </div>
          <p className="vraag-beschrijving">
            Locatie: {questionData.estimated_address}
          </p>
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

export default ThirdPage;
