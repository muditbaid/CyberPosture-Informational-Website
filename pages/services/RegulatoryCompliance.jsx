import React from 'react';
import { Link } from 'react-router-dom';

const assessments = [
  'SOC-1',
  'SOC-2',
  'HIPAA',
  'GDPR',
  'GLBA',
  'CCPA',
  'FINRA',
  'FEDRAMP',
  'FISMA',
];

const RegulatoryCompliance = () => {
  return (
    <section className="py-20 bg-primary min-h-screen">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">Regulatory Compliance Assessments</h1>
          <div className="mx-auto mb-6" style={{ maxWidth: '1000px' }}>
            <p className="text-xl text-text-secondary">
              Prepares your organization for a cyber audit by ensuring your systems and processes are in compliance with relevant regulations.<br/>
              Cyber Posture can help you develop a plan for responding to a cyber audit and ensure a smooth audit process.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
          {/* Assessment List */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-accent mb-6 text-center md:text-left">Assessment Types</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {assessments.map((item) => (
                <div
                  key={item}
                  className="bg-secondary border border-accent rounded-md text-center text-text-primary font-semibold text-base py-2 px-4 m-0 shadow-sm transition-all duration-300 hover:bg-accent hover:text-black"
                  style={{ minWidth: '100px', maxWidth: '220px', margin: '0 auto' }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Why Choose Box */}
          <div className="flex-1">
            <div className="bg-secondary rounded-xl border border-accent p-8 shadow-lg text-center md:text-left">
              <h3 className="text-xl font-bold text-accent mb-4">Why Choose Cyber Posture?</h3>
              <ul className="space-y-3 text-text-secondary text-base mb-8 text-left max-w-xl mx-auto">
                <li className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
                  Expert guidance for audit readiness and compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
                  End-to-end support for documentation, remediation, and reporting
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-accent"></span>
                  Ongoing compliance monitoring and advisory
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-3 rounded-lg font-semibold shadow hover:bg-accent/90 transition-all duration-300 block mx-auto mt-6">
                Talk to our expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryCompliance;
