import React from 'react';
import InsuranceHeroSection from '../../Component/Insurance/InsuranceHeroSection';
import OfferingInsurances from '../../Component/Insurance/OfferingInsurances';
import WhyChooseUs from '../../Component/Insurance/WhyChooseUs';
import VisaProcessHeroSection from '../../Component/VisaProcess/VisaProcessHeroSection';
import VisaService from '../../Component/VisaProcess/VisaService';

function Insurance() {
  return <>
  <InsuranceHeroSection/>
  <OfferingInsurances/>
  <WhyChooseUs/>
  {/* <VisaProcessHeroSection/>
  <WhyChooseUs/>
  <VisaService/> */}
  </>
}

export default Insurance