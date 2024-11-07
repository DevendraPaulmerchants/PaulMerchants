import React, { useEffect, useState } from 'react';
import "./WhyPaulMerchants.css";

function WhyPaulMerchants() {
    const feq = [
        "Serving customers is our top priority.",
        "Our aim: quick and secure services.",
        "Progressive work for modern products and quality.",
        "Transparency and faith build relationships.",
        "We are an ISO 9001:2015 – Certified Company for Its Quality Systems and Processes.",
        "Your definite stop for Forex needs – premium rates, fast services.",
        "We stand with you in times of necessity, always."
    ]
    const [imageOut, setImageOut] = useState(4);
    const nextImage = () => {
        if (imageOut < 4) {
            setImageOut(imageOut + 1)
        }
        else {
            setImageOut(1)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);
        return () => clearInterval(interval);
    },[imageOut])

    return (
        <div className='why-paulmerchants-container'>
            <div className='why-paulmerchants-text'>
                <h2 className='header_title_h2'>Why Paul Merchants?</h2>
                {feq.map((val, id) => {
                    return <ul>
                        <li>{val}</li>
                    </ul>
                })}
            </div>
            {imageOut === 1 &&
                <div className='why-paulmerchants-logo'>
                    <div className='why-paulmerchants-image'>
                        <img src='StarMarkBlue.svg' alt='star' />
                    </div>
                    <div className='why-paulmerchants-logo-over-image timely'>
                        <img src='TimelyDelivery.svg' alt='Timely' />
                    </div>
                </div>
            }
            {imageOut === 2 &&
                <div className='why-paulmerchants-logo'>
                    <div className='why-paulmerchants-image'>
                        <img src='StarMarkGreen.svg' alt='star' />
                    </div>
                    <div className='why-paulmerchants-logo-over-image transparent'>
                        <img src='transparent.svg' alt='Transparent' />
                    </div>
                </div>
            }
            {imageOut === 3 &&
                <div className='why-paulmerchants-logo'>
                    <div className='why-paulmerchants-image'>
                        <img src='StarMarkCustomer.svg' alt='star' />
                    </div>
                    <div className='why-paulmerchants-logo-over-image customer'>
                        <img src='customer.svg' alt='Customer' />
                    </div>
                </div>
            }
            {imageOut === 4 &&
                <div className='why-paulmerchants-logo'>
                    <div className='why-paulmerchants-image'>
                        <img src='StarMarkProgressive.svg' alt='star' />
                    </div>
                    <div className='why-paulmerchants-logo-over-image progressive'>
                        <img src='progressive.svg' alt='Progressive' />
                    </div>
                </div>
            }

        </div>
    )
}

export default WhyPaulMerchants;
{/* {imageOut === 2 &&
                        <img src='transparent.svg' alt='Transparent' />
                    }
                    {imageOut === 3 &&
                        <img src='customer.svg' alt='Customer' />
                    }
                    {imageOut === 4 &&
                        <img src='progressive.svg' alt='Progressive' />
                    } */}