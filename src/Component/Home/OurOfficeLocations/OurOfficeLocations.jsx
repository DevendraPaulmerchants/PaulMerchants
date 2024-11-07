import React, { useEffect, useState } from 'react';
import "./OurOfficeLocations.css";

export default function OurOfficeLocations() {
    const [locationSlider, setLocationSlider] = useState(1);
    const next=()=>{
        if(locationSlider < 4){
            setLocationSlider(locationSlider + 1)
        }
        else {
            setLocationSlider(1)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 4000)
        return () => clearInterval(interval)
    })
    return <>
        <div className='our-office-location-container'>
            <h2>Our Locations</h2>
            <p>We are and will keep on working keenly to get closer to you,
                nothing gets us more excited than being conveniently approachable to our customers.
                Currently, we are at your service in Chandigarh, Delhi, Haryana, Jammu, Himachal,
                Leh, and Uttar Pradesh etc . We are marching forward all because of your trust and
                optimism to other states soon.</p>
            <div className='location-image-city-parent'>
                <div className="location-image">
                    {locationSlider === 1 &&
                        <img src='location1.svg' alt='India' />
                    }
                    {locationSlider === 2 &&
                        <img src='location2.svg' alt='India' />
                    }
                    {locationSlider === 3 &&
                        <img src='location3.svg' alt='India' />
                    }
                    {locationSlider === 4 &&
                        <img src='location4.svg' alt='India' />
                    }
                </div>
                <div className="location-city">
                    <h3>We have a home in</h3>
                    <p>Delhi |  Chandigarh |  Punjab |  Haryana |  Jammu & Kashmir |  Himachal Pradesh |
                        Uttrakhand |  Uttar Pradesh |  Kerala |  Madhya Pradesh |  Rajasthan |
                        Maharashtra |  Gujarat</p>
                    <button>Locate Now</button>
                </div>
            </div>
        </div>
        <div className='location-bootom-image'>
            <img src='locationBootomImage.png' alt='India' />
        </div>
    </>
}
