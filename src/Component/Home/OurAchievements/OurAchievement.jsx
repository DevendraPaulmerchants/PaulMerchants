import React, { useEffect } from 'react';
import "./OurAchievement.css";

function OurAchievement() {

    return <>
        <div className='our-achievement-container-text'>
            <h2 className='header_title_h2'>Our Achievements</h2>
            <p className='header_description_p'>Getting acknowledged for providing super-class services to the customers is what we
                value the most. We are ecstatic to share the reputed recognitions we have attained
                so far, and we are so much inspired to work more precisely to attain many such more.</p>
        </div>
        <div className='our-achievement-upper-container'></div>
        <div className='our-achievement-slider-left-right'>
            <div className="our-achievement-left-container"></div>
            <div className='our-achievement-slider-container'>
                <div className='award-container' aria-hidden="true">
                    <img src='AsiaMostTrustedAward.svg' alt='Asia-Most-Trusted-Award' />
                </div>
                <div className='award-container'>
                    <img src='EmployerBranding.svg' alt='Asia-Most-Trusted-Award' />
                </div>
                <div className='award-container'>
                    <img src='Asia2022.svg' alt='Asia-Most-Trusted-Award' />
                </div>
                <div className='award-container'>
                    <img src='AsiaMostTrustedAward.svg' alt='Asia-Most-Trusted-Award' />
                </div>
                <div className='award-container'>
                    <img src='EmployerBranding.svg' alt='Asia-Most-Trusted-Award' />
                </div>
                <div className='award-container'>
                    <img src='Asia2022.svg' alt='Asia-Most-Trusted-Award' />
                </div>
                <div className='award-container'>
                    <img src='AsiaMostTrustedAward.svg' alt='Asia-Most-Trusted-Award' />
                </div>
                <div className='award-container'>
                    <img src='EmployerBranding.svg' alt='Asia-Most-Trusted-Award' />
                </div>
                <div className='award-container'>
                    <img src='Asia2022.svg' alt='Asia-Most-Trusted-Award' />
                </div>
            </div>
            <div className="our-achievement-right-container"></div>
        </div>
        <div className='our-achievement-bottom-container'></div>
    </>

}

export default OurAchievement