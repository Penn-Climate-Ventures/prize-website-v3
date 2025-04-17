import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import Application from './pages/Application';
import GetInvolved from './pages/GetInvolved';
import FinalRound from './pages/FinalRound';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/final-round" element={<FinalRound />} />
      <Route path="/apply" element={<Application />} />
      <Route path="/get-involved" element={<GetInvolved />} />
    </Routes>
  );
}

export default App;