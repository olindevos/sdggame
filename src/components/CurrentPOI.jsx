import React, { useState } from 'react';
import './CurrentPOI.css'; // Import the CSS file

const CurrentPOI = () => {
  const poiList = [
    { name: 'Startplaats' },
    { name: 'POI 1: Het oude kasteel' },
    { name: 'POI 2: De historische kerk' },
    { name: 'POI 3: Het museum' },
    { name: 'POI 4: De markt' },
    { name: 'POI 5: Het stadspark' },
  ];

  const questionList = [
    'Wat is je favoriete reisbestemming?',
    'Hoe oud denk je dat dit kasteel is?',
    'Hoeveel mensen kunnen in deze kerk zitten?',
    'Wat is je favoriete kunststijl?',
    'Welke producten zou je hier kopen?',
    'Wat is het mooiste park dat je ooit hebt bezocht?',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [hasArrived, setHasArrived] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false); // State for controlling question visibility

  const handleArrive = () => {
    setHasArrived(true);
    setShowQuestion(true); // Show the question after clicking "Ik ben er"  
  };

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleNextPOI = () => {
    if (userAnswer.trim() !== '') { // Check if the answer is not empty
      if (currentIndex < poiList.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setUserAnswer(''); // Clear the previous answer
        setHasArrived(false); // Reset the arrived status
        setShowQuestion(false); // Hide the question for the next POI until arrival is confirmed
      } else {
        alert('Je hebt alle POIs bereikt!');
      }
    }
  };

  return (
    <div className="current-poi">
      <h2>Je bent momenteel bij: {poiList[currentIndex].name}</h2>

      {!hasArrived ? (
        <div>
          <button onClick={handleArrive}>Ik ben er!</button>
        </div>
      ) : showQuestion ? (
        <div>
          <p>Vraag: {questionList[currentIndex]}</p>
          <label>
            Jouw antwoord:
            <input type="text" value={userAnswer} onChange={handleAnswerChange} />
          </label>
          <button onClick={handleNextPOI} disabled={userAnswer.trim() === ''}>
            Volgende POI
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CurrentPOI;
