import './Stat.css';
import { useState } from 'react';
import arrowdown from './arrowdown.png';

export default function Stat() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className='statblock'>
                <div className="StatMain">
                    <div className='Statcontain'> 
                        <div className="POIpic"></div>
                        <div className="POIinfo">
                            <div className='POIinfoName'>naam plaats</div>
                            <div className='POIinfoTxt'>nogwat</div>
                            <div className='POIinfoArr' onClick={toggleExpand}>
                                <img 
                                    src={arrowdown} 
                                    style={{ width: '24px', cursor: 'pointer', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} 
                                    alt="Toggle more info" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Extra info section */}
                <div className={`extraInfo ${isExpanded ? 'show' : ''}`}>
                    <p>Aantal Keren Bezocht</p>
                    <div className="placeholderChart">Stat 1</div>
                    <div className="placeholderChart">Stat 2</div>
                </div>

                {/* HR line that stays under the extra info */}
                <hr className="divider" />
            </div>
        </>
    );
}
