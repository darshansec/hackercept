import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Lock, Zap, Code, Terminal } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Secure Your Web World";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Matrix rain effect
  const MatrixRain = () => {
    const chars = "01";
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-red-600/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {chars[Math.floor(Math.random() * chars.length)]}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1)_0%,transparent_50%)] animate-gradient-shift"></div>
      
      {/* Matrix Rain Effect */}
      <MatrixRain />
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-red-600 rounded-full animate-pulse animate-float"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-red-500 rounded-full animate-pulse animate-float"></div>
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-red-300 rounded-full animate-bounce"></div>
      <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-red-700 rounded-full animate-scale-pulse"></div>
      
      {/* Floating Code Elements */}
      <div className="absolute top-32 right-32 text-red-600/30 animate-float">
        <Code className="h-6 w-6" />
      </div>
      <div className="absolute bottom-32 left-32 text-red-600/30 animate-float" style={{ animationDelay: '1s' }}>
        <Terminal className="h-6 w-6" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with Enhanced Animation */}
          <div className="flex items-center justify-center space-x-3 mb-8 animate-fade-in">
            <Shield className="h-16 w-16 text-red-600 animate-glow animate-rotate-360" />
            <div className="text-4xl lg:text-6xl font-bold">
              <span className="text-white hover-glow">Hacker</span>
              <span className="text-red-600 glitch" data-text="Cept">Cept</span>
            </div>
          </div>

          {/* Typewriter Effect Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="animate-typewriter inline-block">
              {typedText}
            </span>
            <span className="animate-blink">|</span>
            <span className="text-red-600 block lg:inline animate-slide-in-right"> with HackerCept</span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up-delay hover-lift">
            Professional cybersecurity services including penetration testing, bug bounty hunting, 
            and comprehensive security audits following 
            <span className="text-red-400 font-semibold animate-glow"> OWASP Top 10</span> standards.
          </p>

          {/* Enhanced Feature Points */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 animate-slide-up-delay-2">
            <div className="flex items-center space-x-2 text-gray-300 hover-lift hover-glow">
              <Lock className="h-5 w-5 text-red-600 animate-float" />
              <span>OWASP Top 10 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover-lift hover-glow">
              <Zap className="h-5 w-5 text-red-600 animate-scale-pulse" />
              <span>Real-world Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover-lift hover-glow">
              <Shield className="h-5 w-5 text-red-600 animate-glow" />
              <span>Professional Reports</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up-delay-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transform hover:scale-110 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover-glow hover-slide relative overflow-hidden group"
            >
              <span className="relative z-10">Get a Free Test</span>
              <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover-glow relative overflow-hidden group"
            >
              <span className="relative z-10">View Plans</span>
              <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Security Stats with Animation */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up-delay-3">
            <div className="bg-black/30 border border-red-600/30 rounded-lg p-4 hover-lift hover-glow">
              <div className="text-2xl font-bold text-red-600 animate-scale-pulse">500+</div>
              <div className="text-gray-300 text-sm">Apps Secured</div>
            </div>
            <div className="bg-black/30 border border-red-600/30 rounded-lg p-4 hover-lift hover-glow">
              <div className="text-2xl font-bold text-red-600 animate-scale-pulse">1000+</div>
              <div className="text-gray-300 text-sm">Vulnerabilities Found</div>
            </div>
            <div className="bg-black/30 border border-red-600/30 rounded-lg p-4 hover-lift hover-glow">
              <div className="text-2xl font-bold text-red-600 animate-scale-pulse">99.9%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover-glow cursor-pointer" onClick={() => scrollToSection('services')}>
        <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-red-600 rounded-full mt-2 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/20 to-transparent animate-scan-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;