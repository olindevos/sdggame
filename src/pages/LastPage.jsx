import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LastPage.css';


const LastPage = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const navigate = useNavigate();

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextClick = () => {
        navigate('/stats'); // Navigeren naar de LoopPage
    };

    return (
        <div className="vraag-container">
            <h1 className="vraag-titel">Waterinstallaties Utrecht </h1>
            <p className="vraag-beschrijving">Welke van de volgende acties bespaart het meeste water in een huishouden?</p>
            <div className="antwoorden">
                <button
                    className={`antwoord-knop ${selectedAnswer === 'A' ? 'incorrect' : 'neutral'}`}
                    onClick={() => handleAnswerClick('A')}
                >
                    antwoord A
                </button>
                <button
                    className={`antwoord-knop ${selectedAnswer === 'B' ? 'neutral' : 'neutral'}`}
                    onClick={() => handleAnswerClick('B')}
                >
                    antwoord B
                </button>
                <button
                    className={`antwoord-knop ${selectedAnswer === 'C' ? 'correct' : 'neutral'}`}
                    onClick={() => handleAnswerClick('C')}
                >
                    antwoord C
                </button>
            </div>

            {selectedAnswer && (
                <button className="next-button" onClick={handleNextClick}>
                    Finish
                </button>
            )}
        </div>
    );
};

export default LastPage;
