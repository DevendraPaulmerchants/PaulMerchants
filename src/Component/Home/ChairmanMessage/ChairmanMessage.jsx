import React from 'react';
import "./ChairmanMessage.css";

function ChairmanMessage() {
  return (
    <div className='chairman-message-contaner'>
         <div className='chairman-image'>
             <img src='chairmanpic.svg' alt='Satpal Bansal'/>
         </div>
         <div className='chairman-message'>
           <h2>Paul Merchants is defined by a dedicated team, unwavering passion, and a relentless 
            pursuit of excellence. We are committed to giving the best and most innovative and 
            exceptional solutions to our customers and partners.</h2>
            <h3>Mr. S. Paul</h3>
            <p>Chairman of Paul Merchants</p>
         </div>
    </div>
  )
}

export default ChairmanMessage