import React from 'react';
import "./MICE.css";

function CallRequestForm() {
    return (
        <div className='request-form-container-parent'>
            <h2>Request a Call Back</h2>
            <div className='request-form-container'>
                <div className="request-form-left">
                    <img src='contactLeft.svg' />
                </div>
                <div className="mice-request-from">
                    <form>
                        <div className='mice-request-form-input'>
                            <input type='text' required placeholder='Your Name' />
                            <input type='email' required placeholder='Your Email' />
                        </div>
                        <div className='mice-request-form-input'>
                            <input type='text' required placeholder='Your Country Code' />
                            <input type='email' required placeholder='Enter Your Phone no.' />
                        </div>
                        <div className='mice-request-form-input'>
                            <input type='text' required placeholder='Date of Travel' />
                            <input type='email' required placeholder='Date of Return' />
                        </div>
                        <div className='mice-request-form-input'>
                            <input type='text' required placeholder='Country of Visit' />
                            <input type='email' required placeholder='Size of Group' />
                        </div>
                        <div className='mice-request-form-btn'>
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="request-form-right">
                    <img src='contactLeft.svg' />
                </div>
            </div>
        </div>
    )
}

export default CallRequestForm