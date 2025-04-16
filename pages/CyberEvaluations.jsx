// File: pages/CyberEvaluations.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const CyberEvaluations = () => {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">Cyber Evaluations</h1>
      <p className="text-gray-700 mb-6">
        Cyber evaluations help determine your organization's security maturity and prioritize areas for
        improvement. We analyze your policies, technologies, and procedures for gaps and compliance alignment.
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-8">
        <li>Comprehensive security posture reviews</li>
        <li>Regulatory standards benchmarking (HIPAA, GDPR, PCI DSS)</li>
        <li>Actionable roadmap for remediation</li>
        <li>Quarterly or annual evaluation reports</li>
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

export default CyberEvaluations;
