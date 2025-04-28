import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  return (
    <footer>
      <div className="footer-content md:grid-cols-4 gap-2 md:gap-6">
        {/* Company Info */}
        <div className="flex flex-col justify-center md:pr-4">
          <h3 className="footer-heading">CyberPosture</h3>
          <p className="footer-text">
            Securing your digital future with comprehensive cybersecurity solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:border-l md:border-accent/10 md:pl-6">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
            <Link 
              to="/" 
              onClick={(e) => handleNavClick(e, '/')}
              className="footer-link"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={(e) => handleNavClick(e, '/about')}
              className="footer-link"
            >
              About
            </Link>
            <Link 
              to="/services" 
              onClick={(e) => handleNavClick(e, '/services')}
              className="footer-link"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              onClick={(e) => handleNavClick(e, '/contact')}
              className="footer-link"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col md:border-l md:border-accent/10 md:pl-6 items-center">
          <h4 className="footer-heading text-center w-full">Services</h4>
          <div className="services-grid w-full justify-items-center">
            <Link 
              to="/services" 
              onClick={(e) => handleNavClick(e, '/services')}
              className="footer-link"
            >
              All Services
            </Link>
            <Link 
              to="/services/cloud-security" 
              onClick={(e) => handleNavClick(e, '/services/cloud-security')}
              className="footer-link"
            >
              Cloud Security
            </Link>
            <Link 
              to="/services/cyber-audit-readiness" 
              onClick={(e) => handleNavClick(e, '/services/cyber-audit-readiness')}
              className="footer-link"
            >
              Cyber Audit
            </Link>
            <Link 
              to="/services/data-security" 
              onClick={(e) => handleNavClick(e, '/services/data-security')}
              className="footer-link"
            >
              Data Security
            </Link>
            <Link 
              to="/services/regulatory-compliance" 
              onClick={(e) => handleNavClick(e, '/services/regulatory-compliance')}
              className="footer-link"
            >
              Regulatory
            </Link>
            <Link 
              to="/services/security-consulting" 
              onClick={(e) => handleNavClick(e, '/services/security-consulting')}
              className="footer-link"
            >
              Consulting
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:border-l md:border-accent/10 md:pl-6 items-center md:items-start">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="space-y-1">
            <li className="footer-text">contact@cyberposture.com</li>
            <li className="footer-text">+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-text text-sm">
          © {new Date().getFullYear()} CyberPosture. All rights reserved.
        </p>
        <button
          onClick={scrollToTop}
          className="scroll-top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-accent" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
