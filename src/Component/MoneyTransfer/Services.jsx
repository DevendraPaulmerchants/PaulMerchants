import React from 'react';
import "./MoneyTransfer.css";

function Services() {
    return (
        <div className='money-transfer-services'>
            <h2>Services</h2>
            <div className="money-transfer-remittance-parent">
                <div className='money-transfer-remittance-and-text'>
                    <div className="money-transfer-remittance">
                        <div id='text-btn'>
                            <h3>Inward Remittance</h3>
                            <button>Send Now</button>
                        </div>
                        <div id='remittance-img'>
                            <img src='Inward-remittance.svg' alt='Inward' />
                        </div>
                    </div>
                    <p>"Inward remittance" is when someone sends money from another country to your country.
                        It's like receiving money from a foreign source. This can be for various reasons,
                        such as receiving payments, gifts, or support from family members living abroad.
                        Inward remittances are typically received through banks or money transfer services,
                        and the recipient usually needs to provide identification to collect the money.</p>
                </div>

                <div className='money-transfer-remittance-and-text'>
                    <div className="money-transfer-remittance">
                        <div id='text-btn'>
                            <h3>Outward Remittance</h3>
                            <button>Send Now</button>
                        </div>
                        <div id='remittance-img'>
                            <img src='OutwardRemmitmoney.svg' alt='Inward' />
                        </div>
                    </div>
                    <p>"Outward remittance" is when you send money from your own country to another country. 
                        It's like sending money overseas or making an international payment. This can be 
                        for various purposes, like paying for products or services abroad or sending money 
                        to family members in another country. To do an outward remittance, you typically use 
                        a bank or a money transfer service to send the money to the foreign destination.</p>
                </div>
                <div className='money-transfer-remittance-and-text'>
                    <div className="money-transfer-remittance" id='domestic-remittance'>
                        <div id='text-btn' style={{paddingBottom:'1.5rem'}}>
                            <h3>Domestic Remittance</h3>
                            <button>Send Now</button>
                        </div>
                        <div id='remittance-img'>
                            <img src='DomesticRemmit.svg' alt='Inward' />
                        </div>
                    </div>
                    <p>"Domestic remittance" is when you send money to someone within the same country. 
                        It's like giving money to a friend or family member who also lives in your country. 
                        This can be for various reasons, such as paying for goods or services, sending a 
                        gift, or assisting someone financially. You can usually do domestic remittances 
                        through local banks, online transfers, or other payment methods within your own 
                        country.</p>
                </div>
            </div>
        </div>
    )
}

export default Services