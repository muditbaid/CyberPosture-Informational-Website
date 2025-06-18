// File: pages/Contact.jsx

import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    company: '',
    phone: '',
    message: '' 
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-5xl bg-secondary rounded-2xl border-2 border-accent shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-12">
        {/* Contact Form */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Contact Us</h2>
          <p className="text-lg text-text-secondary mb-8">Get in touch with our cybersecurity experts to discuss your needs.</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-text-secondary mb-1">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 bg-primary border border-accent rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition text-text-primary" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-text-secondary mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 bg-primary border border-accent rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition text-text-primary" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-text-secondary mb-1">Company</label>
                <input type="text" name="company" value={form.company} onChange={handleChange} className="w-full px-4 py-3 bg-primary border border-accent rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition text-text-primary" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-text-secondary mb-1">Phone</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 bg-primary border border-accent rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition text-text-primary" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" required className="w-full px-4 py-3 bg-primary border border-accent rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition text-text-primary" />
            </div>
            <button type="submit" className="w-full bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent/80 transition duration-300 shadow">Send Message</button>
          </form>
        </div>
        {/* Contact Information */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          <div className="bg-primary rounded-2xl border border-accent p-6 shadow">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div>
                  <p className="text-lg font-medium text-text-primary">Phone</p>
                  <p className="text-text-secondary">+1 (214) 966-5167</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div>
                  <p className="text-lg font-medium text-text-primary">Email</p>
                  <p className="text-text-secondary">cyberposture2023@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <p className="text-lg font-medium text-text-primary">Address</p>
                  <p className="text-text-secondary">1017 Yarnell Place, Plano, TX 75094</p>
                </div>
              </div>
            </div>
          </div>
          {/* Business Hours */}
          <div className="bg-primary rounded-2xl border border-accent p-6 shadow">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-text-secondary">Monday - Friday</p>
                <p className="font-medium text-text-primary">9:00 AM - 5:00 PM</p>
              </div>
              <div className="flex justify-between">
                <p className="text-text-secondary">Saturday</p>
                <p className="font-medium text-text-primary">Closed</p>
              </div>
              <div className="flex justify-between">
                <p className="text-text-secondary">Sunday</p>
                <p className="font-medium text-text-primary">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
