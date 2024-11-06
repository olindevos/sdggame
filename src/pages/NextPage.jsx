import React, { useState } from 'react';
import './NextPage.css';

function NextPage() {
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Huidige geselecteerde antwoord

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer); // Simuleer een selectie van een antwoord
    };

    return (
        <div className="vraag-container">
            <h2 className="vraag-titel">de dom toren</h2>
            <p className="vraag-beschrijving">wat is 1 + 1</p>
            <div className="antwoorden">
                <button
                    className={`antwoord-knop ${selectedAnswer === 'A' ? 'incorrect' : 'neutral'}`}
                    onClick={() => handleAnswerClick('A')}
                >
                    antwoord A
                </button>
                <button
                    className={`antwoord-knop neutral`} // Standaard lichtgrijs
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
        </div>
    );
}

export default NextPage;
