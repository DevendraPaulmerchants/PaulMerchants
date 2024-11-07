import React from 'react';
import "./MoneyTransfer.css";

function TitleDescription({title,description}) {
  return (
    <div className='money-transfer-title-description'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default TitleDescription