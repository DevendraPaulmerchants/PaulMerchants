import React from 'react';
import './QualityPolicy.css';

function QualityPolicy() {
    return <>
        <div className="customer-supreme-herosection">
            <div className="customer-supreme-herosection-left">
                <h2 className='hero_section_title_h2'>Quality Policy</h2>
            </div>
            <div className="customer-supreme-herosection-right">
                <img src='QualityPolicyHero.svg' alt='Quality Policy' />
            </div>
        </div>
        <div className="quality-policy-below-hero-section">
            <div className="quality-policy-below-hero-section-left">
                <div className="quality-strategy-left">
                    <h4 id='one'>1 Quality Assurance</h4>
                    <h4 id='four'>4 Referrals</h4>
                </div>
                <div className="quality-strategy-middle">
                    <img src='QualityPolicyCircle.svg' alt='Quality' />
                    <h3 id='text-inside-img'>QUALITY STRATEGY</h3>
                </div>
                <div className="quality-startegy-right">
                    <h4 id='two'>2 Continuous Improvement</h4>
                    <h4 id='three'>3 Complaints</h4>
                </div>
            </div>
            <div className="quality-policy-below-hero-section-right">
                <h2 className='header_title_h2'>Quality Policy</h2>
                <p className='header_description_p'>We at Paul Merchants Ltd. are committed to strive for total customer satisfaction through :</p>
                <div className='gold-why-choose-us quality-policy-pointer'>
                    {/* <h2 className='header_title_h2'>Why choose us?</h2> */}
                    <p><span id='gold-right-tick'><img src='goldRightTik.svg' /></span>
                        <span>Timely delivery of Services with full conformity to customer needs  & expectations.</span></p>
                    <p><span id='gold-right-tick'><img src='goldRightTik.svg' /></span>
                        <span>Regular interaction with customers for quality services.</span></p>
                    <p><span id='gold-right-tick'><img src='goldRightTik.svg' /></span>
                        <span>Continual improvement in effectiveness of systems through regular review.</span></p>
                    <p><span id='gold-right-tick'><img src='goldRightTik.svg' /></span>
                        <span>Training & development of our employees.</span></p>
                </div>
            </div>
        </div>
    </>
}

export default QualityPolicy;