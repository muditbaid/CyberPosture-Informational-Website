// File: pages/industries/Banking.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Banking = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">Cybersecurity for Banking</h1>
      <p className="text-gray-700 mb-6">
        Banks must operate under strict security and compliance requirements. Cyber Posture supports your
        institution with advanced risk assessments, regulatory controls, and business continuity planning
        aligned with FFIEC, GLBA, and other standards.
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-8">
        <li>GLBA and FFIEC compliance assessments</li>
        <li>Operational risk & business continuity planning</li>
        <li>Incident response programs and simulations</li>
        <li>Zero-trust framework implementation</li>
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

export default Banking;
