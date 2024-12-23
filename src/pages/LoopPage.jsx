import React from 'react';
import './LoopPage.css';
import { useNavigate } from 'react-router-dom';

const LoopPage = () => {
    const navigate = useNavigate();

 const handleBenErClick = () => {
        navigate('/thirdpage');
        console.log("Je bent er!");
    };

            
    return (
        <div className="loop-container">
            <h1 className="loop-titel">Loop nu naar Universiteitsbibliotheek Utrecht</h1>
            <button className="ben-er-button" onClick={handleBenErClick}>
                ben er
            </button>
        </div>
    );
};

export default LoopPage;