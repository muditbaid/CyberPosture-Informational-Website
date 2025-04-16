import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Server, Cloud, Lock, AlertCircle, ClipboardList, ArrowRight } from 'lucide-react';

const Home = () => {
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
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.remove('fade-out');
        } else {
          if (entry.target.classList.contains('active')) {
            entry.target.classList.add('fade-out');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('.full-screen-section');
    
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="full-screen-section bg-primary">
        <div className="container-custom text-center">
          <h1 className="mb-6">
            Proactive Cybersecurity for a Reactive World
          </h1>
          <p className="mb-12 max-w-3xl mx-auto">
            Stay ahead of threats with expert consulting, tailored risk mitigation, and proactive security assessments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="full-screen-section bg-secondary">
        <div className="container-custom text-center">
          <h2 className="mb-6">Our Cybersecurity Services</h2>
          <p className="mb-12 max-w-3xl mx-auto">
            Comprehensive security solutions tailored to your organization's needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-accent">{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Innovation Section */}
      <section className="full-screen-section bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Exploring Generative AI Workflows</h2>
              <p className="mb-8">
                Harness the power of AI to enhance your cybersecurity posture. Our innovative approach combines traditional security measures with cutting-edge AI technology to provide unprecedented protection.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/20">
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3">AI-powered threat detection and response</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/20">
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3">Automated security assessments</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/20">
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3">Predictive risk analysis</p>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8">
              <img 
                src="/ai-workflow.jpg" 
                alt="AI Security Workflow" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="full-screen-section bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Why Choose CyberPosture?</h2>
              <p className="mb-8">
                We combine industry expertise with cutting-edge technology to deliver comprehensive cybersecurity solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/20">
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3">Expert-led security assessments</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/20">
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3">24/7 security monitoring</p>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-accent mb-4">Ready to Secure Your Business?</h3>
                <p className="mb-6">
                  Contact us today for a free consultation and discover how we can help protect your organization.
                </p>
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="glass-card p-8">
              <img 
                src="/security-dashboard.png" 
                alt="Security Dashboard" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
