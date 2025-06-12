import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 border border-red-600/10 rounded-full animate-scale-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-red-600/10 rounded-full animate-float"></div>
        <MessageCircle className="absolute top-32 right-32 h-8 w-8 text-red-600/20 animate-float" />
        <Mail className="absolute bottom-32 left-32 h-6 w-6 text-red-600/20 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
            Contact <span className="text-red-600 glitch" data-text="Us">Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto fade-in-up">
            Ready to secure your applications? Get in touch with our cybersecurity experts 
            for a consultation or to discuss your security needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover-lift hover-glow relative overflow-hidden group fade-in-left">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10 group-hover:text-red-400 transition-colors duration-300">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="hover-lift">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all duration-300 hover:border-gray-600"
                  placeholder="John Doe"
                />
              </div>

              <div className="hover-lift">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all duration-300 hover:border-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="hover-lift">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 transition-all duration-300 hover:border-gray-600 resize-none"
                  placeholder="Tell us about your security needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 hover-glow relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <Send className="h-4 w-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-right">
            {/* Contact Details */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover-lift hover-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10 group-hover:text-red-400 transition-colors duration-300">
                Get in Touch
              </h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start space-x-4 hover-lift">
                  <Mail className="h-6 w-6 text-red-600 flex-shrink-0 mt-1 animate-float" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300 hover:text-red-400 transition-colors duration-300 cursor-pointer">security@hackercept.com</p>
                    <p className="text-gray-300 hover:text-red-400 transition-colors duration-300 cursor-pointer">support@hackercept.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-lift">
                  <Phone className="h-6 w-6 text-red-600 flex-shrink-0 mt-1 animate-pulse" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300 hover:text-red-400 transition-colors duration-300 cursor-pointer">+91 98765 43210</p>
                    <p className="text-gray-400 text-sm flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>Mon-Fri, 9 AM - 6 PM IST</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover-lift">
                  <MapPin className="h-6 w-6 text-red-600 flex-shrink-0 mt-1 animate-glow" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Mumbai, Maharashtra</p>
                    <p className="text-gray-300">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover-lift hover-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10 group-hover:text-red-400 transition-colors duration-300">
                Follow Us
              </h3>
              
              <div className="flex space-x-4 relative z-10">
                <a
                  href="#"
                  className="bg-black border border-gray-700 p-3 rounded-lg text-gray-400 hover:text-white hover:border-red-600 transition-all duration-300 transform hover:scale-110 hover-glow"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-black border border-gray-700 p-3 rounded-lg text-gray-400 hover:text-white hover:border-red-600 transition-all duration-300 transform hover:scale-110 hover-glow"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-black border border-gray-700 p-3 rounded-lg text-gray-400 hover:text-white hover:border-red-600 transition-all duration-300 transform hover:scale-110 hover-glow"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800 relative z-10">
                <h4 className="text-white font-semibold mb-2">Response Time</h4>
                <p className="text-gray-300 text-sm">
                  We typically respond to all inquiries within 
                  <span className="text-red-400 font-semibold"> 24 hours</span> during business days.
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-red-900/20 to-red-600/20 border border-red-600/30 rounded-xl p-6 hover-lift hover-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h4 className="text-white font-semibold mb-2 relative z-10 flex items-center space-x-2">
                <span>Need Immediate Help?</span>
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              </h4>
              <p className="text-gray-300 text-sm mb-4 relative z-10">
                For urgent security matters or active threats, please call our 24/7 emergency line.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 relative z-10 hover-glow">
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;