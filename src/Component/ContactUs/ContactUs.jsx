import React from 'react';
import "./ContactUs.css";
import GoogleMapReact from 'google-map-react';

function ContactUs() {
    const defaultProps = {
        center: {
            lat: 30.72811,
            lng: 76.77065
        },
        zoom: 11
    };

    return <>
        <div className="customer-supreme-herosection">
            <div className="customer-supreme-herosection-left">
                <h2 className='hero_section_title_h2'>Contact Us</h2>
            </div>
            <div className="customer-supreme-herosection-right">
                <img src='ContactUsPageHero.svg' alt='Contact Us' />
            </div>
        </div>
        <div className="conatct-us-location-and-form">
            <div className="contact-us-location">
                <div className='contact-us-location-parent'>
                    <h2 className='header_title_h2'>Corporate office</h2>
                    <div className="contact-us-map-and-address contact-us-page-map">
                        <div className="contact-us-map">
                            <div className='contact-us-corporate-office-location'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13717.246924104467!2d76.775358!3d30.737744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feda11445bf2f%3A0xc9c45a5886473e4b!2zUGF1bCBNZXJjaGFudHMgKOCkquClieCksiDgpK7gpLDgpY3gpJrgpYfgpILgpJ_gpY3gpLgpIHwgSGVhZCBPZmZpY2U!5e0!3m2!1sen!2sus!4v1731387556817!5m2!1sen!2sus"
                                    style={{ width: '400px', height: '300px', border: '0' }}
                                    allowFullScreen=""
                                    loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                {/* <GoogleMapReact
                                    bootstrapURLKeys={{ key: "" }}
                                    defaultCenter={defaultProps.center}
                                    defaultZoom={defaultProps.zoom}
                                >
                                </GoogleMapReact> */}
                            </div>
                        </div>
                        <div className="contact-us-address">
                            <div className='footer-office-address-with-icon'>
                                <img src='officeadd.svg' alt='Office' />
                                <h2>PML HOUSE, SCO 829-830, Sector 22-A, Chandigarh</h2>
                            </div>
                            <div className='footer-office-address-with-icon'>
                                <img src='officecall.svg' alt='Office' />
                                <h2>1800 137 1444</h2>
                            </div>
                            <div className='footer-office-address-with-icon'>
                                <img src='officeEmail.svg' alt='Office' />
                                <h2>info@paulmerchants.net</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-us-location-parent'>
                    <h2 className='header_title_h2'>Registered office</h2>
                    <div className="contact-us-map-and-address contact-us-page-map">
                        <div className="contact-us-map">
                            <div className='contact-us-corporate-office-location'>
                                {/* <GoogleMapReact
                                    bootstrapURLKeys={{ key: "" }}
                                    defaultCenter={defaultProps.center}
                                    defaultZoom={defaultProps.zoom}
                                >
                                </GoogleMapReact> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14003.169607885098!2d77.159204!3d28.665934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0257bcb37ac9%3A0x6be30cb675625dc6!2zUGF1bCBNZXJjaGFudHMgKOCkquClieCksiDgpK7gpLDgpY3gpJrgpYfgpILgpJ_gpY3gpLgp!5e0!3m2!1sen!2sus!4v1731387824725!5m2!1sen!2sus"
                                   style={{ width: '400px', height: '300px', border: '0' }}
                                    allowFullScreen="" 
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                        <div className="contact-us-address">
                            <div className='footer-office-address-with-icon'>
                                <img src='officeadd.svg' alt='Office' />
                                <h2>PMLDSM 335, 336, 337, 3RD FLOOR, DLF Tower, 15, Shivaji Marg, Najafgarh Road,New Delhi -110015</h2>
                            </div>
                            <div className='footer-office-address-with-icon'>
                                <img src='officecall.svg' alt='Office' />
                                <h2>1800 137 1444</h2>
                            </div>
                            <div className='footer-office-address-with-icon'>
                                <img src='officeEmail.svg' alt='Office' />
                                <h2>info@paulmerchants.net</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="contact-us-form">
                <h2 className='header_title_h2'>Send Message</h2>
                <p className='header_description_p'>Contact PML for Money Transfer, FOREX, Tours & Travels, Gold Loans related queries.</p>
                <br />
                <div className="forex-contact-us-right-container">
                    {/* <div id='forex-contact-us-form-left' className='contact-us-left'>
                        <img src='contactLeft.svg' alt='Left' />
                    </div> */}
                    <div className="forex-contact-us-form contact-us-form">
                        <form>
                            <input type='text' required placeholder='Your Name' />
                            <input type='email' required placeholder='Your Email' />
                            <input type='number' required placeholder='Phone no:' />
                            <textarea type='text' required placeholder='Your Message:' />
                            <button>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ContactUs