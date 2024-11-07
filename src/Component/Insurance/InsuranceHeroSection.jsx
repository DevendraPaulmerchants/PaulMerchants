import React from 'react';
import "./Insurance.css";

function InsuranceHeroSection() {
  return (
    <div className='money-transfer-hero-section'>
      <div className="money-transfer-left-section">
        <h2>Insurance</h2>
        <p>At Paul Merchants, we believe in safeguarding what matters most to you.
          Our Insurance Services are designed to provide you with peace of mind,
          knowing that you, your loved ones, and your assets are protected</p>
      </div>
      <div className="money-transfer-right-section insurance">
        <img src='Insurance.svg' alt='Insurance' />
      </div>
    </div>
  )
}

export default InsuranceHeroSection;