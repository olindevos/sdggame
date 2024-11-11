import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThirdPage.css';


const ThirdPage = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const navigate = useNavigate();

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    const handleNextClick = () => {
        navigate('/dupe'); // Navigeren naar de LoopPage
    };

    return (
        <div className="vraag-container">
            <h1 className="vraag-titel">Universiteitsbibliotheek Utrecht</h1>
            <p className="vraag-beschrijving">Hoe kan beter onderwijs bijdragen aan het verminderen van ongelijkheid?</p>
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
                    Volgende
                </button>
            )}
        </div>
    );
};

export default ThirdPage;
