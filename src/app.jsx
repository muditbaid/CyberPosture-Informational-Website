import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
import Banking from '../pages/industries/Banking';
import Fintech from '../pages/industries/Fintech';
import Healthcare from '../pages/industries/Healthcare';
import MedicalDevices from '../pages/industries/MedicalDevices';
import SaaS from '../pages/industries/SaaS';
import CloudSecurity from '../pages/services/CloudSecurity';
import CyberAuditReadiness from '../pages/services/CyberAuditReadiness';
import DataSecurity from '../pages/services/DataSecurity';
import RegulatoryCompliance from '../pages/services/RegulatoryCompliance';
import SecurityAssessments from '../pages/services/SecurityAssessments';
import SecurityConsulting from '../pages/services/SecurityConsulting';
import './App.css';

const App = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="min-h-[calc(100vh-80px)] pt-20"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cyber-evaluations" element={<CyberEvaluations />} />
              <Route path="/cyber-readiness" element={<CyberReadiness />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/schedule" element={<Schedule />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
