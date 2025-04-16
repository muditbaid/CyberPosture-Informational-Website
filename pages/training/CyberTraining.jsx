import React from 'react';
import { Link } from 'react-router-dom';

const CyberTraining = () => {
  const courses = [
    {
      title: 'Security Awareness',
      description: 'Fundamental training for all employees to recognize and prevent security threats',
      duration: '2 hours',
      level: 'Beginner'
    },
    {
      title: 'Incident Response',
      description: 'Hands-on training for security teams to effectively respond to cyber incidents',
      duration: '16 hours',
      level: 'Advanced'
    },
    {
      title: 'Secure Coding',
      description: 'Training for developers to write secure code and prevent common vulnerabilities',
      duration: '8 hours',
      level: 'Intermediate'
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Cybersecurity Training</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Build security knowledge and skills across your organization
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-primary mb-4">{course.title}</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <div className="flex justify-between text-sm text-gray-600 mb-6">
              <span>Duration: {course.duration}</span>
              <span>Level: {course.level}</span>
            </div>
            <Link
              to="/contact"
              className="bg-accent hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold inline-flex items-center transition duration-300"
            >
              Enroll Now
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-primary mb-6">Custom Training Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Tailored to Your Needs</h3>
            <p className="text-gray-700 mb-4">
              We offer customized training programs designed specifically for your organization's 
              unique requirements, industry, and security challenges.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Role-specific training</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Industry-specific content</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Delivery Options</h3>
            <p className="text-gray-700 mb-4">
              Our training is available in multiple formats to suit your organization's needs:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>In-person workshops</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Virtual instructor-led training</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Self-paced eLearning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberTraining;
