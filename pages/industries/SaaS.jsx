// File: pages/industries/SaaS.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const SaaS = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">Cybersecurity for SaaS Providers</h1>
      <p className="text-gray-700 mb-6">
        SaaS businesses rely on customer trust and data protection. Cyber Posture delivers security
        assessments, regulatory alignment, and cloud-native threat prevention to ensure scalable SaaS
        compliance.
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-8">
        <li>SOC 2, ISO 27001, and GDPR readiness</li>
        <li>Multi-tenant security architecture reviews</li>
        <li>Data encryption & privacy by design</li>
        <li>Cloud platform configuration assessments</li>
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

export default SaaS;
