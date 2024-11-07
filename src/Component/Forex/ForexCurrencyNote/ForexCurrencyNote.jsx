import React from 'react';
import "./ForexCurrencyNote.css";

function ForexCurrencyNote({title,description,image}) {
    return <>
        <div className='forex-currency-note'>
            <div className="forex-currency-note-left">
                <h2 className='header_title_h2'>{title}</h2>
                <p className='header_description_p'>{description}</p>
            </div>
            <div className="forex-currency-note-right">
                <img src={image} alt='Currecny Notes' />
            </div>
        </div>
    </>

}

export default ForexCurrencyNote