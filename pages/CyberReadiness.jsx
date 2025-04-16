// File: pages/CyberReadiness.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const CyberReadiness = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">Cyber Readiness</h1>
      <p className="text-gray-700 mb-6">
        Cyber readiness is about being prepared to defend and respond to cyber threats effectively.
        Cyber Posture provides proactive strategies to ensure your organization is secure and resilient.
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-8">
        <li>Tailored cybersecurity policies and controls</li>
        <li>Readiness assessments based on NIST, ISO, and HITRUST</li>
        <li>Employee training and simulated incident drills</li>
        <li>Technology stack evaluation and hardening</li>
      </ul>
      <Link
        to="/contact"
        className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition"
      >
        Talk to Our Expert
      </Link>
    </section>
  );
};

export default CyberReadiness;
