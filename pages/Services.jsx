import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure with our comprehensive solutions.',
      link: '/services/cloud-security'
    },
    {
      title: 'Cyber Audit Readiness',
      description: 'Prepare for cyber audits with our expert guidance.',
      link: '/services/cyber-audit-readiness'
    },
    {
      title: 'Data Security',
      description: 'Protect your sensitive data with advanced security measures.',
      link: '/services/data-security'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Stay compliant with industry regulations and standards.',
      link: '/services/regulatory-compliance'
    },
    {
      title: 'Security Assessments',
      description: 'Evaluate your security posture with thorough assessments.',
      link: '/services/security-assessments'
    },
    {
      title: 'Security Consulting',
      description: 'Get expert guidance on your security strategy.',
      link: '/services/security-consulting'
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <div className="container-custom py-20">
        <h1 className="text-center mb-6 text-text-primary">Our Services</h1>
        <p className="text-center text-xl md:text-2xl mb-16 max-w-4xl mx-auto text-text-secondary">
          Comprehensive security solutions to protect your organization's digital assets and infrastructure
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              to={service.link}
              key={index}
              className="bg-secondary p-8 rounded-lg border-2 border-accent hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="mb-4 text-accent hover:text-accent/80 transition-colors">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;