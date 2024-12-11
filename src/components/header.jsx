import './header.css';
import { useState } from 'react';
import burgermenu from './burgermenu.png';
import StatsIamge from './stats.png'
import InfoImage from './Info.png'
import HomeImage from './home.png'


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
                    <a className='InnerNavBtn' href="/Home">  <img className='BurgernavImg' src={HomeImage} alt="" />Home</a>
                    <a className='InnerNavBtn' href="/About"> <img className='BurgernavImg' src={InfoImage} alt="" />About</a>
                    <a className='InnerNavBtn' href="/Stats"> <img className='BurgernavImg' src={StatsIamge} alt="" />Stats</a>
                </div>
                <div className='BurgerMenu' onClick={toggleMenu}>
                    <img src={burgermenu} alt="Burger Menu" style={{ width: '40px' }} />
                </div>
            </div>
        </>
    );
    
}
