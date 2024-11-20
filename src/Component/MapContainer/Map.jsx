// import React from 'react';
// import "./MapContainer.css";

// function Map({ mapId, closeMap }) {
//     document.body.style.overflow = 'hidden';
//     return <>
        // <div className="show-location-on-map-parent">
        //     <div className="show-location-on-map">
        //         <div className='location-top-header'>
        //             <h2></h2>
        //             <h2 onClick={closeMap} id='map-close'>X</h2>
        //         </div>
        //         <div className="location-map-container">
        //             {mapId === 1 &&
        //                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27436.926656880936!2d76.74836748476562!3d30.729198682269445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feda11445bf2f%3A0xc9c45a5886473e4b!2zUGF1bCBNZXJjaGFudHMgKOCkquClieCksiDgpK7gpLDgpY3gpJrgpYfgpILgpJ_gpY3gpLgpIHwgSGVhZCBPZmZpY2U!5e0!3m2!1sen!2sin!4v1731756014722!5m2!1sen!2sin"
        //                     style={{width:'100%',height:'100%',border:'none'}}
        //                     allowFullScreen="" loading="lazy"
        //                     referrerPolicy="no-referrer-when-downgrade">
        //                 </iframe>
        //             }
        //         </div>
        //     </div>
        // </div>
//     </>
// }

// export default Map

// ---------------------- Google Map -----------------------------
import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

const markers = [
    {
        id: 1,
        name: "Chicago, Illinois",
        position: { lat: 41.881832, lng: -87.623177 },
    },
    {
        id: 2,
        name: "Denver, Colorado",
        position: { lat: 39.739235, lng: -104.99025 },
    },
    {
        id: 3,
        name: "Los Angeles, California",
        position: { lat: 34.052235, lng: -118.243683 },
    },
    {
        id: 4,
        name: "New York, New York",
        position: { lat: 40.712776, lng: -74.005974 },
    },
];

function Map() {
    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };
    return <>
        <GoogleMap
            onLoad={handleOnLoad}
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{ width: "100%", height: "100%" }}
        >
            {markers.map(({ id, name, position }) => (
                <Marker
                    key={id}
                    position={position}
                    onClick={() => handleActiveMarker(id)}
                >
                    {activeMarker === id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                            <div>{name}</div>
                        </InfoWindow>
                    ) : null}
                </Marker>
            ))}
        </GoogleMap>
    </>

}

export default Map;
