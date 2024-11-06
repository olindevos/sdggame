import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstPage.css';

function FirstPage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/nextpage'); // Navigeer naar de volgende pagina
    };

    return (
        <div className="pagina-container">
            <p className="tekst">je bent nu bij: ...</p>
            <button className="volgende-knop" onClick={handleButtonClick}>
                ben er
            </button>
        </div>
    );
}

export default FirstPage;
