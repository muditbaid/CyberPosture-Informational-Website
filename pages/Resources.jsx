// File: pages/Resources.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-8">Cybersecurity Resources</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white shadow-md rounded-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-2">Cybersecurity Blog</h2>
          <p className="text-gray-700 mb-4">Explore articles on threat trends, regulatory updates, and practical advice.</p>
          <Link to="/blog" className="text-accent hover:underline">Go to Blog</Link>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-2">On-Demand Webinars</h2>
          <p className="text-gray-700 mb-4">Watch our expert-led sessions covering real-world security topics.</p>
          <Link to="/webinars" className="text-accent hover:underline">View Webinars</Link>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-2">Compliance Guides</h2>
          <p className="text-gray-700 mb-4">Download comprehensive guides to help you prepare for audits.</p>
          <Link to="/compliance-guides" className="text-accent hover:underline">Browse Guides</Link>
        </div>
      </div>
    </section>
  );
};

export default Resources;
