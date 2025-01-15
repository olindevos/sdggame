import React, { useState, useEffect } from 'react';
import "../pages/Olintest.css"

export default function Olintest() {
    const [results, setResults] = useState([]);

    // Mock data voor de resultaten van de game (dit zou je van je backend kunnen krijgen)
    const playerAnswers = {
        1: 'B',
        2: 'A',
        3: 'C',
    };

    const correctAnswers = {
        1: 'A',
        2: 'A',
        3: 'B',
    };

    useEffect(() => {
        // Resultaten berekenen op basis van de antwoorden van de speler en de juiste antwoorden
        const resultsArray = Object.keys(playerAnswers).map((questionNumber) => {
            const playerAnswer = playerAnswers[questionNumber];
            const correctAnswer = correctAnswers[questionNumber];
            return {
                question_number: questionNumber,
                player_answer: playerAnswer,
                is_correct: playerAnswer === correctAnswer,
                correct_answer: correctAnswer,
            };
        });
        setResults(resultsArray);
    }, [playerAnswers, correctAnswers]);

    return (
        <div>
            <h1>Game Resultaten</h1>
            <div id="question-results">
                {results.map((result) => (
                    <div key={result.question_number} className="question-result">
                        <h3>Vraag {result.question_number}</h3>
                        <div className="answers">
                            {['A', 'B', 'C'].map((answer) => {
                                const isCorrect = answer === result.correct_answer;
                                const isPlayerAnswer = answer === result.player_answer;

                                return (
                                    <div
                                        key={answer}
                                        className={`answer ${isCorrect ? 'correct' : ''} ${isPlayerAnswer && !isCorrect ? 'incorrect' : ''}`}
                                    >
                                        {`Antwoord ${answer}`}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            <a href='/Home'>Terug naar Home</a>
        </div>
    );
}
