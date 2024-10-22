import React from 'react'; 
import './ActionBlock.css';  

const ActionBlock = () => { 
  const stopGame = () => { 
    alert('Het spel is gestopt.'); 
  };
  return ( 
    <div className="action-block"> 
      <button className="stop-button" onClick={stopGame}>Stop het spel</button> 
    </div> 
  ); 
}; 
export default ActionBlock; 