// File: pages/industries/MedicalDevices.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const MedicalDevices = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">Cybersecurity for Medical Devices</h1>
      <p className="text-gray-700 mb-6">
        Protecting connected medical devices is critical. Cyber Posture offers secure product lifecycle
        strategies, FDA compliance support, and post-market threat monitoring for device manufacturers and
        healthcare providers.
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-8">
        <li>Pre-market cybersecurity risk assessments</li>
        <li>FDA cybersecurity guidance alignment</li>
        <li>Threat modeling and secure design reviews</li>
        <li>Post-market surveillance and updates</li>
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

export default MedicalDevices;
