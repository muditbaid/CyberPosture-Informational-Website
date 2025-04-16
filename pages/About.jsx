// File: pages/About.jsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Target, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: 'Expert Team',
      description: 'Our team consists of certified cybersecurity professionals with years of industry experience.',
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Proactive Approach',
      description: 'We focus on preventing security breaches before they occur through comprehensive assessments.',
      icon: <Target className="w-6 h-6 text-blue-600" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support to ensure your systems are always protected.',
      icon: <Clock className="w-6 h-6 text-blue-600" />
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
      {/* Mission Section */}
      <section className="full-screen-section bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Our Mission</h1>
              <p className="mb-8">
                At CyberPosture, we're dedicated to protecting organizations from evolving cyber threats through innovative solutions and expert guidance.
              </p>
              <div className="space-y-4">
                <p>
                  Our team of certified security experts brings decades of combined experience in cybersecurity, risk management, and compliance.
                </p>
                <p>
                  We believe in a proactive approach to security, helping organizations stay ahead of threats rather than reacting to breaches.
                </p>
              </div>
            </div>
            <div className="glass-card p-8">
              <img 
                src="/mission-image.jpg" 
                alt="Cybersecurity Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="full-screen-section bg-secondary">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-accent mb-4">Innovation</h3>
              <p>
                Continuously evolving our solutions to stay ahead of emerging threats and technologies.
              </p>
            </div>
            <div className="card">
              <h3 className="text-accent mb-4">Integrity</h3>
              <p>
                Building trust through transparent practices and honest communication.
              </p>
            </div>
            <div className="card">
              <h3 className="text-accent mb-4">Excellence</h3>
              <p>
                Delivering exceptional service and maintaining the highest standards in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="full-screen-section bg-primary">
        <div className="container-custom">
          <h2 className="text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <img 
                src="/team-member-1.jpg" 
                alt="Team Member" 
                className="rounded-lg mb-4 w-full h-auto"
              />
              <h3 className="text-accent mb-2">John Doe</h3>
              <p className="text-sm mb-2">Chief Security Officer</p>
              <p>
                15+ years of experience in cybersecurity and risk management.
              </p>
            </div>
            <div className="card">
              <img 
                src="/team-member-2.jpg" 
                alt="Team Member" 
                className="rounded-lg mb-4 w-full h-auto"
              />
              <h3 className="text-accent mb-2">Jane Smith</h3>
              <p className="text-sm mb-2">Security Architect</p>
              <p>
                Expert in cloud security and infrastructure protection.
              </p>
            </div>
            <div className="card">
              <img 
                src="/team-member-3.jpg" 
                alt="Team Member" 
                className="rounded-lg mb-4 w-full h-auto"
              />
              <h3 className="text-accent mb-2">Mike Johnson</h3>
              <p className="text-sm mb-2">Compliance Specialist</p>
              <p>
                Specialized in regulatory compliance and audit preparation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
