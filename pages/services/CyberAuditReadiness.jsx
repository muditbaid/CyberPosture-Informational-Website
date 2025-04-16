import React from 'react';
import { Link } from 'react-router-dom';

const CyberAuditReadiness = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Cyber Audit Readiness</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Prepare your organization for successful cybersecurity audits and compliance assessments
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">Audit Preparation Services</h2>
          <p className="text-gray-700 mb-6">
            Our Cyber Audit Readiness services help organizations prepare for and successfully 
            navigate cybersecurity audits, ensuring compliance with industry standards and 
            regulatory requirements.
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Gap analysis against compliance frameworks</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Remediation planning and implementation</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Documentation and evidence preparation</span>
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
          <h3 className="text-2xl font-bold text-primary mb-4">Our Audit Readiness Process</h3>
          <p className="text-gray-700 mb-4">
            We follow a structured approach to ensure your organization is fully prepared:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <span>Initial assessment of current state</span>
            </li>
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <span>Identification of gaps and vulnerabilities</span>
            </li>
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <span>Development of remediation roadmap</span>
            </li>
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
              <span>Mock audit and final preparation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CyberAuditReadiness;
