import React from 'react';
import { Link } from 'react-router-dom';

const readinessTopics = [
  { title: 'Governance', desc: 'Establish clear security governance structures and policies.' },
  { title: 'Compliance', desc: 'Ensure ongoing compliance with industry standards and regulations.' },
  { title: 'Risk Management', desc: 'Identify, assess, and mitigate risks to your organization.' },
  { title: 'Incident Response', desc: 'Develop and test incident response plans for rapid recovery.' },
  { title: 'Business Continuity', desc: 'Maintain operations during and after disruptive events.' },
  { title: 'Disaster Recovery', desc: 'Prepare for and recover from major incidents or disasters.' },
  { title: 'Vendor Compliance', desc: 'Ensure third-party vendors meet your security requirements.' },
];

const assessmentTopics = [
  { title: 'Risk Assessments', desc: 'Comprehensive risk analysis for your organization.' },
  { title: 'PCI DSS', desc: 'Payment Card Industry Data Security Standard compliance.' },
  { title: 'AI Governance', desc: 'Frameworks for responsible and secure AI adoption.' },
  { title: 'Cloud Computing', desc: 'Secure your cloud infrastructure and services.' },
  { title: 'OWASP', desc: 'Web application security best practices.' },
  { title: 'ISO', desc: 'International security standards (e.g., ISO 27001).' },
  { title: 'NIST CSF', desc: 'NIST Cybersecurity Framework assessments.' },
  { title: 'NIST Privacy', desc: 'NIST Privacy Framework implementation.' },
  { title: 'HITRUST', desc: 'Health Information Trust Alliance certification.' },
  { title: 'Cyber Risk Assessments', desc: 'Holistic cyber risk evaluation and reporting.' },
];

const vendorTopics = [
  {
    title: 'Risk Tolerance',
    desc: 'Tailor the assessment approach to your organization\'s risk tolerance and the criticality of the vendor relationship. Risk scoring and prioritization: Assign risk scores to vendors based on their assessment results, allowing you to prioritize remediation efforts.'
  },
  {
    title: 'On-site or Remote Audits',
    desc: 'Conduct limited on-site audits or remote audits to verify the vendor\'s security controls and compliance with agreed-upon terms.'
  },
  {
    title: 'Cybersecurity Insurance Coverage',
    desc: 'Verify that the vendor maintains adequate cybersecurity insurance coverage to mitigate potential losses.'
  },
  {
    title: 'Penetration Testing',
    desc: (
      <>
        <div>• Targeted vulnerability assessments: Focus on specific systems or applications used by the vendor that directly interface with your organization.</div>
        <div>• Limited scope penetration tests: Simulate attacks to identify exploitable vulnerabilities within the vendor\'s environment.</div>
      </>
    )
  },
];

const SectionCard = ({ title, desc }) => (
  <div className="bg-secondary rounded-xl border-2 border-accent p-6 shadow-md transition-all duration-300 hover:bg-accent hover:text-black text-black hover:scale-105">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="mb-0">{desc}</p>
  </div>
);

const SecurityConsulting = () => {
  return (
    <section className="py-20 bg-primary min-h-screen">
      <div className="container-custom max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">Security Consulting Services</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Strategic security guidance for your organization. Our experts help you build, assess, and mature your security posture across readiness, assessments, and vendor management.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <Link to="/contact" className="btn btn-primary text-lg px-8 py-3 rounded-lg font-semibold shadow hover:bg-accent/90 transition-all duration-300">
            Talk to our expert
          </Link>
        </div>

        {/* Cyber Readiness Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-accent mb-6">Cyber Readiness</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {readinessTopics.map((topic) => (
              <SectionCard key={topic.title} title={topic.title} desc={topic.desc} />
            ))}
          </div>
        </div>

        {/* Cyber Assessments Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-accent mb-6">Cyber Assessments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {assessmentTopics.map((topic) => (
              <SectionCard key={topic.title} title={topic.title} desc={topic.desc} />
            ))}
          </div>
        </div>

        {/* Vendor and Third Party Assessment Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-accent mb-6">Vendor and Third Party Assessment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {vendorTopics.map((topic) => (
              <div key={topic.title} className="bg-secondary rounded-xl border-2 border-accent p-6 shadow-md transition-all duration-300 hover:bg-accent hover:text-black text-black hover:scale-105">
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                <div className="mb-0">{topic.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/contact" className="btn btn-primary text-lg px-8 py-3 rounded-lg font-semibold shadow hover:bg-accent/90 transition-all duration-300">
            Talk to our expert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecurityConsulting;
