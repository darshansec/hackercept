import React, { useEffect, useRef } from 'react';
import { Shield, Bug, FileText, Search, Lock, Award, Zap, Eye } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 200);
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

  const services = [
    {
      icon: <Search className="h-12 w-12 text-red-600" />,
      title: "Web Application Penetration Testing",
      description: "Comprehensive security testing of your web applications to identify vulnerabilities before attackers do. Our testing methodology follows industry standards and best practices.",
      features: ["OWASP Top 10 Testing", "Manual Code Review", "Automated Vulnerability Scanning", "Detailed Remediation Guidelines"],
      delay: "0s"
    },
    {
      icon: <Bug className="h-12 w-12 text-red-600" />,
      title: "Bug Bounty Hunting Services",
      description: "Professional bug bounty hunting services with experienced security researchers who have real-world experience in finding and reporting security vulnerabilities.",
      features: ["Continuous Security Testing", "Real-world Attack Scenarios", "Responsible Disclosure", "Platform Management"],
      delay: "0.2s"
    },
    {
      icon: <FileText className="h-12 w-12 text-red-600" />,
      title: "Security Audit Reports",
      description: "Comprehensive security audit reports that provide detailed analysis of your security posture with actionable recommendations for improvement.",
      features: ["Executive Summaries", "Technical Findings", "Risk Assessment", "Compliance Mapping"],
      delay: "0.4s"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-600/20 rounded-full animate-scale-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-red-600/20 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-red-600/30 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
            Our <span className="text-red-600 glitch" data-text="Services">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto fade-in-up">
            HackerCept provides comprehensive cybersecurity services to protect your digital assets 
            and ensure your applications meet the highest security standards.
          </p>
        </div>

        {/* OWASP Highlight with Enhanced Animation */}
        <div className="bg-gradient-to-r from-red-900/20 to-red-600/20 border border-red-600/30 rounded-xl p-6 mb-16 hover-lift hover-glow relative overflow-hidden fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent animate-scan-line"></div>
          <div className="flex items-center justify-center space-x-4 mb-4 relative z-10">
            <Award className="h-8 w-8 text-red-600 animate-glow animate-float" />
            <h3 className="text-2xl font-bold text-white">OWASP Top 10 Standards</h3>
            <Eye className="h-6 w-6 text-red-600 animate-pulse" />
          </div>
          <p className="text-gray-300 text-center max-w-4xl mx-auto relative z-10">
            All our security tests strictly follow the OWASP Top 10 framework, ensuring comprehensive coverage 
            of the most critical web application security risks including injection flaws, broken authentication, 
            sensitive data exposure, and more.
          </p>
        </div>

        {/* Services Grid with Staggered Animation */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/50 border border-gray-800 rounded-xl p-8 hover:border-red-600/50 hover:bg-black/70 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 fade-in-up hover-glow relative overflow-hidden group"
              style={{ animationDelay: service.delay }}
            >
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Scan Line Effect */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-float">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2 w-full">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 animate-pulse"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Action Button */}
                <button className="mt-6 bg-red-600/20 border border-red-600/50 text-red-400 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Security Guarantee with Enhanced Animation */}
        <div className="text-center mt-16 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-black/50 border border-gray-800 rounded-full px-6 py-3 hover-glow hover-lift relative overflow-hidden group">
            <Lock className="h-5 w-5 text-red-600 animate-glow" />
            <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">100% Confidential & Secure Testing</span>
            <Zap className="h-4 w-4 text-red-600 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Floating Security Icons */}
        <div className="absolute top-20 right-20 text-red-600/20 animate-float">
          <Shield className="h-8 w-8" />
        </div>
        <div className="absolute bottom-20 left-20 text-red-600/20 animate-float" style={{ animationDelay: '1s' }}>
          <Lock className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Services;