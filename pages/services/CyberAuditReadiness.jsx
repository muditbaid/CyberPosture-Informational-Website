import React from 'react';
import { Link } from 'react-router-dom';

const CyberAuditReadiness = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Cyber Audit Readiness</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Prepare your organization for successful cybersecurity audits and compliance assessments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="bg-secondary p-8 rounded-lg border-2 border-accent hover:transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold text-accent hover:text-accent/80 transition-colors mb-6">Audit Preparation Services</h2>
            <p className="text-text-secondary mb-6">
              Our Cyber Audit Readiness services help organizations prepare for and successfully 
              navigate cybersecurity audits, ensuring compliance with industry standards and 
              regulatory requirements.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">Gap analysis against compliance frameworks</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">Remediation planning and implementation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">Documentation and evidence preparation</span>
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
          <div className="bg-secondary p-8 rounded-lg border-2 border-accent hover:transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold text-accent hover:text-accent/80 transition-colors mb-6">Our Approach</h2>
            <p className="text-text-secondary mb-4">
              We follow a structured approach to ensure your organization is fully prepared:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <span className="text-text-secondary">Initial assessment of current state</span>
              </li>
              <li className="flex items-start">
                <span className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <span className="text-text-secondary">Identification of gaps and vulnerabilities</span>
              </li>
              <li className="flex items-start">
                <span className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <span className="text-text-secondary">Development of remediation roadmap</span>
              </li>
              <li className="flex items-start">
                <span className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <span className="text-text-secondary">Mock audit and final preparation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberAuditReadiness;
