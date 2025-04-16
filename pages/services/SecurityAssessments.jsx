import React from 'react';
import { Link } from 'react-router-dom';

const SecurityAssessments = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Security Assessment Services</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Identify and address security vulnerabilities before they become breaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-secondary p-8 rounded-lg border-2 border-accent">
            <h2 className="text-3xl font-bold text-text-primary mb-6">Comprehensive Security Testing</h2>
            <p className="text-text-secondary mb-6">
              Our Security Assessment services provide organizations with a clear understanding 
              of their security posture through comprehensive vulnerability assessments, 
              penetration testing, and compliance audits.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">Vulnerability assessments</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">Penetration testing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">Security architecture reviews</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Get Started
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="bg-secondary p-8 rounded-lg border-2 border-accent">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Our Assessment Methodology</h3>
            <p className="text-text-secondary mb-4">
              We follow a proven methodology to ensure comprehensive security testing:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <span className="text-text-secondary">Planning and scoping</span>
              </li>
              <li className="flex items-start">
                <span className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <span className="text-text-secondary">Information gathering</span>
              </li>
              <li className="flex items-start">
                <span className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <span className="text-text-secondary">Vulnerability identification</span>
              </li>
              <li className="flex items-start">
                <span className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <span className="text-text-secondary">Exploitation and validation</span>
              </li>
              <li className="flex items-start">
                <span className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                <span className="text-text-secondary">Reporting and remediation guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAssessments;
