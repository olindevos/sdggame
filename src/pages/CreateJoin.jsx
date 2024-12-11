import React, { useState } from 'react';
import './CreateJoin.css';
import InfoImage from './Info.png';
import ReturnImage from './return.svg'

export default function CreateJoin() {
  const [showPopup, setShowPopup] = useState(false); // State voor de popup

  const handlePopupClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false); // Popup verdwijnt na 10 seconden
    }, 10000); // 10 seconden in milliseconden
  };

  return (
    <>
      <div className="CJI1">
        <a className='CJI1Btn' href='Home'>
          <img className='CJI2' src={ReturnImage} alt="" />
        </a>
      </div>
      <div className="CJpage">
        <div className="CJbut">
          <a className="CreateBut" href="/create">AANMAKEN</a>
          <a className="JoinBut" href="/join">DEELNEMEN</a>
        </div>
      </div>
      <div className="CJI">
        <div className="CJII" onClick={handlePopupClick}>
          <img src={InfoImage} alt="" />
        </div>
      </div>
      {showPopup && (
        <div >
          <p className="popup">maak als spelleider een speelsessie aan en deel de code met je teamgenoten</p>
          <p className="popup1">voer als teamgenoot je naam en de aangmaakte teamcode in om aan het spel deel te nemen</p>
        </div>
        
      )}
    </>
  );
}
