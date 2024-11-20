import React from 'react';
import "./CSR.css";

function CSR() {
    return <>
        <div className="csr-hero-section">
            <div className='csr-hero-left-section-50'>
                <h2 className='hero_section_title_h2'>Corporate Social Responsibility</h2>
                <p className='hero_section_description_p'>At Paul Merchants, we share a common vision with our fellow countrymen for the development and progress of our nation. We take our corporate responsibility seriously and are committed to contributing to the betterment of our society, recognizing our duty to build a strong and competent nation for future generations.</p>
            </div>
        </div>
        <div className="csr-hero-section-below">
            <h2 className='header_title_h2'>Objective</h2>
            <p className='header_description_p'>At Paul Merchants, we are dedicated to making a positive impact on society through our CSR initiatives. Our primary objective is to contribute to the welfare and well-being of the communities in which we operate. We are committed to addressing critical societal issues, promoting education, healthcare, and environmental sustainability. Our CSR efforts aim to uplift the underprivileged, empower youth through skill development, and support environmental conservation. We believe in giving back to society and are driven by the goal of creating a better and more equitable world for all. Our CSR endeavors are a testament to our commitment to social responsibility and our vision of a brighter future for our communities.</p>
        </div>
        <div className="social-responsibility-parent">
            <div className="our-social-responsibility">
                 <div className="our-social-dawai">
                    <h2 className='gradient-text-h2'>Dawai</h2>
                    <p className='hero_section_description_p'>DAWAI, initiated by GMCH-32, reuses nearly expired medicines to support individuals who can't afford prescribed treatments, ensuring that only properly sealed and good-condition medicines with at least 6 months before expiration are distributed. Paul Merchants is committed to enhancing healthcare accessibility through DAWAI.</p>
                 </div>
                 <div className="our-social-dawai-img">
                   <img src='CSRDawai.svg' alt='Dawai'/>
                 </div>
            </div>
            <div className="our-social-responsibility">
                 <div className="our-social-dawai">
                    <h2 className='gradient-text-h2'>RAHAT</h2>
                    <p className='hero_section_description_p'>RAHAT is a motivational movement jointly led by Paul Merchants and Parivartan NGO. We're dedicated to diagnosing, treating, rehabilitating, and upskilling individuals grappling with mental disorders. Our mission is to help them reintegrate into society and stand independently. Through RAHAT, we raise awareness about mental health and its vital treatment.</p>
                 </div>
                 <div className="our-social-dawai-img">
                   <img src='CSRRahat.svg' alt='Rahat'/>
                 </div>
            </div>
            <div className="our-social-responsibility">
                 <div className="our-social-dawai">
                    <h2 className='gradient-text-h2'>PANAH</h2>
                    <p className='hero_section_description_p'>Paul Merchants' PANAH is a compassionate CSR initiative, offering shelter, comfort, and essential amenities to patient attendants at GMCH-32. We aim to ease the burden of those already enduring the pain of their loved ones' illness, ensuring they have a safe and comfortable place to rest.</p>
                 </div>
                 <div className="our-social-dawai-img">
                   <img src='CSRPanah.svg' alt='Panah'/>
                 </div>
            </div>
        </div>
    </>
}

export default CSR