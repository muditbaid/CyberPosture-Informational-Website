import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Server, Cloud, Lock, AlertCircle, ClipboardList, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Regulatory Compliance',
      description: 'Meet HIPAA, PCI DSS, GDPR standards and maintain compliance with ease.',
      icon: <ClipboardList className="w-6 h-6 text-accent" />,
      link: '/services/regulatory-compliance'
    },
    {
      title: 'Security Consulting',
      description: 'Strategic guidance on security policies, risk frameworks, and incident response.',
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      link: '/services/security-consulting'
    },
    {
      title: 'Cyber Audit Readiness',
      description: 'Ensure your org is audit-ready by identifying and fixing control gaps.',
      icon: <ClipboardList className="w-6 h-6 text-accent" />,
      link: '/services/cyber-audit-readiness'
    },
    {
      title: 'Security Assessments',
      description: 'Comprehensive vulnerability assessments and penetration testing.',
      icon: <AlertCircle className="w-6 h-6 text-accent" />,
      link: '/services/security-assessments'
    },
    {
      title: 'Cloud Security',
      description: 'Cloud security posture management and CASB solutions.',
      icon: <Cloud className="w-6 h-6 text-accent" />,
      link: '/services/cloud-security'
    },
    {
      title: 'Data Security',
      description: 'Data encryption, DLP solutions, and secure data handling.',
      icon: <Lock className="w-6 h-6 text-accent" />,
      link: '/services/data-security'
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="w-full py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="hero-title mb-6">
              Our Cybersecurity Services
            </h1>
            <p className="hero-subtitle">
              Comprehensive security solutions tailored to your organization's needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="card"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{service.title}</h3>
                </div>
                <p className="text-text-secondary mb-6">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="text-accent hover:text-accent/90 inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-gradient-to-r from-accent to-[#00B8FF] py-20">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-primary/90 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how we can help protect your organization.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-primary text-accent hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
