import './header.css';
import { useState } from 'react';
import burgermenu from './burgermenu.png';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='NavBar'>
                <div className='Logo'>
                 <img src="/logo-gamify.png" alt="Logo" style={{ height: '60px' }} />
                </div>
                <div className={`InnerNav ${isOpen ? 'active' : ''}`}>
                    <a href="/Home">Home</a>
                    <a href="/About">About</a>
                    <a href="/Stats">Stats</a>
                </div>
                <div className='BurgerMenu' onClick={toggleMenu}>
                    <img src={burgermenu} alt="Burger Menu" style={{ width: '40px' }} />
                </div>
            </div>
        </>
    );
    
}
