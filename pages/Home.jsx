import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Server, Cloud, Lock, AlertCircle, ClipboardList, ArrowRight } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const lockSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      title: 'Cloud Security',
      description: 'Protect your cloud infrastructure with advanced security measures and monitoring.',
      icon: <Cloud className="w-6 h-6 text-accent" />,
      link: '/services/cloud-security'
    },
    {
      title: 'Data Security',
      description: 'Safeguard your sensitive data with comprehensive protection strategies.',
      icon: <Lock className="w-6 h-6 text-accent" />,
      link: '/services/data-security'
    },
    {
      title: 'Security Assessments',
      description: 'Identify vulnerabilities and strengthen your security posture with expert assessments.',
      icon: <AlertCircle className="w-6 h-6 text-accent" />,
      link: '/services/security-assessments'
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
      <section className="full-screen-section bg-primary relative overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: true, zIndex: 0 },
            background: { color: 'transparent' },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
              modes: { repulse: { distance: 100, duration: 0.4 } }
            },
            particles: {
              color: { value: '#4CAF50' },
              links: { color: '#4CAF50', distance: 140, enable: true, opacity: 0.3, width: 1 },
              move: { enable: true, speed: 1.2, direction: 'none', random: false, straight: false, outModes: 'out' },
              number: { value: 40, density: { enable: true, area: 800 } },
              opacity: { value: 0.5 },
              shape: {
                type: ['circle', 'image'],
                image: [
                  {
                    src: `data:image/svg+xml,${encodeURIComponent(lockSvg)}`,
                    width: 20,
                    height: 20
                  }
                ]
              },
              size: { value: { min: 4, max: 8 } }
            },
            detectRetina: true
          }}
        />
        <div className="container-custom text-center relative z-10">
          <h1 className="site-title mb-4">Cyber Posture</h1>
          <p className="mb-12 max-w-3xl mx-auto">
            Stay ahead of threats with expert consulting, tailored risk mitigation, and proactive security assessments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">
              Get a Free Consultation
            </Link>
            <Link to="/services" onClick={scrollToTop} className="btn btn-secondary">
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
              <Link 
                key={index} 
                to={service.link}
                onClick={scrollToTop}
                className="card hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-accent hover:text-accent/80 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-text-secondary">{service.description}</p>
              </Link>
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
      <section className="full-screen-section bg-secondary relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20"></div>
        <div className="container-custom relative">
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
                src="/dashboard.png" 
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
