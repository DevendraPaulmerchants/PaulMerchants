import React from 'react';
import './Career.css';

function Career() {
    return <>
        <div className="customer-supreme-herosection career-hero-section">
            <div className="customer-supreme-herosection-left career-hero-section-left">
                <h2 className='hero_section_title_h2'>Join Our Team at Paul Merchants</h2>
                <p className='hero_section_description_p'>Discover a rewarding career at Paul Merchants, where your potential meets opportunity. We offer diverse roles and a supportive environment for growth and innovation across various industries. If you're eager to be part of a team driving positive change and committed to nurturing talent, explore our career possibilities today. Your journey starts here.</p>
            </div>
            <div className="customer-supreme-herosection-right">
                <img src='CareerHeroSection.svg' alt='Career' />
            </div>
        </div>
        <div className="career-current-openning-position">
            <h2 className='header_title_h2'>Current Openings</h2>
            <div className="career-current-openings-parent">
                <div className="career-current-opening">
                    <div>
                        <h3 className='gradient-text-h2'>Opening 1</h3>
                        <p>Location of job</p>
                    </div>
                    <div className='career-arrow-symbol'>
                        <h2>➡️</h2>
                    </div>
                </div>
                <div className="career-current-opening">
                    <div>
                        <h3 className='gradient-text-h2'>Opening 1</h3>
                        <p>Location of job</p>
                    </div>
                    <div className='career-arrow-symbol'>
                        <h2>➡️</h2>
                    </div>
                </div>
                <div className="career-current-opening">
                    <div>
                        <h3 className='gradient-text-h2'>Opening 1</h3>
                        <p>Location of job</p>
                    </div>
                    <div className='career-arrow-symbol'>
                        <h2>➡️</h2>
                    </div>
                </div>
                <div className="career-current-opening">
                    <div>
                        <h3 className='gradient-text-h2'>Opening 1</h3>
                        <p>Location of job</p>
                    </div>
                    <div className='career-arrow-symbol'>
                        <h2>➡️</h2>
                    </div>
                </div>
                <div className="career-current-opening">
                    <div>
                        <h3 className='gradient-text-h2'>Opening 1</h3>
                        <p>Location of job</p>
                    </div>
                    <div className='career-arrow-symbol'>
                        <h2>➡️</h2>
                    </div>
                </div>
                <div className="career-current-opening">
                    <div>
                        <h3 className='gradient-text-h2'>Opening 1</h3>
                        <p>Location of job</p>
                    </div>
                    <div className='career-arrow-symbol'>
                        <h2>➡️</h2>
                    </div>
                </div>
                <div className="career-current-opening">
                    <div>
                        <h3 className='gradient-text-h2'>Opening 1</h3>
                        <p>Location of job</p>
                    </div>
                    <div className='career-arrow-symbol'>
                        <h2>➡️</h2>
                    </div>
                </div>
                <div className="career-current-opening">
                    <div>
                        <h3 className='gradient-text-h2'>Opening 1</h3>
                        <p>Location of job</p>
                    </div>
                    <div className='career-arrow-symbol'>
                        <h2>➡️</h2>
                    </div>
                </div>
                <div className="career-current-opening">
                    <div>
                        <h3 className='gradient-text-h2'>Opening 1</h3>
                        <p>Location of job</p>
                    </div>
                    <div className='career-arrow-symbol'>
                        <h2>➡️</h2>
                    </div>
                </div>

            </div>
        </div>
        <div className="career-job-form-parent">
            <div className="career-job-location-container">
                <h2 className='header_second_title_h2'>Toll free No.</h2>
                <p id='office-phone-number'>1800-137-1444</p>
                <p id='office-open-time'>Timings : 9:00 am to 7:00 pm</p>
                <p id='office-open-time'>Monday - Saturday</p>
            </div>
            <div className="career-aaply-for-job-form">
                <h4>Apply Now!</h4>
                <form className='career-form'>
                  <input type="text" placeholder='Your Name...' required  id='candidate_name'/>
                  <input type="number" placeholder='Mobile No.' required  id='candidate_mobile_no'/>
                  <input type="email" placeholder='Email Id...' required  id='candidate_email'/>
                  <input type="text" placeholder='Position' required  id='candidate_name'/>
                  <input type="number" placeholder='Location' required  id='candidate_mobile_no'/>
                  <input type="text" placeholder='Linkedln profile' required  id='candidate_name'/>
                  <input type="number" placeholder='Experience' required  id='candidate_mobile_no'/>
                  <textarea type="text" placeholder='Remarks' />
                  <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </>
}

export default Career