import React from 'react';
import './LoopPage.css';
import { useNavigate } from 'react-router-dom';

const LoopPage = () => {
    const navigate = useNavigate();

    const handleBenErClick = () => {
        // Hier kun je de navigatie naar de volgende pagina afhandelen, bijvoorbeeld naar een resultatenpagina of een andere actie
        console.log("Je bent er!");
    };

    return (
        <div className="loop-container">
            <h1 className="loop-titel">Loop nu naar...</h1>
            <button className="ben-er-button" onClick={handleBenErClick}>
                ben er
            </button>
        </div>
    );
};

export default LoopPage;
