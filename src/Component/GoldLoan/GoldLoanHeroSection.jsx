import React from 'react';
import './GoldLoan.css';

function GoldLoanHeroSection() {
    return (
        <div className='money-transfer-hero-section'>
            <div className="money-transfer-left-section">
                <h2>Gold Loan</h2>
                <p>Paul Merchants Finance Pvt. Ltd. Wholly Owned Subsidiary of Paul Merchants Ltd offers easy
                    loan against your gold helping you live your dreams and fulfil your needs.
                    The Paul Merchants gold loan service is not only easy and quick but also benefiting as the loan
                    is served to the customers against the market value of gold
                    at attractive and low-interest rates.</p>
            </div>
            <div className="money-transfer-right-section gold">
                <img src='GoldLoan.svg' alt='Gold Loan' />
            </div>
        </div>
    )
}

export default GoldLoanHeroSection