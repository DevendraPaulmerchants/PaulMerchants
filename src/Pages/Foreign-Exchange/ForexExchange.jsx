import React from 'react';
import ForexHeroSection from '../../Component/Forex/ForexHeroSection/ForexHeroSection';
// import CurrencyValues from '../../Home/CurrencyValues/CurrencyValues';
import CurrencyValues from '../../Component/Home/CurrencyValues/CurrencyValues'
import WhyChooseUsForex from '../../Component/Forex/WhyChooseUsForex/WhyChooseUsForex';
import WhatForexOffer from '../../Component/Forex/WhatForexOffer/WhatForexOffer';
import JoinFamilyForex from '../../Component/Forex/JoinFamilyForex/JoinFamilyForex';
import ForexCurrencyNote from '../../Component/Forex/ForexCurrencyNote/ForexCurrencyNote';
import ForexAfterLoss from '../../Component/Forex/ForexAfterLoss/ForexAfterLoss';
import ForexBER from '../../Component/Forex/ForexBER/ForexBER';
// import ForexTravelCard from '../../Component/ForexTravelCard/ForexTravelCard';
import ForexTravelCard from '../../Component/Forex/ForexTravelCard/ForexTravelCard';
import ForexWeBeliveTogether from '../../Component/Forex/ForexWeBeliveTogether/ForexWeBeliveTogether';
import ForexContactUs from '../../Component/Forex/ForexContactUs/ForexContactUs';

export default function ForexExchange() {
    return <>
        <ForexHeroSection />
        <CurrencyValues />
        <WhyChooseUsForex />
        <WhatForexOffer />
        <JoinFamilyForex />
        <ForexCurrencyNote title="Currency Notes" description="At Paul Merchants, we offer a wide range of major currencies in various denominations, providing
                    the best rates for buying and selling foreign currency. Ensure your travel funds are ideal,
                    but remember to adhere to RBI's currency limits when abroad." image="Home4.svg" />
        <br />
        <br />
        <ForexCurrencyNote title="Travelers Cheque" description="Choose traveler's cheques wisely based on your destination –
                    options include various major currencies. They don't expire,
                    offer secure spending, and can be used at hotels, shops, and more.
                    Comply with FEMA and RBI guidelines when encashing or saving unspent
                    funds for future trips." image="TravellerCheque.svg" />
        <ForexBER />
        <ForexAfterLoss />
        <ForexTravelCard />
        <ForexCurrencyNote title="Outward Remittance"
            description="Outward Remittances or more commonly called SWIFT Transfers is the easiest and most common 
        way of sending funds overseas. Paul Merchants Ltd. provides hassle–free outward remittance facility 
        at the best rates with minimum charges and complete transparency and convenience. The outward remittance 
        facility/SWIFT Transfers are available in all major currencies across the globe."
            image="outwardRemmit.svg" />
        <ForexCurrencyNote title="Foreign Currency Draft"
            description="In a way to provide one-stop solutions to its customers, Paul Merchants Ltd has 
            partnered with few banks to issue Foreign Currency Drafts to its customers. 
            Customers can avail Foreign Currency Drafts over the counters through our branches."
            image="foreigncurrecy.svg" />
        <ForexWeBeliveTogether />
        <ForexContactUs/>
    </>
}
