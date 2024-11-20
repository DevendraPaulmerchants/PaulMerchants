import React, { useState } from 'react';
import "./MapContainer.css";
import OfficeLocation from './OfficeLocation';
const foundedLocation = [
    {
        id: 1,
        locationName: "SCO 829, 829-830, Udyog Path , Sector: 22 Chandigarh Contact Number : 1800 137 1444  Open ⋅ Closes 6:30 pm"
    },
    {
        id: 2,
        locationName: "SCO 830, 829-830, Udyog Path , Sector: 22 Chandigarh Contact Number : 1800 137 1444  Open ⋅ Closes 6:30 pm"
    },
]
function MapContainer() {
    const [selectedState, setSelectedState] = useState("");
    const [selectedOfficeLocation, setSelectedOfficeLocation] = useState("");
    const [resultFound, setResultFound] = useState(false);
    const [officeId, setOfficeId] = useState(null);
    const closeMap = () => {
        setOfficeId(null);
    }
    if (officeId === null) {
        document.body.style.overflow = 'auto';
    }
    if (officeId !== null) {
        document.body.style.overflow = 'hidden';
    }
    const findLocation = () => {
        if (selectedState && selectedOfficeLocation) {
            setResultFound(true);
        }
    }
    return <>
        <div className="branch-location-hero-section">
            <div class="csr-hero-left-section-50">
                <h2 class="hero_section_title_h2">Branch Locator</h2>
                <p class="hero_section_description_p">Welcome to the Paul Merchants Branch Locator! We're here to help you find the nearest Paul Merchants branch to serve your financial needs. Our widespread network of branches ensures that you're never too far from convenient financial services and support.</p>
            </div>
        </div>
        <div className="map-container-parent">
            <h2 className='header_second_title_h2'>Find the nearest branch</h2>
            <br></br>
            <div className="branch-locator-parent">
                <div className="map-container-left">
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        findLocation()
                    }}>
                        <div className="select-your-state">
                            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} required>
                                <option value="" disabled>Select State</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Haryana">Haryana</option>
                            </select>
                        </div>
                        <div className="select-your-state">
                            <select value={selectedOfficeLocation}
                                onChange={(e) => setSelectedOfficeLocation(e.target.value)} required>
                                <option value="" disabled>Select City</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Haryana">Haryana</option>
                            </select>
                        </div>
                        <div className='branch-locator-btn'>
                            <button>Locate Now</button>
                        </div>
                    </form>
                </div>
                <div className="map-container-right">
                    {/* {isLoaded ? <Map /> : null} */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1142090.093766183!2d76.45447040564761!3d31.187711667189284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spaul%20merchants!5e0!3m2!1sen!2sin!4v1731748329206!5m2!1sen!2sin"
                        style={{ width: '100%', height: '100%', border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
        {resultFound &&
            <div className="branch-showing-result">
                <p>Showing {foundedLocation.length} results</p>
                <div className="branch-total-showing-result">
                    {foundedLocation?.length > 0 ? foundedLocation.map((val, id) => {
                        return <div className="branch-showing">
                            <div className="branch-name-and-direction">
                                <div className="branch-name">
                                    <h4>Paul Merchants Ltd</h4>
                                </div>
                                <div className="branch-direction">
                                    <h4 onClick={() => {
                                        setOfficeId(val.id);
                                    }}>Get Directions</h4>
                                </div>
                            </div>
                            <div className="branch-location-name">
                                <p>{val.locationName}</p>
                            </div>
                        </div>
                    }) : <h2 className='not_found_h2'>Not Found</h2>}
                </div>
            </div>
        }
        {officeId && <OfficeLocation mapId={officeId} closeMap={closeMap} />}
    </>

}

export default MapContainer