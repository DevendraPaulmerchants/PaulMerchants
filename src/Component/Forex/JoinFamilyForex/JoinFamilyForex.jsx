import React from 'react';
import "./JoinFamilyForex.css";

function JoinFamilyForex() {
    return (
        <div className='join-family-forex'>
            <div className='our-customer-and-transaction'>
                <div className="our-happy-customer">
                    <img src='HappyCustomer.svg' alt='Our Happy Customer' />
                    <div className='our-happy-customer-text'>
                        <h2>10k+</h2>
                        <h3>Happy Customers</h3>
                    </div>
                </div>
                <div className="our-happy-customer">
                    <img src='Transactions.svg' alt='Our Happy Customer' />
                    <div className='our-happy-customer-text'>
                        <h2>10 lakhs+</h2>
                        <h3>Transactions</h3>
                    </div>
                </div>
            </div>
            <div className="join-forex-family">
                <h2>Join the family</h2>
                <img src='forex-offer-45degree.svg' alt='Redirect'/>
            </div>
        </div>
    )
}

export default JoinFamilyForex;