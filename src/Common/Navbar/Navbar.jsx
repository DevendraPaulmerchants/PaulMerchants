import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ isMenuOn, setIsMenuOn }) {
    const location = useLocation();
    const [isMoreOn, setIsMoreOn] = useState(false);

    const moreButtonClick = () => {
        setIsMoreOn(false);
    }

    return <>
        <div className='navbar'>
            <div className='top-navbar'>
                <div className='navbar-menu'>
                    <h2 id='menu-image' className={isMenuOn ? "active" : ""}
                        onClick={() => setIsMenuOn((prev) => !prev)}>Menu
                        <img id={isMenuOn ? "rotate" : ""} src='Menu-down.svg' alt='##' />
                    </h2>
                </div>
                <div className='navbar-contact-number'>
                    <h2><img src='Call-Icon.svg' alt='Call' /> 1800 137 1444</h2>
                </div>
            </div>
            <div className={isMenuOn ? 'top-navbar-menu-item' : 'display-none'} onClick={moreButtonClick}>
                <Link to="/about-us"><li className={location.pathname === '/about-us' ? "active" : ""}>ABOUT US</li></Link>
                <Link to="/message-from-our-md"><li className={location.pathname === '/message-from-our-md' ? "active" : ""}>MESSAGE FROM OUR MD</li></Link>
                <Link to="/group-companies"><li className={location.pathname === '/group-companies' ? "active" : ""}>GROUP COMPANIES</li></Link>
                <Link to="/management-team"><li className={location.pathname === '/management-team' ? "active" : ""}>MANAGEMENT TEAM</li></Link>
                <Link to="/corporate-history"><li className={location.pathname === '/corporate-history' ? "active" : ""}>CORPORATE HISTORY</li></Link>
            </div>
            <div className='bootom-navabr-parent'>
                <div className='bootom-navbar'>
                    <div className='bootom-navbar-image'>
                        <Link to="/"><img src='Paulmerchants.svg' alt='Logo' /></Link>
                    </div>
                    <div className='bootom-navbar-item'>
                        <Link onClick={moreButtonClick} to="/foreign-exchange"><li className={location.pathname === '/foreign-exchange' ? "active" : ""}>Foreign Exchange</li></Link>
                        <Link onClick={moreButtonClick} to="/money-transfer"><li className={location.pathname === '/money-transfer' ? "active" : ""}>Money Transfer</li></Link>
                        <Link onClick={moreButtonClick} to="/tour-and-travel"><li className={location.pathname === '/tour-and-travel' ? "active" : ""}>Tours & travel</li></Link>
                        <Link onClick={moreButtonClick} to="/insurance"><li className={location.pathname === '/insurance' ? "active" : ""}>INSURANCE</li></Link>
                        <Link onClick={moreButtonClick} to="/gold-loan"><li className={location.pathname === '/gold-loan' ? "active" : ""}>Gold Loan</li></Link>
                        <Link onClick={moreButtonClick} to="/cards"><li className={location.pathname === '/cards' ? "active" : ""}>CARDS</li></Link>
                        <Link onClick={() => setIsMoreOn(prev => !prev)}><li>{isMoreOn ? "Less" : "More"}</li></Link>
                    </div>
                </div>
                <div className={isMoreOn ? 'bootom-navbar-more-item' : 'display-none'}>
                    <Link onClick={moreButtonClick} to="/mice"><li className={location.pathname === '/mice' ? "active" : ""}>Mice</li></Link>
                    <Link onClick={moreButtonClick} to="/education-loan"><li className={location.pathname === '/education-loan' ? "active" : ""}>EDUCATION LOAN</li></Link>
                    <Link onClick={moreButtonClick} to="/visa-services"><li className={location.pathname === '/visa-services' ? "active" : ""}>VISA SERVICES</li></Link>
                </div>
            </div>
        </div>
    </>
}

export default Navbar;
