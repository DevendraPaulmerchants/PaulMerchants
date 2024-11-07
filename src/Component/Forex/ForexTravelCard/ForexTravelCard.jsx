import React from 'react';
import "./ForexTravelCard.css";
import ForexCurrencyNote from '../ForexCurrencyNote/ForexCurrencyNote';

function ForexTravelCard() {
    return <>
        <ForexCurrencyNote title="Travel Card" description="Travel Cards are prepaid foreign currency cards that 
                     help you travel abroad conveniently without worrying about money. It gives you an advantage to travel 
                    cashless and is an alternative to currency notes and traveler cheques."
            image="TravellCard.svg" />
        <div className='forex-travel-card-parent'>
            <div className="forex-travel-card">
                <div className="forex-brand forex-card" id='twentyfivePercent'>
                    <h4>Multi-currency Travel Cards</h4>
                    <p>Paul Merchants' Global Currency Cards, in partnership with Axis Bank, offer 15 currency 
                        wallets to save on cross-currency charges during travel. Load major currencies with ease.</p>
                </div>
                <div className="forex-brand forex-card" id='twentyfivePercent'>
                    <h4>Security</h4>
                    <p>
                        <ul>
                            <li>All Cards are Chip Cards (On Visa Variant)</li>
                            <li>4 Digit PIN Security for ATM usage</li>
                            <li>Signature Based Security for POS Purchase</li>
                        </ul>
                    </p>
                </div>
                <div className="forex-brand forex-card" id='fiftyPercent'>
                    <h4>Convenience</h4>
                    <p>
                        <ul>
                            <li>Light to carry – Fits in wallet</li>
                            <li>Real Time funding available & 24/7 fund availability</li>
                            <li>Savings on time – no need to visit money changer for encashment</li>
                            <li>Monthly statement on email</li>
                            <li>Access to over 30 million POS terminals & over 1.4 million ATMs</li>
                        </ul>
                        
                    </p>
                </div>
            </div>
            <div className="forex-travel-card">
                <div className="forex-brand forex-card" id='twentyfivePercent'>
                    <h4>Brands</h4>
                    <p>Paul Merchants offers co-branded Axis Bank and ICICI Bank Visa Travel Currency cards 
                        in 9 currencies, as well as Axis Bank's Global Currency Cards with 16 currencies.</p>
                </div>
                <div className="forex-brand forex-card" id='fiftyPercent'>
                    <h4>Insurance</h4>
                    <p>
                        <ul>
                            <li>Lost Card Liability Insurance – up to ₹ 3 lakhs</li>
                            <li>Coverage of loss on the card due to internet based transactions</li>
                            <li>Coverage of loss on the card due to unauthorized usage/ Skimming/ Counterfeit/ Duplication/ Phishing/ Compromised card</li>
                            <li>Coverage of cards forgotten by the customer in ATM post reporting</li>
                            <li>Signature Based Security for POS Purchase</li>
                        </ul>
                    </p>
                </div>
                <div className="forex-brand forex-card" id='twentyfivePercent'>
                    <h4>ATM PIN</h4>
                    <p>
                        <ul>
                            <li>ATM PIN could be changed on Axis Bank ATMs</li>
                            <li>ATM PIN could be reset by calling PhoneBanking channel</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="forex-travel-card">
                <div className="forex-brand forex-card" id='twentyfivePercent'>
                    <h4>Usage</h4>
                    <p>Travel Cards facilitate destination currency withdrawal, shopping, hotels, bill payments, 
                        and internet transactions, with easy value reload options when abroad.</p>
                </div>
                <div className="forex-brand forex-card" id='twentyPercent'>
                    <h4>Encashment Option on the return</h4>
                    <p>
                        <ul>
                            <li>Refund of Balance</li>
                            <li>Balance in Travel Card (up to $2,000 as per RBI Regulations)</li>
                        </ul>
                    </p>
                </div>
                <div className="forex-brand forex-card" id='twentyfivePercent'>
                    <h4>Customer service helpdesk</h4>
                    <p>
                        <ul>
                            <li>24-hour Call Centre – 91-22-67987700</li>
                            <li>Email Helpdesk- travel.currency@axisbank.com</li>
                            <li>Global Assistance Service from Visa (GCAS) and MasterCard (MGSC)</li>
                        </ul>
                    </p>
                </div>
                <div className="forex-brand forex-card" id='twentyfivePercent'>
                    <h4>Online Access</h4>
                    <p>
                        <ul>
                            <li>No Separate Login details for Saving account & Travel Currency Card account</li>
                            <li>Can check the balances on the card</li>
                            <li>Can able to view mini statements</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </>

}

export default ForexTravelCard