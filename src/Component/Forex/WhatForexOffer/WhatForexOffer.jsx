import React from 'react';
import "./WhatForexOffer.css";

function WhatForexOffer() {
    return (
        <div className='forex-choose-container'>
            <h2 className='header_title_h2'>What we offer?</h2>
            <div className="forex-offer-container">
                <div className="forex-offer-service exchange">
                    <h3>Currency Exchange</h3>
                    <p>Effortlessly exchange currencies with us at nearby locations. We offer a wide range of
                        currencies from prominent nations, ensuring quick and transparent transactions while
                        adhering to RBI regulations.</p>
                    <p id='forex-angle-arrow'>
                        <img src='forex-offer-45degree.svg' alt='45-degree' />
                    </p>
                </div>
                <div className="forex-offer-service gicAccount">
                    <h3>Currency Exchange</h3>
                    <p>Effortlessly exchange currencies with us at nearby locations. We offer a wide range of
                        currencies from prominent nations, ensuring quick and transparent transactions while
                        adhering to RBI regulations.</p>
                    <p id='forex-angle-arrow'>
                        <img src='forex-offer-45degree.svg' alt='45-degree' />
                    </p>
                </div>
                <div className="forex-offer-service draft">
                    <h3>Currency Exchange</h3>
                    <p>Effortlessly exchange currencies with us at nearby locations. We offer a wide range of
                        currencies from prominent nations, ensuring quick and transparent transactions while
                        adhering to RBI regulations.</p>
                    <p id='forex-angle-arrow'>
                        <img src='forex-offer-45degree.svg' alt='45-degree' />
                    </p>
                </div>
                <div className="forex-offer-service remittance">
                    <h3>Currency Exchange</h3>
                    <p>Effortlessly exchange currencies with us at nearby locations. We offer a wide range of
                        currencies from prominent nations, ensuring quick and transparent transactions while
                        adhering to RBI regulations.</p>
                    <p id='forex-angle-arrow'>
                        <img src='forex-offer-45degree.svg' alt='45-degree' />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhatForexOffer;
