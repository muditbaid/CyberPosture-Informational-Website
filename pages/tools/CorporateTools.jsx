import React from 'react';
import { Link } from 'react-router-dom';

const CorporateTools = () => {
  const tools = [
    {
      name: 'Threat Intelligence Platform',
      description: 'Real-time threat intelligence and analysis to stay ahead of emerging threats',
      features: [
        'Global threat monitoring',
        'Custom threat feeds',
        'Automated alerting'
      ]
    },
    {
      name: 'Security Orchestration',
      description: 'Automate and orchestrate security operations for improved efficiency',
      features: [
        'Workflow automation',
        'Playbook integration',
        'Case management'
      ]
    },
    {
      name: 'Vulnerability Management',
      description: 'Continuous vulnerability scanning and prioritization',
      features: [
        'Asset discovery',
        'Risk-based prioritization',
        'Remediation tracking'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Corporate Security Tools</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Enterprise-grade security solutions to protect your organization
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-primary mb-4">{tool.name}</h2>
            <p className="text-gray-700 mb-4">{tool.description}</p>
            <ul className="mb-6 space-y-2">
              {tool.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="text-accent font-semibold hover:underline inline-flex items-center"
            >
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Our Tools?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Enterprise-Grade Security</h3>
            <p className="text-gray-700">
              Our tools are built to meet the needs of large organizations with complex security requirements,
              offering scalability, reliability, and comprehensive protection.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
            <p className="text-gray-700">
              Designed to work with your existing security stack, our tools integrate with SIEMs,
              ticketing systems, and other security solutions for a unified security posture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTools;
