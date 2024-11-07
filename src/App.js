import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Common/Navbar/Navbar'
import HomePage from './Pages/Home/Home';
import Footer from './Common/Footer/Footer';
import ForexExchange from './Pages/Foreign-Exchange/ForexExchange';
import MoneyTransfer from './Pages/Money-Transfer/MoneyTransfer';
import GoldLoan from './Pages/Gold-Loan/GoldLoan';
import Cards from './Pages/Cards/Cards';
import Insurance from './Pages/Insurance/Insurance';
import EducationLoan from './Pages/Education-Loan/EducationLoan';
import VisaServices from './Pages/Visa-Services/VisaServices';
import MICE from './Pages/MICE/MICE';
import TourAndTravel from './Pages/Tours&Travel/TourAndTravel';
import AboutUsHerosection from './Component/About-Us/AboutUsHerosection';
import CorporateHistoryHerosection from './Component/CorporateHistory/CorporateHistoryHerosection';
import MessageFromMd from './Component/MessageFromMd/MessageFromMd';
import GroupCompany from './Component/GroupCompany/GroupCompany';
import ManagementTeam from './Component/ManagementTeam/ManagementTeam';

function App() {
  const [isMenuOn, setIsMenuOn] = useState(false);
  const closeModel = () => {
    if (isMenuOn) {
      setIsMenuOn(false)
    }
  }
  return (
    <div className="App" onClick={closeModel} >
      <Router>
        <Navbar isMenuOn={isMenuOn} setIsMenuOn={setIsMenuOn} />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about-us' element={<AboutUsHerosection/>}/>
          <Route path='/message-from-our-md' element={<MessageFromMd/>}/>
          <Route path='/group-companies' element={<GroupCompany/>}/>
          <Route path='/management-team' element={<ManagementTeam/>}/>
          <Route path='/corporate-history' element={<CorporateHistoryHerosection/>}/>
          <Route path='/foreign-exchange' element={<ForexExchange/>}/>
          <Route path='/money-transfer' element={<MoneyTransfer/>}/>
          <Route path='/tour-and-travel' element={<TourAndTravel/>}/>
          <Route path='/gold-loan' element={<GoldLoan/>}/>
          <Route path='/cards' element={<Cards/>}/>
          <Route path='/insurance' element={<Insurance/>}/>
          <Route path='/education-loan' element={<EducationLoan/>}/>
          <Route path='/visa-services' element={<VisaServices/>}/>
          <Route path='/mice' element={<MICE/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

