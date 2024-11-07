import React from 'react';
import "./Cards.css";

function CardServices() {
    return <>
        <div className='card-services-parent'>
            <h2>Explore our card services:</h2>
            <div className="physical-card-container">
                <div className="physical-card-left">
                    <h3>PaulPay Prepaid Physical Card</h3>
                    <p>Experience the freedom of spending without the worry of overspending. Our PaulPay
                        Prepaid Physical Card is a reloadable, physical card that you can use just like
                        a debit or credit card. It's a hassle-free way to manage your everyday expenses.
                        Simply load the card with the amount you need, and you're good to go. Plus,
                        with this card, you can enjoy the security of a physical card in your wallet,
                        ensuring you're always ready to make payments in-person or online.</p>
                    <button id='cards-button'>Apply Now</button>    
                </div>
                <div className="physical-card-right">
                    <img src='PhysicalCard.svg' alt='Physical Card' />
                </div>
            </div>
            <div className="physical-card-container virtual-card">
                <div className="physical-card-left">
                    <h3>PaulPay Virtual Card</h3>
                    <p>Online shopping has never been easier. Our PaulPay Virtual Card is a digital card 
                        designed for your online spending needs. It offers the utmost security for your 
                        internet purchases without the need for a physical card. Simply generate your 
                        virtual card details, and you're ready to shop at your favorite online stores. 
                        It's a great way to protect your personal and financial information in the digital 
                        world.</p>
                    <button id='cards-button'>Get Yours</button>    
                </div>
                <div className="physical-card-right">
                    <img src='VirtualCard.svg' alt='Virtual Card' />
                </div>
            </div>
            <div className="physical-card-container gift-card">
                <div className="physical-card-left">
                    <h3>PaulPay Gift Card</h3>
                    <p>Sometimes, the best way to show you care is with a thoughtful gift. The PaulPay Gift 
                        Card is a versatile option that allows the recipient to choose what they want. 
                        It's perfect for birthdays, holidays, or special occasions. With a PaulPay Gift 
                        Card, you're giving the gift of choice, and the recipient can use it to shop, 
                        dine, or enjoy entertainment, all with a simple swipe or click.</p>
                    <button id='cards-button'>Gift Now</button>    
                </div>
                <div className="physical-card-right">
                    <img src='GiftCard.svg' alt='Gift Card' />
                </div>
            </div>
        </div>
        <div className='Ready-to-experience-effortless-payment'>
            <h3>Ready to Experience Effortless Payments?</h3>
            <button id='cards-button'>Get Started Today</button>
        </div>
    </>
    
}

export default CardServices