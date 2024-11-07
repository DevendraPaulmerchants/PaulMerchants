import React from 'react';
import './TourAndTravel.css';

function TourAndTravelHerosection() {
  return (
    <div className='money-transfer-hero-section'>
    <div className="money-transfer-left-section">
      <h2>Tour & Travel</h2>
      <p>If you are wondering about planning your holidays, then PML Holidays offers more than you can imagine. Our tried and tested traveling solutions assure complete convenience to make your trip an unforgettable experience. Paul Merchants Ltd. offers both B2B and B2C solutions to cater to clients of both sectors. The company has developed a state of the art travel portal</p>
      <div className='travel-hero-btn'>
        <button><span className='span-img'><img src='buttonLogo.svg'/></span><span>Holidays</span><span className='span-img'><img src='ButtonArrow.svg'/></span></button>
        <button><span className='span-img'><img src='ButtonLogoHotel.svg'/></span><span>Hotel</span><span className='span-img'><img src='ButtonArrow.svg'/></span></button>
        <button><span className='span-img'><img src='ButtonLogoFlight.svg'/></span><span>Flight</span><span className='span-img'><img src='ButtonArrow.svg'/></span></button>
        <button><span className='span-img'><img src='ButtonLogoBus.svg'/></span><span>Bus/Volvo</span><span className='span-img'><img src='ButtonArrow.svg'/></span></button>
      </div>
    </div>
    <div className="money-transfer-right-section">
      <img src='TourAndTravelHeroSectionImg.svg' alt='Tour And Travel'/>
    </div>
  </div>
  )
}

export default TourAndTravelHerosection;