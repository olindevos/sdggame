import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const POIPage = ({ apiUrl, isQuestionPage }) => {
  const [data, setData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const navigate = useNavigate();

  // Haal data op van de API
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: { 'X-HWID': '1' },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  const handleAnswerClick = (answer) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
      setIsCorrect(answer === data.correct_answer);
    }
  };

  const handleNextClick = () => {
    navigate('/nextpoi'); // Navigeer naar de volgende POI of eindpagina
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="pagina-container">
      <h1>{data.poi}</h1>
      {!isQuestionPage && (
        <div>
          <p>{data.information}</p>
          <button onClick={handleNextClick}>Volgende POI</button>
        </div>
      )}

      {isQuestionPage && (
        <div>
          <p>{data.question}</p>
          <div className="antwoorden">
            {Object.keys(data.answers).map((key) => (
              <button
                key={key}
                className={`antwoord-knop ${
                  selectedAnswer === key
                    ? selectedAnswer === data.correct_answer
                      ? 'correct'
                      : 'incorrect'
                    : 'neutral'
                }`}
                onClick={() => handleAnswerClick(key)}
                disabled={!!selectedAnswer}
              >
                {data.answers[key]}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <button className="next-button" onClick={handleNextClick}>
              Volgende
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default POIPage;
