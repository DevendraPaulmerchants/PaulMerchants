import React from 'react';
import Rating from '@mui/material/Rating';
import "./HomeFeedback.css";

function HomeFeedback() {
    return (
        <div className='home-feedback-container'>
            <h2 className='header_title_h2'>What people say about us?</h2>
            <div className='home-feedback-slider-parent-with-txt'>
                <div className='home-feedback-slider-parent'>
                    <div className='slider-before'></div>
                    <div className='home-feedback-slider'>
                        <div className='home-feedback-user-container' aria-hidden="true">
                            <div className="image-and-name">
                                <div className="user-image">
                                    <img src='feedback-user-image.svg' alt='Rohan Kumar' />
                                </div>
                                <div className="user-name">
                                    <h3>Rohan Kumar</h3>
                                    <p>Travelled with us</p>
                                </div>
                            </div>
                            <div className="home-feedback-rating">
                                <Rating name="read-only" value={5} readOnly />
                            </div>
                            <div className="home-feedback-message">
                                <p>“I am glad that I choose Paul Merchants for my family holiday to Kashmir,
                                    the overall experience was fantastic, right from the airport to our hotel
                                    we were escorted by our guide, and we had an amazing time visiting the most
                                    exquisite destinations and historical monuments, Kashmir is indeed beautiful
                                    and literally dreamy, we thoroughly enjoyed our tour, all thanks to the PML
                                    holidays, a special thanks to Saurabh ji for making our itinerary very interesting,
                                    will definitely recommend others.”</p>
                            </div>
                        </div>
                        <div className='home-feedback-user-container' aria-hidden="true">
                            <div className="image-and-name">
                                <div className="user-image">
                                    <img src='feedback-user-image.svg' alt='Rohan Kumar' />
                                </div>
                                <div className="user-name">
                                    <h3>Rohan Kumar</h3>
                                    <p>Travelled with us</p>
                                </div>
                            </div>
                            <div className="home-feedback-rating">
                                <Rating name="read-only" value={5} readOnly />
                            </div>
                            <div className="home-feedback-message">
                                <p>“I am glad that I choose Paul Merchants for my family holiday to Kashmir,
                                    the overall experience was fantastic, right from the airport to our hotel
                                    we were escorted by our guide, and we had an amazing time visiting the most
                                    exquisite destinations and historical monuments, Kashmir is indeed beautiful
                                    and literally dreamy, we thoroughly enjoyed our tour, all thanks to the PML
                                    holidays, a special thanks to Saurabh ji for making our itinerary very interesting,
                                    will definitely recommend others.”</p>
                            </div>
                        </div>
                        <div className='home-feedback-user-container' aria-hidden="true">
                            <div className="image-and-name">
                                <div className="user-image">
                                    <img src='feedback-user-image.svg' alt='Rohan Kumar' />
                                </div>
                                <div className="user-name">
                                    <h3>Rohan Kumar</h3>
                                    <p>Travelled with us</p>
                                </div>
                            </div>
                            <div className="home-feedback-rating">
                                <Rating name="read-only" value={5} readOnly />
                            </div>
                            <div className="home-feedback-message">
                                <p>“I am glad that I choose Paul Merchants for my family holiday to Kashmir,
                                    the overall experience was fantastic, right from the airport to our hotel
                                    we were escorted by our guide, and we had an amazing time visiting the most
                                    exquisite destinations and historical monuments, Kashmir is indeed beautiful
                                    and literally dreamy, we thoroughly enjoyed our tour, all thanks to the PML
                                    holidays, a special thanks to Saurabh ji for making our itinerary very interesting,
                                    will definitely recommend others.”</p>
                            </div>
                        </div>
                    </div>
                    <div className='slider-after'></div>
                </div>
                <div className='feedback-txt'>
                    <h4>See what else people say</h4>
                </div>
            </div>
        </div>
    )
}

export default HomeFeedback