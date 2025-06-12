import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-secondary shadow-lg">
      <div className="container-custom">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="brand-logo">
              CYBER POSTURE
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-text-secondary hover:text-accent transition duration-300">
              Home
            </Link>
            <Link to="/about" className="text-text-secondary hover:text-accent transition duration-300">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="nav-item">
              <Link to="/services" className="text-text-secondary hover:text-accent transition duration-300 flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="nav-dropdown">
                <div className="nav-dropdown-content">
                  <Link to="/services" className="nav-dropdown-item">
                    All Services
                  </Link>
                  <Link to="/services/cloud-security" className="nav-dropdown-item">
                    Cloud Security
                  </Link>
                  <Link to="/services/cyber-audit-readiness" className="nav-dropdown-item">
                    Cyber Audit Readiness
                  </Link>
                  <Link to="/services/data-security" className="nav-dropdown-item">
                    Data Security
                  </Link>
                  <Link to="/services/regulatory-compliance" className="nav-dropdown-item">
                    Regulatory Compliance
                  </Link>
                  <Link to="/services/security-consulting" className="nav-dropdown-item">
                    Security Consulting
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/resources" className="text-text-secondary hover:text-accent transition duration-300">
              Resources
            </Link>

            <Link to="/contact" className="text-text-secondary hover:text-accent transition duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
