import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return <>
        <div className='footer-container'>
            <div className='footer-parent-of-all-services'>
                <div className='footer-services-and-list'>
                    <h2>CORPORATE</h2>
                    <ul>
                        <Link to="/about-us"><li>About us</li></Link>
                        <Link to="/message-from-our-md"><li>Welcome message by MD</li></Link>
                        <Link to="/group-companies"><li>Group Companies</li></Link>
                        <Link to="/management-team"><li>Management Team</li></Link>
                        <Link to="/quality-policy"><li>Quality Policy</li></Link>
                        <Link to="/customer-supreme"><li>Customer is Supreme</li></Link>
                        <Link to="/corporate-history"><li>Corporate History</li></Link>
                        <Link to="/core-team"><li>Core Team</li></Link>
                    </ul>
                </div>
                <div className='footer-services-and-list'>
                    <h2>SERVICES</h2>
                    <ul>
                        <Link to="/foreign-exchange"><li>Foreign Exchange</li></Link>
                        <Link to="/money-transfer"><li>International Money Transfer</li></Link>
                        <Link to="/tour-and-travel"><li>Tour & Travel</li></Link>
                        <Link><li>Holidays</li></Link>
                        <Link><li>Tickets</li></Link>
                        <Link><li>Hotels</li></Link>
                        <Link to="/cards"><li>Cards</li></Link>
                        <Link to="/gold-loan"><li>Gold Loan</li></Link>
                        <Link to="/insurance"><li>Insurance</li></Link>
                        <Link to="/business-payment-solution"><li>Business Payment Solutions</li></Link>
                    </ul>
                </div>
                <div className='footer-services-and-list'>
                    <h2>USEFUL LINKS</h2>
                    <ul>
                        <Link to="investors"><li>Investors</li></Link>
                        <Link to="/career"><li>Career</li></Link>
                        <Link to="/blogs"><li>Blog</li></Link>
                        <Link to="branch-locations"><li>Branch Locations</li></Link>
                        <Link to="/gallery"><li>Gallery</li></Link>
                        <Link to="/csr"><li>CSR</li></Link>
                        <Link to="/contact-us"><li>Contact Us</li></Link>
                    </ul>
                </div>
                <div className='footer-services-and-list'>
                    <h2>Follow Us</h2>
                    <ul className='footer-follow-icon-container'>
                        <Link to="https://www.facebook.com/paulmerchantsofficial/" target='blank'><li><img src='facebook.svg' alt='facebook' id='footer-follow-img' /></li></Link>
                        <Link to="https://x.com/PaulMerchants1" target='blank'><li><img src='twitter.svg' alt='twitter' id='footer-follow-img' /></li></Link>
                        <Link to="https://www.linkedin.com/company/paul-merchants-ltd?_l=en_US" target='blank'><li><img src='linkedln.svg' alt='linkedln' id='footer-follow-img' /></li></Link>
                        <Link to="https://www.youtube.com/channel/UC02zoN5vPoEahmB-8ImEMhA?view_as=subscriber" target='blank'><li><img src='youtube.svg' alt='youtube' id='footer-follow-img' /></li></Link>
                        <Link to="https://www.instagram.com/paulmerchants/" target='blank'><li><img src='instagram.svg' alt='instagram' id='footer-follow-img' /></li></Link>
                    </ul>
                </div>
            </div>
            <div className='footer-address-and-logo'>
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
                <div className='footer-logo'>
                    <img src='IATA.svg' alt='IATA' />
                    <img src='PATA.svg' alt='PATA' />
                    <img src='ministryoftourism.svg' alt='Ministry of Tourism' />
                    <img src='ISO.svg' alt='ISO Cirtified' />
                </div>
            </div>
        </div>
        <div className='footer-copyright-with-love'>
            <div className='footer-copyright'>
                <h2>Copyright 2023 <span>Paul Merchants Limited</span>. All Right Reserved</h2>
            </div>
            <div className='footer-love'>
                <h2>Made in </h2>
                <img src='india-national-flag.svg' alt='Indian-Flag' />
                <h2>with</h2>
                <img src='Hart.svg' alt='Hart' />
            </div>
        </div>
    </>
}

export default Footer