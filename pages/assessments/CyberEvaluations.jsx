import React from 'react';
import { Link } from 'react-router-dom';

const CyberEvaluations = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Cyber Evaluations</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Comprehensive cybersecurity evaluations to identify and mitigate risks
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">Evaluation Services</h2>
          <p className="text-gray-700 mb-6">
            Our Cyber Evaluations provide organizations with in-depth analysis of their 
            security posture, identifying vulnerabilities and providing actionable 
            recommendations for improvement.
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Comprehensive risk assessments</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Threat modeling and analysis</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Security control effectiveness testing</span>
            </li>
          </ul>
          <Link
            to="/contact"
            className="bg-accent hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold inline-flex items-center transition duration-300"
          >
            Request Evaluation
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">Evaluation Process</h3>
          <p className="text-gray-700 mb-4">
            Our evaluation methodology follows industry best practices:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <span>Scope definition and planning</span>
            </li>
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <span>Data collection and analysis</span>
            </li>
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <span>Vulnerability identification</span>
            </li>
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
              <span>Risk assessment and prioritization</span>
            </li>
            <li className="flex items-start">
              <span className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
              <span>Reporting and recommendations</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CyberEvaluations;
