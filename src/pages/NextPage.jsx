import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NextPage.css';

const NextPage = () => {
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null); // Houdt bij of het antwoord juist of onjuist is
  const navigate = useNavigate();

  // Functie om de vraag van de backend op te halen met de 'X-HWID' header
  const fetchQuestion = async () => {
    try {
      const response = await fetch('http://87.106.86.138:8000/questions/initial', {
        method: 'GET',
        headers: {
          'X-HWID': '1',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

 HEAD
      const data = await response.json();
      setQuestionData(data);
    } catch (error) {
      console.error('Error fetching question:', error);

            const data = await response.json();
            setQuestionData(data);
    } catch (error) {
            console.error('Error fetching question:', error);
        }
    };

    useEffect(() => {
        fetchQuestion();
    }, []);

    const handleAnswerClick = (answer) => {
        if (!selectedAnswer) { 
            setSelectedAnswer(answer);
            setIsCorrect(answer === questionData.correct_answer); // Controleer of het antwoord correct is
        }
    };

    const handleNextClick = () => {
        navigate('/loop'); // Navigeren naar de LoopPage
    };

    // Return een laadindicator als de data nog niet is opgehaald
    if (!questionData) {
        return <div>Loading...</div>;
    }
  };

  // useEffect om de vraag op te halen bij het laden van de component
  useEffect(() => {
    fetchQuestion();
  }, []);

  useEffect(() => {
    if (isCorrect && selectedAnswer) {
      // Voeg de 'animate' class toe aan het juiste antwoord
      const correctButton = document.querySelector(`.antwoord-knop.correct`);
      if (correctButton) {
        correctButton.classList.add('animate');
        // Verwijder de 'animate' class na de animatie (0.6s)
        setTimeout(() => {
          correctButton.classList.remove('animate');
        }, 600);
      }
    }
  }, [isCorrect, selectedAnswer]);

  const handleAnswerClick = (answer) => {
    if (!selectedAnswer) {
      // Alleen doorvoeren als er nog geen antwoord geselecteerd is
      setSelectedAnswer(answer);
      const correct = answer === questionData.correct_answer;
      setIsCorrect(correct); // Controleer of het antwoord correct is
    }
  };

  const handleNextClick = () => {
    navigate('/loop'); // Navigeren naar de LoopPage
  };

  // Return een laadindicator als de data nog niet is opgehaald
  if (!questionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vraag-container">
      <h1 className="vraag-titel">{questionData.poi}</h1>
      <p className="vraag-beschrijving">{questionData.question}</p>
      <div className="antwoorden">
        <button
          className={`antwoord-knop ${
            selectedAnswer === 'A'
              ? selectedAnswer === questionData.correct_answer
                ? 'correct'
                : 'incorrect'
              : 'neutral'
          }`}
          onClick={() => handleAnswerClick('A')}
          disabled={!!selectedAnswer} // Schakel de knop uit als er een antwoord is geselecteerd
        >
          {questionData.answers.A}
        </button>
        <button
          className={`antwoord-knop ${
            selectedAnswer === 'B'
              ? selectedAnswer === questionData.correct_answer
                ? 'correct'
                : 'incorrect'
              : 'neutral'
          }`}
          onClick={() => handleAnswerClick('B')}
          disabled={!!selectedAnswer} // Schakel de knop uit als er een antwoord is geselecteerd
        >
          {questionData.answers.B}
        </button>
        <button
          className={`antwoord-knop ${
            selectedAnswer === 'C'
              ? selectedAnswer === questionData.correct_answer
                ? 'correct'
                : 'incorrect'
              : 'neutral'
          }`}
          onClick={() => handleAnswerClick('C')}
          disabled={!!selectedAnswer} // Schakel de knop uit als er een antwoord is geselecteerd
        >
          {questionData.answers.C}
        </button>
      </div>

      {selectedAnswer && (
        <button className="next-button" onClick={handleNextClick}>
          Volgende
        </button>
      )}
    </div>
  );
};

export default NextPage;
