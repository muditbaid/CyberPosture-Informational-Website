// File: pages/industries/Healthcare.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Healthcare = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">Cybersecurity for Healthcare</h1>
      <p className="text-gray-700 mb-6">
        Cyber Posture provides healthcare organizations with robust security and compliance strategies
        designed to protect electronic health records, ensure HIPAA compliance, and safeguard against
        ransomware attacks.
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-8">
        <li>HIPAA and HITECH compliance readiness</li>
        <li>Medical device security assessments</li>
        <li>Incident response planning for healthcare environments</li>
        <li>Vendor and third-party risk assessments</li>
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

export default Healthcare;
