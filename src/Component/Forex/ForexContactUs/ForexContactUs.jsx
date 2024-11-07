import React from 'react';
import "./ForexContactUs.css";

function ForexContactUs() {
    return (
        <div className='forex-contact-us-container'>
            <div className="forex-contact-us-left-container">
                <h2 className='header_title_h2'>Contact us</h2>
                <p className='header_description_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper ante vehicula
                    sem consectetur, in blandit nisi tempor. Nunc sit amet facilisis tortor.
                    Sed vitae iaculis eros. Vestibulum pellentesque erat nec .</p>
                <br /><br />
                <div className='footer-address'>
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
            <div className="forex-contact-us-right-container">
                <div id='forex-contact-us-form-left'>
                    <img src='contactLeft.svg' alt='Left' />
                </div>
                <div className="forex-contact-us-form">
                    <form>
                        <input type='text' required placeholder='Your Name' />
                        <input type='email' required placeholder='Your Email' />
                        <input type='number' required placeholder='Phone no:' />
                        <textarea type='text' required placeholder='Your Message:' />
                        <button>Send Message</button>
                    </form>
                </div>
                <div id='forex-contact-us-form-right'>
                    <img src='contactLeft.svg' alt='Right' />
                </div>
            </div>
        </div>
    )
}

export default ForexContactUs