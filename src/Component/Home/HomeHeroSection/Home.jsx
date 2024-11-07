import React, { useEffect, useState } from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import './Home.css';

function Home() {
    const [slider, setSlider] = useState(1);
    const length=6;
    const next = () => {
        if (slider < length) {
            setSlider(slider + 1)
        }
        else {
            setSlider(1)
        }
    }

    const back = () => {
        if (slider >= 1) {
            setSlider(length - 1)
        }
        else {
            setSlider(1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(interval);
    },[slider]);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false);
        const timer = setInterval(() => {
            setIsVisible(true);
        }, 500);
        return () => clearInterval(timer);
    }, [slider]);


    return <>
        <div className='home-hero-section-parent'>
            {/*-------------------- 1st Container ----------------------- */}
            {slider === 1 &&
                <div className='home-hero-section'>
                    <div className='home-hero-section-left'>
                        {/* <div className={`home-hero-section-left ${isVisible ? 'show' : ''}`}>     */}
                        <h2>Secure <img src='Home11.svg' id='home1' /> Money Transfer at your fingertips</h2>
                        <p className='home-hero-section-description'>
                            Send money globally with ease through Paul Merchants. Transparent, no hidden charges.
                            On-time remittance for stress-free student fee payments.
                        </p>
                        <p className='home-hero-section-get-touch'>GET IN TOUCH <MdOutlineArrowOutward /></p>
                        <div className='home-hero-section-button'>
                            <button onClick={back}><IoIosArrowRoundBack /></button>
                            <button onClick={next}><IoIosArrowRoundForward /></button>
                        </div>
                    </div>
                    {/* <div className='home-hero-section-right'> */}
                    <div className={`home-hero-section-right ${isVisible ? 'show' : ''}`}>
                        <img src='Home1.svg' alt='Money-Transfer' />
                    </div>
                </div>
            }
            {/* -------------------- 2nd Container ------------------------- */}
            {slider === 2 &&
                <div className='home-hero-section'>
                    <div className='home-hero-section-left'>
                        {/* <div className={`home-hero-section-left ${isVisible ? 'show' : ''}`}>     */}
                        <h2>Book flights <img src='Home21.svg' id='home2' style={{ height: '30px', width: '40px' }} /> to your dream destinations</h2>
                        <p className='home-hero-section-description'>
                            Book your air tickets with Paul Merchants for exclusive, affordable travel.
                            Whether national or international, we've got you covered. Arrive safely and
                            punctually at your destination.
                        </p>
                        <p className='home-hero-section-get-touch'>GET IN TOUCH <MdOutlineArrowOutward /></p>
                        <div className='home-hero-section-button'>
                            <button onClick={back}><IoIosArrowRoundBack /></button>
                            <button onClick={next}><IoIosArrowRoundForward /></button>
                        </div>
                    </div>
                    {/* <div className='home-hero-section-right'> */}
                    <div className={`home-hero-section-right ${isVisible ? 'show' : ''}`}>
                        <img src='Home2.svg' alt='Money-Transfer' />
                    </div>
                </div>
            }
            {/* ------------------- 3rd Container --------------------------- */}
            {slider === 3 &&
                <div className='home-hero-section'>
                    <div className='home-hero-section-left'>
                        {/* <div className={`home-hero-section-left ${isVisible ? 'show' : ''}`}>     */}
                        <h2>Travel safe with travel insurance <img src='Home31.svg' id='home3'/></h2>
                        <p className='home-hero-section-description'>
                            Book your air tickets with Paul Merchants for exclusive, affordable travel.
                            Whether national or international, we've got you covered. Arrive safely and
                            punctually at your destination.
                        </p>
                        <p className='home-hero-section-get-touch'>GET IN TOUCH <MdOutlineArrowOutward /></p>
                        <div className='home-hero-section-button'>
                            <button onClick={back}><IoIosArrowRoundBack /></button>
                            <button onClick={next}><IoIosArrowRoundForward /></button>
                        </div>
                    </div>
                    {/* <div className='home-hero-section-right'> */}
                    <div className={`home-hero-section-right ${isVisible ? 'show' : ''}`}>
                        <img src='Home3.svg' alt='Money-Transfer' />
                    </div>
                </div>
            }
            {/* ------------------- 4th Container -------------------------- */}
            {slider === 4 &&
                <div className='home-hero-section'>
                    <div className='home-hero-section-left'>
                        {/* <div className={`home-hero-section-left ${isVisible ? 'show' : ''}`}>     */}
                        <h2>Exchange <img src='Home41.svg' id='home4' style={{ width: '45px', height: '25px' }} /> currencies at the fairest rates</h2>
                        <p className='home-hero-section-description'>
                            Paul Merchants, your one-stop solution for paying that university fees,
                            bills & travel expenses internationally. The quickest and safest way of exchanging
                            your currency at superior rates without any hidden costs or processing fees.
                        </p>
                        <p className='home-hero-section-get-touch'>GET IN TOUCH <MdOutlineArrowOutward /></p>
                        <div className='home-hero-section-button'>
                            <button onClick={back}><IoIosArrowRoundBack /></button>
                            <button onClick={next}><IoIosArrowRoundForward /></button>
                        </div>
                    </div>
                    {/* <div className='home-hero-section-right'> */}
                    <div className={`home-hero-section-right ${isVisible ? 'show' : ''}`}>
                        <img src='Home4.svg' alt='Money-Transfer' />
                    </div>
                </div>
            }
            {/* ---------------- 5th Container ----------------------------- */}
            {slider === 5 &&
                <div className='home-hero-section'>
                    <div className='home-hero-section-left'>
                        {/* <div className={`home-hero-section-left ${isVisible ? 'show' : ''}`}>     */}
                        <h2>Pick, Plan and Pack your luggage <img src='Home51.svg' id='home5' style={{ width: '30px', height: '25px' }} /></h2>
                        <p className='home-hero-section-description'>
                            Paul Merchants, your one-stop solution for paying that university fees,
                            bills & travel expenses internationally. The quickest and safest way of exchanging
                            your currency at superior rates without any hidden costs or processing fees.
                        </p>
                        <p className='home-hero-section-get-touch'>GET IN TOUCH <MdOutlineArrowOutward /></p>
                        <div className='home-hero-section-button'>
                            <button onClick={back}><IoIosArrowRoundBack /></button>
                            <button onClick={next}><IoIosArrowRoundForward /></button>
                        </div>
                    </div>
                    {/* <div className='home-hero-section-right'> */}
                    <div className={`home-hero-section-right ${isVisible ? 'show' : ''}`}>
                        <img src='Home5.svg' alt='Money-Transfer' />
                    </div>
                </div>
            }
            {/* -------------------- 6th Container ----------------------------- */}
            {slider === 6 &&
                <div className='home-hero-section'>
                    <div className='home-hero-section-left'>
                        {/* <div className={`home-hero-section-left ${isVisible ? 'show' : ''}`}>     */}
                        <h2>Navigating <img src='Home61.svg' id='home6' /> the student remittance </h2>
                        <p className='home-hero-section-description'>
                            Travel confidently worldwide. Our insurance covers medical and non-medical
                            emergencies. Choose the plan that suits you best for a safe and memorable overseas
                            journey.
                        </p>
                        <p className='home-hero-section-get-touch'>GET IN TOUCH <MdOutlineArrowOutward /></p>
                        <div className='home-hero-section-button'>
                            <button onClick={back}><IoIosArrowRoundBack /></button>
                            <button onClick={next}><IoIosArrowRoundForward /></button>
                        </div>
                    </div>
                    {/* <div className='home-hero-section-right'> */}
                    <div className={`home-hero-section-right ${isVisible ? 'show' : ''}`}>
                        <img src='Home6.svg' alt='Money-Transfer' />
                    </div>
                </div>
            }
        </div>
    </>
}

export default Home;