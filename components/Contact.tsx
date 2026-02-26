"use client";

import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  isDarkMode: boolean;
}

export function Contact({ isDarkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (this is a mock implementation)
    alert('Thanks for reaching out! This is a demo - in a real site, this would send your message.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={`py-20 px-4 ${
      isDarkMode ? 'bg-black border-t border-white' : 'bg-white border-t border-black'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-5xl md:text-6xl text-center mb-12 ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-3xl mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Let's work together
            </h3>
            <p className={`mb-8 text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 border rounded-lg flex items-center justify-center ${
                  isDarkMode ? 'border-white' : 'border-black'
                }`}>
                  <Mail className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className={isDarkMode ? 'text-white' : 'text-black'}>alex@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 border rounded-lg flex items-center justify-center ${
                  isDarkMode ? 'border-white' : 'border-black'
                }`}>
                  <Phone className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className={isDarkMode ? 'text-white' : 'text-black'}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 border rounded-lg flex items-center justify-center ${
                  isDarkMode ? 'border-white' : 'border-black'
                }`}>
                  <MapPin className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className={isDarkMode ? 'text-white' : 'text-black'}>San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm mb-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    isDarkMode
                      ? 'bg-black border-white focus:ring-white text-white'
                      : 'bg-white border-black focus:ring-black text-black'
                  }`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm mb-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    isDarkMode
                      ? 'bg-black border-white focus:ring-white text-white'
                      : 'bg-white border-black focus:ring-black text-black'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm mb-2 ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 resize-none ${
                    isDarkMode
                      ? 'bg-black border-white focus:ring-white text-white'
                      : 'bg-white border-black focus:ring-black text-black'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className={`w-full px-6 py-3 border-2 rounded-full transition-colors text-lg ${
                  isDarkMode
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}