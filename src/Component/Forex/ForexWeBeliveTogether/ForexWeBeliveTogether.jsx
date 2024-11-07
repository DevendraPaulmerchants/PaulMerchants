import React from 'react';
import "./ForexWeBeliveTogether.css";

function ForexWeBeliveTogether() {
    return (
        <div className='forex-belive-together'>
            <div className="forex-belive-left-section">
                <h2>We believe in togetherness!</h2>
                <p>Our technology, our people, and our expertise are all primed to foster these
                    connections, and we recognize that each of them is indispensable to our achievements.
                    None of this would be possible without their contributions!</p>
            </div>
            <div className="forex-belive-right-section">
                <div className="forex-icici-bank">
                    <img src='ICICI-Bank-Logo.svg' alt='ICICI Bank'/>
                </div>
                <div className="forex-icici-bank">
                    <img src='YES-BANK-Logo.svg' alt='YES Bank'/>
                </div>
                <div className="forex-icici-bank">
                    <img src='IndusInd-Bank-Logo.svg' alt='Induslnd Bank'/>
                </div>
                <div className="forex-icici-bank">
                    <img src='IDFC-FIRST-Bank.svg' alt='IDFC First Bank'/>
                </div>
            </div>
        </div>
    )
}

export default ForexWeBeliveTogether