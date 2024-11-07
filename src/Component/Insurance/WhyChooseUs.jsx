import React from 'react';
import "./Insurance.css";

function WhyChooseUs() {
    return <>
        <div className='insurence-why-choose-us'>
            <div className="insurence-why-choose-us-heading">
                <h2>Why choose us?</h2>
                <button id='cards-button'>Apply now</button>
            </div>
            <div className="trust-customization-support">
                <div className="insurance-trust">
                    <h3>Trust</h3>
                    <p>We have a legacy of trust and reliability in the industry, ensuring your peace of mind.</p>
                </div>
                <div id='border-line'></div>
                <div className="insurance-trust">
                    <h3>Customization</h3>
                    <p>Tailored insurance solutions that meet your specific needs and budget.</p>
                </div>
                <div id='border-line'></div>
                <div className="insurance-trust">
                    <h3>Support</h3>
                    <p>Our dedicated team is here to assist you throughout your insurance journey.</p>
                </div>
            </div>
        </div>
        <div className='Ready-to-experience-effortless-payment insurence-text'>
            <h3>Protect what you cherish most with Paul Merchants Insurance Services</h3>
            <button id='cards-button'>Get Started Today</button>
        </div>
    </>

}

export default WhyChooseUs