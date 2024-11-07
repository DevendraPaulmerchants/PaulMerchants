import React from 'react';
import './VisaProcess.css';

function VisaProcessHeroSection() {
    return (
        <div className='visa-process-hero-section'>
            <div className="visa-process-hero-section-left">
                <h2>VISA Services</h2>
                <p>We provide comprehensive Visa assistance for a variety of countries. Select your destination
                    to find essential information on eligibility, fees, and estimated processing times.
                    For further guidance and support with your Visa application, don't hesitate to reach out to us.
                    Your hassle-free travel experience is our priority.</p>
            </div>
            <div className="visa-process-hero-section-right">
                <div className='visa-process-hero-section-right-img'>
                    <img src='VisaProcess-hero-section.svg' alt='Visa Process' />
                </div>
            </div>
        </div>
    )
}

export default VisaProcessHeroSection