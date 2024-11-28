import React from 'react';
import './FirstPage.css';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate();

  // Definieer een functie om naar de volgende pagina te navigeren
  const handleBenErClick = () => {
    navigate('/nextpage');
    console.log("Je bent er!");
  };

  return (
    <div className="pagina-container">
      <p className="tekst">je bent nu bij: ...</p>
      <button className="volgende-knop" onClick={handleBenErClick}>Volgende</button>
      
      <div className="loop-container">
        <h1 className="loop-titel">je bent nu bij Utrecht Centraal!</h1>
        <button className="ben-er-button" onClick={handleBenErClick}>
          ben er
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
