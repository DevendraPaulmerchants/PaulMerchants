import React from 'react';
import Home from '../../Component/Home/HomeHeroSection/Home'
import CurrencyValues from '../../Component/Home/CurrencyValues/CurrencyValues';
import ChairmanMessage from '../../Component/Home/ChairmanMessage/ChairmanMessage';
import WhyPaulMerchants from '../../Component/Home/WhyPaulMerchants/WhyPaulMerchants';
import GoodWillandGrowth from '../../Component/Home/GoodWillAndGrowth/GoodWillandGrowth';
import OurAchievement from '../../Component/Home/OurAchievements/OurAchievement';
import HomeFeedback from '../../Component/Home/HomeFeedback/HomeFeedback';
import OurOfficeLocations from '../../Component/Home/OurOfficeLocations/OurOfficeLocations';

function HomePage() {
  return <>
    <Home />
    <CurrencyValues />
    <GoodWillandGrowth/>
    <ChairmanMessage/>
    <WhyPaulMerchants/>
    <OurOfficeLocations/>
    <HomeFeedback/>
    <OurAchievement/>    
  </>
}

export default HomePage;