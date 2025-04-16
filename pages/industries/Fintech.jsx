// File: pages/industries/Fintech.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Fintech = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">Cybersecurity for Fintech</h1>
      <p className="text-gray-700 mb-6">
        Fintech platforms face intense scrutiny and cyber threats. We help fintech startups and enterprises
        achieve PCI DSS compliance, secure payment ecosystems, and implement advanced fraud detection controls.
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-8">
        <li>PCI DSS and GLBA compliance</li>
        <li>Fraud monitoring & transaction integrity</li>
        <li>Secure API and cloud infrastructure assessments</li>
        <li>Incident response readiness for financial applications</li>
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

export default Fintech;
