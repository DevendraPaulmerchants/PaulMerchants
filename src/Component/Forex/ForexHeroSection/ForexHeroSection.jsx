import React, { useState } from 'react';
import "./ForexHeroSection.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function ForexHeroSection() {
    const [activeForm, setActiveForm] = useState("send-money");
    const [sendforexIconOn, setSendForexIconOn] = useState(false);
    const [sendCurrencyIndex, setSendCurrencyIndex] = useState(0);
    const [receiveForexIconOn, setReceiveForexIconOn] = useState(false);
    const [receiveCurrencyIndex, setReceiveCurrencyIndex] = useState(1)
    const currncy = [
        {
            image: "forexindFlag.svg",
            icon: "INR(₹)"
        },
        {
            image: "forexUsaFlag.svg",
            icon: "USD($)"
        },
        {
            image: "forexindFlag.svg",
            icon: "INR(₹)"
        },
        {
            image: "forexUsaFlag.svg",
            icon: "USD($)"
        },
        {
            image: "forexindFlag.svg",
            icon: "INR(₹)"
        },
        {
            image: "forexUsaFlag.svg",
            icon: "USD($)"
        },
        {
            image: "forexindFlag.svg",
            icon: "INR(₹)"
        },

    ]
    return (
        <div className='forex-hero-section'>
            <div className='forex-hero-left-right-parent'>
                <div className="forex-hero-left-section">
                    <h2 className='hero_section_title_h2'>Foreign Exchange</h2>
                    <p className='hero_section_description_p'>With global business expansion, foreign exchange services are crucial. Whether
                        for travel or education, competitive rates and swift solutions matter.
                        As India's top provider, Paul Merchants offers transparent transactions
                        via a trusted network.</p>
                    {/* <p className='home-hero-section-get-touch'>GET IN TOUCH<MdOutlineArrowOutward /></p> */}
                    <div className='travel-hero-btn'>
                        <button><span className='span-img'><img src='BuyForexIcon.svg' /></span><span>Buy  Forex</span><span className='span-img'><img src='ButtonArrow.svg' /></span></button>
                        <button><span className='span-img'><img src='SendMoneyIcon.svg' /></span><span>Send Money</span><span className='span-img'><img src='ButtonArrow.svg' /></span></button>
                        <button><span className='span-img'><img src='SellForexIcon.svg' /></span><span>Sell Forex</span><span className='span-img'><img src='ButtonArrow.svg' /></span></button>
                        {/* <button><span><img src='ButtonLogoBus.svg' /></span><span>Bus/Volvo</span><span><img src='ButtonArrow.svg' /></span></button> */}
                    </div>
                </div>
                {/* <div className="forex-hero-right-section">
                    <div className="forex-hero-right-section-top">
                        <p onClick={() => {
                            setActiveForm("send-money")
                        }} id={activeForm === "send-money" ? "forex-active" : "forex-unselect"}>Send Money
                            <p className={activeForm === "send-money" ? "forex-active" : null}></p>
                        </p>
                        <p onClick={() => {
                            setActiveForm("buy-forex")
                        }} id={activeForm === "buy-forex" ? "forex-active" : "forex-unselect"}>Buy Forex
                            <p className={activeForm === "buy-forex" ? "forex-active" : null}></p>
                        </p>
                        <p onClick={() => {
                            setActiveForm("sell-forex")
                        }} id={activeForm === "sell-forex" ? "forex-active" : "forex-unselect"}>Sell Forex
                            <p className={activeForm === "sell-forex" ? "forex-active" : null}></p>
                        </p>
                    </div>
                    <div className="forex-hero-section-form">
                        <form>
                            <div className="forex-send-receive-input-field">
                                <div className="forex-send-input-field">
                                    <h3>{activeForm === "send-money" ? "You send" : "From"}</h3>
                                    <div className="forex-send-and-select-field">
                                        <p onClick={() => {
                                            setSendForexIconOn(!sendforexIconOn)
                                        }} className='forex-image-currency-icon'>
                                            <img src={currncy[sendCurrencyIndex].image} alt='Ind' />
                                            <span id='forex-currency-icon'>{currncy[sendCurrencyIndex].icon}</span>
                                            <span id='forex-currency-down-arrow'><IoIosArrowDown /></span></p>
                                        <input type='number' placeholder='Enter Amount Here' />
                                    </div>
                                    <div className={sendforexIconOn ? 'select-forex-currency' : "display-none"}>
                                        {currncy.map((val, id) => {
                                            return <ul>
                                                <li onClick={() => {
                                                    setSendCurrencyIndex(id);
                                                    setSendForexIconOn(false);
                                                }} className='forex-image-currency-icon-list'>
                                                    <img src={val.image} /><span>{val.icon}</span>
                                                </li>
                                            </ul>
                                        })}
                                    </div>
                                </div>
                                <div className="forex-send-input-field">
                                    <h3>{activeForm === "send-money" ? "Recipient gets" : "To"}</h3>
                                    <div className="forex-send-and-select-field">
                                        <p onClick={() => setReceiveForexIconOn(!receiveForexIconOn)}
                                            className='forex-image-currency-icon'>
                                            <img src={currncy[receiveCurrencyIndex].image} alt='USA' />
                                            <span id='forex-currency-icon'>{currncy[receiveCurrencyIndex].icon}</span>
                                            <span id='forex-currency-down-arrow'><IoIosArrowDown /></span></p>
                                        <input type='number' placeholder='Enter Amount Here' />
                                    </div>
                                    <div className={receiveForexIconOn ? 'select-forex-currency' : "display-none"}>
                                        {currncy.map((val, id) => {
                                            return <ul>
                                                <li onClick={() => {
                                                    setReceiveCurrencyIndex(id)
                                                    setReceiveForexIconOn(false)
                                                }} className='forex-image-currency-icon-list'>
                                                    <img src={val.image} /><span>{val.icon}</span>
                                                </li>
                                            </ul>
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="forex-exchange-purpose-and-btn">
                                {activeForm === "send-money" &&
                                    <div className="forex-exchange-purpose-parent">
                                        <p>Purpose of sending money</p>
                                        <div className='forex-exchange-purpose'>
                                            <select>
                                                <option value="">Select a purpose</option>
                                                <option value="1">Purpose of sending money1</option>
                                                <option value="2">Purpose of sending money2</option>
                                                <option value="3">Purpose of sending money3</option>
                                                <option value="4">Purpose of sending money4</option>
                                            </select>
                                        </div>
                                    </div>
                                }
                                <div className="forex-exchange-btn">
                                    <p>&nbsp;</p>
                                    {activeForm === "send-money" && <button>Send Money</button>}
                                    {activeForm === "buy-forex" && <button>Buy Now</button>}
                                    {activeForm === "sell-forex" && <button>Sell Now</button>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}
                <div className='forex-modify-right-section'>
                    <img src='ForexHeroSectionImg.svg' />
                </div>
            </div>
        </div>
    )
}
