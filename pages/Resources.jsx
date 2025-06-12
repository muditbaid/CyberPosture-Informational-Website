// File: pages/Resources.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Cybersecurity Resources</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Access our comprehensive collection of cybersecurity resources to enhance your security knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary p-8 rounded-lg border-2 border-accent">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Cybersecurity Blog</h2>
            <p className="text-text-secondary mb-6">
              Explore our latest articles on threat trends, regulatory updates, and practical security advice.
            </p>
            <Link to="/blog" className="btn btn-primary">
              Read Articles
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-secondary p-8 rounded-lg border-2 border-accent">
            <h2 className="text-2xl font-bold text-text-primary mb-4">On-Demand Webinars</h2>
            <p className="text-text-secondary mb-6">
              Watch our expert-led sessions covering real-world security topics and best practices.
            </p>
            <Link to="/webinars" className="btn btn-primary">
              View Webinars
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-secondary p-8 rounded-lg border-2 border-accent">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Compliance Guides</h2>
            <p className="text-text-secondary mb-6">
              Download comprehensive guides to help you prepare for audits and maintain compliance.
            </p>
            <Link to="/compliance-guides" className="btn btn-primary">
              Browse Guides
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
