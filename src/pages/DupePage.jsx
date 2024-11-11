import React from 'react';
import './DupePage.css';
import { useNavigate } from 'react-router-dom';

const LoopPage = () => {
    const navigate = useNavigate();

 const handleBenErClick = () => {
        navigate('/lastpage');
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
