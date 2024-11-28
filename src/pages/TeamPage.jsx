import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamPage.css'; // Zorg dat je de juiste CSS verwijst

const TeamPage = () => {
    const [teamName, setTeamName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Voorkom het standaard submitgedrag
        if (teamName.trim() === '') {
            alert('Voer een teamnaam in!'); // Valideer of er een teamnaam is ingevuld
            return;
        }
        console.log('Teamnaam:', teamName); // Voor debugging of verdere verwerking
        navigate('/firstpage'); // Vervang '/nextpage' met de daadwerkelijke route
    };

    return (
        <div className="team-page">
            <div className="team-form-container">
                <img
                    src="logo.png" // Vervang dit door de juiste pad van je logo
                    alt="Logo"
                    className="team-logo"
                />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Teamnaam"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        className="team-input"
                    />
                    <button type="submit" className="team-submit-button">
                        Verder
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TeamPage;
