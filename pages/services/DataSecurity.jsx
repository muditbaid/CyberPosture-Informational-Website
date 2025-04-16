import React from 'react';
import { Link } from 'react-router-dom';

const DataSecurity = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Data Security Services</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Protect your organization's most valuable asset - its data
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">Comprehensive Data Protection</h2>
          <p className="text-gray-700 mb-6">
            Our Data Security services help organizations implement robust controls to protect 
            sensitive data across all environments, ensuring confidentiality, integrity and 
            availability of critical information assets.
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Data classification and inventory</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Data loss prevention (DLP) solutions</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Encryption and tokenization strategies</span>
            </li>
          </ul>
          <Link
            to="/contact"
            className="bg-accent hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold inline-flex items-center transition duration-300"
          >
            Get Started
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">Our Data Security Approach</h3>
          <p className="text-gray-700 mb-4">
            We implement a comprehensive data security program that includes:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <span>Assessment of current data security posture</span>
            </li>
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <span>Development of data security policies and controls</span>
            </li>
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <span>Implementation of technical safeguards</span>
            </li>
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
              <span>Ongoing monitoring and improvement</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DataSecurity;
