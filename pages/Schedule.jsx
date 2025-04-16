// File: pages/Schedule.jsx

import React, { useState } from 'react';

const Schedule = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment scheduled!'); // Placeholder logic
  };

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">Schedule an Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Service Required</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a service</option>
            <option value="Compliance">Regulatory Compliance</option>
            <option value="Assessment">Cyber Assessments</option>
            <option value="Readiness">Cyber Readiness</option>
            <option value="Evaluation">Cyber Evaluation</option>
            <option value="Training">Cyber Training</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-accent text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
        >
          Schedule
        </button>
      </form>
    </section>
  );
};

export default Schedule;
