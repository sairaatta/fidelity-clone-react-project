import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ReportFault from './components/Support/ReportFault';
import EmergencyLocation from './components/Support/EmergencyLocation';
import CloudFault from './components/Support/CloudFault';
import Login from './components/Support/Login';
import TermsAndConditions from './components/Support/TermsAndConditions';

import RemoteSupport from './components/Support/RemoteSupport';
import AboutFidelity from './components/Company/AboutFidelity';
import LeadershipTeam from './components/Company/LeadershipTeam';
import Careers from './components/Company/Careers';
import CaseStudies from './components/Company/CaseStudies';
import FidelityGroupNews from './components/Company/FidelityGroupNews';
import PartnersProgramme from './components/PartnersProgrammes/PartnersProgramme';
import IoTConnectivitySolution from './components/PartnersProgrammes/IoTConnectivitySolution';

import Connectivity from './components/Services/Connectivity';
import IoT from './components/Services/IoT';

import Payments from './components/Services/Payments';
import Voices from './components/Services/Voices';

const AppContent = () => {
  const location = useLocation();

  const hideNavbarAndFooter = location.pathname === '/support/anvil-login';

  return (
    <div className='flex flex-col min-h-screen'>
      {!hideNavbarAndFooter && <Navbar />}  
      <div className='flex flex-grow'>
        <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
          <Route path='/support/report-a-fault' element={<ReportFault />} />
          <Route path='/support/emergency-location' element={<EmergencyLocation />} />
          <Route path='/support/cloud-fault' element={<CloudFault />} />
          <Route path='/support/terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='/support/remote-support' element={<RemoteSupport />} />

          <Route path='/support/anvil-login' element={<Login />} /> 
          <Route path='/company/about-fidelity' element={<AboutFidelity />} />
          <Route path='/company/leadership-team' element={<LeadershipTeam />} />
          <Route path='/company/careers' element={<Careers />} />
          <Route path='/company/case-studies' element={<CaseStudies />} />
          <Route path='/company/insights-and-news' element={<FidelityGroupNews />} />
          <Route path='/partners-programmes/partner-programmes' element={<PartnersProgramme />} />
          <Route path='/partners-programmes/iot-connectivity-and-solutions' element={<IoTConnectivitySolution />} />

          <Route path='/services/connectivity' element={<Connectivity/>} />
          <Route path='/services/iot' element={<IoT/>} />
          <Route path='/services/payments' element={<Payments/>} />
          <Route path='/services/voice' element={<Voices/>} />

        </Routes>
      </div>
      {!hideNavbarAndFooter && <Footer className="" />} {/* Add margin-top to Footer */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
