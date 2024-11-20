import React from 'react';
import "./Gallery.css";

function Gallery() {
    return <>
        <div className="csr-hero-section gallery-hero-section">
            <div className='csr-hero-left-section-50'>
                <h2 className='hero_section_title_h2'>Gallery</h2>
                <p className='hero_section_description_p'>Step into a world where visuals speak louder than words. Our Gallery is a testament to our journey, our values, and our commitment to excellence. Here, we showcase the moments, the milestones, and the memories that define our story. Explore our visual tapestry and discover the heart and soul of Paul Merchants.</p>
            </div>
        </div>
        {/* ---------------- Recognition ------------------- */}
        <div className="gallery-recognition-parent">
            <h2 className='header_second_title_h2'>Recognitions</h2>
            <div className="gallery-images-parent">
                <div className="gallery-image">
                    <img src='GalleryNorthA.svg' alt='Achievers of north'/>
                    <h3 className='text-on-image_h3'>Achievers of north</h3>
                </div>
                <div className="gallery-image">
                    <img src='GalleryNorthA.svg' alt='Achievers of north'/>
                    <h3 className='text-on-image_h3'>Forex Awards</h3>
                </div>
                <div className="gallery-image">
                    <img src='GalleryNorthA.svg' alt='Achievers of north'/>
                    <h3 className='text-on-image_h3'>Force of Future</h3>
                </div>
            </div>
        </div>
        {/* ---------------- Work Culture ---------------------- */}
        <div className="gallery-recognition-parent">
            <h2 className='header_second_title_h2'>Work Culture</h2>
            <div className="gallery-images-parent">
                <div className="gallery-image">
                    <img src='GalleryWorkFlow1.svg' alt='GL Opening'/>
                    <h3 className='text-on-image_h3'>GL Opening</h3>
                </div>
                <div className="gallery-image">
                    <img src='GalleryNorthA.svg' alt='Achievers of north'/>
                    <h3 className='text-on-image_h3'>Annual Meet</h3>
                </div>
                <div className="gallery-image">
                    <img src='GalleryNorthA.svg' alt='Achievers of north'/>
                    <h3 className='text-on-image_h3'>Mata ki chownki</h3>
                </div>
            </div>
        </div>
        {/* --------------- Happy Moments ------------------------- */}
        <div className="gallery-recognition-parent">
            <h2 className='header_second_title_h2'>Happy Moments</h2>
            <div className="gallery-images-parent">
                <div className="gallery-image">
                    <img src='GalleryHappyMoment1.svg' alt='Happy Moments'/>
                    <h3 className='text-on-image_h3'>New Year</h3>
                </div>
                <div className="gallery-image">
                    <img src='GalleryNorthA.svg' alt='Achievers of north'/>
                    <h3 className='text-on-image_h3'>Women’s day</h3>
                </div>
                <div className="gallery-image">
                    <img src='GalleryNorthA.svg' alt='Achievers of north'/>
                    <h3 className='text-on-image_h3'>Diwali</h3>
                </div>
            </div>
        </div>
        {/* ---------------- CSR ----------------------------------- */}
        <div className="gallery-recognition-parent">
            <h2 className='header_second_title_h2'>CSR</h2>
            <div className="gallery-images-parent">
                <div className="gallery-image">
                    <img src='GalleryCSR1.svg' alt='Ambulance'/>
                    <h3 className='text-on-image_h3'>Dost</h3>
                </div>
                <div className="gallery-image">
                    <img src='GalleryNorthA.svg' alt='Achievers of north'/>
                    <h3 className='text-on-image_h3'>Suno - Sunao</h3>
                </div>
                <div className="gallery-image">
                    <img src='GalleryNorthA.svg' alt='Achievers of north'/>
                    <h3 className='text-on-image_h3'>Parivartan</h3>
                </div>
            </div>
        </div>
    </>
}

export default Gallery