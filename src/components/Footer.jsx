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
      <div className="footer-content">
        {/* Company Info */}
        <div>
          <h3 className="footer-heading">CyberPosture</h3>
          <p className="footer-text">
            Securing your digital future with comprehensive cybersecurity solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                onClick={(e) => handleNavClick(e, '/')}
                className="footer-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={(e) => handleNavClick(e, '/about')}
                className="footer-link"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                onClick={(e) => handleNavClick(e, '/services')}
                className="footer-link"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={(e) => handleNavClick(e, '/contact')}
                className="footer-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="footer-heading">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/services/regulatory-compliance" 
                onClick={(e) => handleNavClick(e, '/services/regulatory-compliance')}
                className="footer-link"
              >
                Regulatory Compliance
              </Link>
            </li>
            <li>
              <Link 
                to="/services/security-consulting" 
                onClick={(e) => handleNavClick(e, '/services/security-consulting')}
                className="footer-link"
              >
                Security Consulting
              </Link>
            </li>
            <li>
              <Link 
                to="/services/cyber-audit-readiness" 
                onClick={(e) => handleNavClick(e, '/services/cyber-audit-readiness')}
                className="footer-link"
              >
                Cyber Audit Readiness
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="space-y-2">
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
