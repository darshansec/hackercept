import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-red-600" />
              <div className="text-2xl font-bold">
                <span className="text-white">Hacker</span>
                <span className="text-red-600">Cept</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional cybersecurity services to secure your web applications and digital assets. 
              Protecting businesses with comprehensive security testing and expert consulting.
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1">Trusted by 500+ companies worldwide</p>
              <p>OWASP Top 10 certified security professionals</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('training')}
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Training
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Web App Penetration Testing</li>
              <li>Bug Bounty Hunting</li>
              <li>Security Audit Reports</li>
              <li>OWASP Top 10 Testing</li>
              <li>Security Training</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 HackerCept. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Security Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;