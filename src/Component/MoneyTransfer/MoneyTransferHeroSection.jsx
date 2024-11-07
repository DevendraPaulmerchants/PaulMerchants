import React from 'react';
import "./MoneyTransfer.css";

function MoneyTransferHeroSection() {
  return (
    <div className='money-transfer-hero-section'>
      <div className="money-transfer-left-section">
        <h2>Money Transfer</h2>
        <p>The Company Paul Merchants Ltd is one of the prominent players in the field of International
          Inward Money Transfer services as per the regulations issued by Reserve Bank of India,
          offering world-class services of Western Union, RIA Money Transfer and
          TransFast Money Transfer.</p>
      </div>
      <div className="money-transfer-right-section">
        <img src='MoneyTransfer.svg' alt='Money Transfer'/>
      </div>
    </div>
  )
}

export default MoneyTransferHeroSection