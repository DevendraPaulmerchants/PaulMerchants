import React from 'react';
import './VisaProcess.css';

function WhyChooseUs() {
  return (
    <div className='visa-why-choose-us-container'>
       <h2>Why choose us?</h2>
       <div className="visa-why-choose-us-main-container">
        <div className="visa-why-choose-us-child-container">
            <div className="visa-why-choose-us-header">
                <div className="visa-why-choose-us-left-header">
                    <h3>Global Expertise</h3>
                    <button>Book Now</button>
                </div>
                <div className="visa-why-choose-us-right-header">
                    <img src='GlobalExpertise.svg' alt='Global Expertise'/>
                </div>
            </div>
            <div className='visa-why-choose-us-description'>
               <p>With extensive experience and a worldwide network, we have the knowledge and resources to handle Visa applications for various destinations.</p>
            </div>
        </div>
        <div className="visa-why-choose-us-child-container">
            <div className="visa-why-choose-us-header">
                <div className="visa-why-choose-us-left-header">
                    <h3>Thorough Support</h3>
                    <button>Book Now</button>
                </div>
                <div className="visa-why-choose-us-right-header">
                    <img src='ThoroughSupport.svg' alt='Thorough Support'/>
                </div>
            </div>
            <div className='visa-why-choose-us-description'>
               <p>Whether you're a tourist, business traveler, or immigrant, we offer a wide range of Visa services tailored to your specific requirements.</p>
            </div>
        </div>
        <div className="visa-why-choose-us-child-container">
            <div className="visa-why-choose-us-header">
                <div className="visa-why-choose-us-left-header">
                    <h3>Efficiency</h3>
                    <button>Book Now</button>
                </div>
                <div className="visa-why-choose-us-right-header">
                    <img src='Efficiency.svg' alt='Efficiency'/>
                </div>
            </div>
            <div className='visa-why-choose-us-description'>
               <p>We pride ourselves on swift and reliable Visa processing. Our team works diligently to ensure your Visa is obtained in a timely manner.</p>
            </div>
        </div>
        <div className="visa-why-choose-us-child-container">
            <div className="visa-why-choose-us-header">
                <div className="visa-why-choose-us-left-header">
                    <h3>Customer-Centric</h3>
                    <button>Book Now</button>
                </div>
                <div className="visa-why-choose-us-right-header">
                    <img src='CustomerCentric.svg' alt='Customer Centric'/>
                </div>
            </div>
            <div className='visa-why-choose-us-description'>
               <p>Your satisfaction is our priority. We provide personalized assistance and guidance to address any Visa-related concerns.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default WhyChooseUs