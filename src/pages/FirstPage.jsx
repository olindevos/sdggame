import React from 'react';
import '././FirstPage.css';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
    const navigate = useNavigate();

 const handleBenErClick = () => {
        navigate('/nextpage');
        console.log("Je bent er!");
    };

    return (
        <div className="loop-container">
            <h1 className="loop-titel">je bent nu bij Utrecht Centraal!</h1>
            <button className="ben-er-button" onClick={handleBenErClick}>
                ben er
            </button>
        </div>
    );
};

export default FirstPage;
