import React from 'react';
import { useLoadScript } from "@react-google-maps/api";
import Map from './Map';

function OfficeLocation({ mapId, closeMap }) {
    document.body.style.overflow='hidden';
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "" 
    });

    return <>
        <div className="show-location-on-map-parent">
            <div className="show-location-on-map">
                <div className='location-top-header'>
                    <h2></h2>
                    <h2 onClick={closeMap} id='map-close'>X</h2>
                </div>
                <div className="location-map-container">
                    {isLoaded ? <Map /> : null}
                </div>
            </div>
        </div>
    </>
}

export default OfficeLocation;