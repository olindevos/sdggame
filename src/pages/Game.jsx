import React from 'react';
import { Link } from 'react-router-dom';
import './Game.css';

export default function Game({ results = [] }) {
  const correctAnswers = results.filter(result => result.isCorrect).length;

  return (
    <div className="game-screen">
      <h2>{correctAnswers} / 12</h2>
      <div className="answers-list">
        {results.map((result, index) => (
          <div key={index} className="answer-item">
            <div className="question-info">
              <div className="question-image-placeholder"></div>
              <div className="answer-options">
                {result.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`option ${
                      option === result.correctAnswer
                        ? 'correct'
                        : option === result.userAnswer && !result.isCorrect
                        ? 'incorrect'
                        : 'neutral'
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
         <div className='home-buttonBackground'>
            <Link to="/" className="home-button">terug naar home</Link>
         </div>
    </div>
  );
}
