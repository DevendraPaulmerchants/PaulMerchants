import React from 'react';

function OfferingInsurances() {
    return (
        <div className='our-insurance-offerings-parent'>
            <h2>Our Insurance Offerings</h2>
            <div className="provided-insurance">
                <div className="provided-insurance-card">
                    <h3>Life Insurance:</h3>
                    <p>Protect your family's future with our comprehensive life insurance plans. Secure their financial well-being in the face of uncertainties.</p>
                    <div className='insurance-btn-img-container'>
                        <div className='insurance-card-btn'>
                            <button id='cards-button'>Apply Now</button>
                        </div>
                        <div className='insurance-card-img'>
                            <img src='LifeInsurance.svg' alt='Life Insurance' />
                        </div>
                    </div>
                </div>
                <div className="provided-insurance-card health">
                    <h3>Health Insurance:</h3>
                    <p>Prioritize your well-being with our health insurance policies. Access quality healthcare without the financial burden.</p>
                    <div className='insurance-btn-img-container'>
                        <div className='insurance-card-btn'>
                            <button id='cards-button'>Apply Now</button>
                        </div>
                        <div className='insurance-card-img'>
                            <img src='HealthInsurance.svg' alt='Health Insurance' />
                        </div>
                    </div>
                </div>
                <div className="provided-insurance-card travel">
                    <h3>Travel Insurance:</h3>
                    <p>Travel with confidence. Our travel insurance plans offer coverage for unexpected travel disruptions, medical emergencies, and more.</p>
                    <div className='insurance-btn-img-container'>
                        <div className='insurance-card-btn'>
                            <button id='cards-button'>Apply Now</button>
                        </div>
                        <div className='insurance-card-img'>
                            <img src='TravelInsurance.svg' alt='Travel Insurance' />
                        </div>
                    </div>
                </div>
                <div className="provided-insurance-card property">
                    <h3>Property Insurance:</h3>
                    <p>Safeguard your home, property, or business with our property insurance. Be prepared for unforeseen events and protect your investments.</p>
                    <div className='insurance-btn-img-container'>
                        <div className='insurance-card-btn'>
                            <button id='cards-button'>Apply Now</button>
                        </div>
                        <div className='insurance-card-img'>
                            <img src='PropertyInsurance.svg' alt='Property Insurance' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferingInsurances