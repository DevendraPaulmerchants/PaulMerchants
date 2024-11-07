import React from 'react';
import "./Cards.css";

function CardHeroSection() {
    return (
        <div className='money-transfer-hero-section'>
            <div className="money-transfer-left-section">
                <h2>Cards</h2>
                <p>Welcome to Paul Merchants Card Services, where convenience meets security. 
                    Choose from our three outstanding card options to suit your unique needs. 
                    The PaulPay Prepaid Physical Card offers financial control with a reloadable 
                    physical card, perfect for in-store and online purchases. Our PaulPay Virtual 
                    Card ensures secure online shopping, safeguarding your sensitive data with 
                    virtual card details. Finally, the PaulPay Gift Card lets you give the gift 
                    of choice, making special occasions even more memorable. Join us to experience 
                    effortless payments and financial freedom.</p>
            </div>
            <div className="money-transfer-right-section cards">
                <img src='cards1.svg' alt='PaulPay Cards' />
            </div>
        </div>
    )
}

export default CardHeroSection