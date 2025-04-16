import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import CyberEvaluations from '../pages/CyberEvaluations';
import CyberReadiness from '../pages/CyberReadiness';
import Resources from '../pages/Resources';
import Schedule from '../pages/Schedule';

// Import service pages
import CloudSecurity from "../pages/services/CloudSecurity";
import CyberAuditReadiness from "../pages/services/CyberAuditReadiness";
import DataSecurity from "../pages/services/DataSecurity";
import RegulatoryCompliance from "../pages/services/RegulatoryCompliance";
import SecurityAssessments from "../pages/services/SecurityAssessments";
import SecurityConsulting from "../pages/services/SecurityConsulting";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/assessments/cyber-evaluations" element={<CyberEvaluations />} />
        <Route path="/assessments/cyber-readiness" element={<CyberReadiness />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/schedule" element={<Schedule />} />
        
        {/* Service Routes */}
        <Route path="/services/cloud-security" element={<CloudSecurity />} />
        <Route path="/services/cyber-audit-readiness" element={<CyberAuditReadiness />} />
        <Route path="/services/data-security" element={<DataSecurity />} />
        <Route path="/services/regulatory-compliance" element={<RegulatoryCompliance />} />
        <Route path="/services/security-assessments" element={<SecurityAssessments />} />
        <Route path="/services/security-consulting" element={<SecurityConsulting />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
