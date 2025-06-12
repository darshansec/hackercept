import React, { useEffect, useRef } from 'react';
import { Check, Star, Zap, Shield, Crown, Sparkles } from 'lucide-react';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.fade-in-up, .scale-in');
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

  const plans = [
    {
      name: "Basic Scan",
      price: "Free",
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      description: "Perfect for getting started with basic security testing",
      features: [
        "Basic vulnerability scanning",
        "Simple security findings report",
        "Email support",
        "Basic recommendations",
        "1 web application"
      ],
      buttonText: "Get Started",
      buttonClass: "bg-blue-600 hover:bg-blue-700 text-white hover:scale-110",
      popular: false,
      cardClass: "hover:border-blue-500/50 hover:shadow-blue-500/25"
    },
    {
      name: "OWASP Top 10 Test",
      price: "₹999",
      icon: <Star className="h-8 w-8 text-red-600" />,
      description: "Comprehensive OWASP Top 10 security testing",
      features: [
        "Full OWASP Top 10 vulnerability testing",
        "Detailed security assessment report",
        "Priority email & phone support",
        "Remediation guidelines",
        "Up to 3 web applications",
        "30-day support period"
      ],
      buttonText: "Buy Now",
      buttonClass: "bg-red-600 hover:bg-red-700 text-white hover:scale-110",
      popular: true,
      cardClass: "border-red-600 shadow-red-600/25 shadow-lg hover:shadow-red-600/40"
    },
    {
      name: "Deep Web App Test",
      price: "₹2,499",
      icon: <Crown className="h-8 w-8 text-purple-500" />,
      description: "Most comprehensive security testing available",
      features: [
        "Complete OWASP Top 10 testing",
        "Business logic flaw detection",
        "Manual security analysis",
        "Comprehensive penetration testing",
        "Executive summary report",
        "Unlimited applications",
        "90-day dedicated support",
        "Follow-up security consultation"
      ],
      buttonText: "Buy Now",
      buttonClass: "bg-purple-600 hover:bg-purple-700 text-white hover:scale-110",
      popular: false,
      cardClass: "hover:border-purple-500/50 hover:shadow-purple-500/25"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 border border-red-600/10 rounded-full animate-scale-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-red-600/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-600/30 rounded-full animate-ping"></div>
        <Sparkles className="absolute top-32 right-32 h-6 w-6 text-red-600/20 animate-float" />
        <Zap className="absolute bottom-32 left-32 h-6 w-6 text-red-600/20 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
            Choose Your <span className="text-red-600 glitch" data-text="Security">Security</span> Plan
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto fade-in-up">
            Select the perfect security testing plan for your needs. All plans include professional 
            reports and dedicated support to help secure your applications.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 border-2 rounded-xl p-8 transition-all duration-500 transform hover:-translate-y-4 scale-in hover-glow ${plan.cardClass} group`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium animate-glow">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

              {/* Scan Line Effect */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="text-center relative z-10">
                {/* Plan Icon */}
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="animate-float">
                    {plan.icon}
                  </div>
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {plan.name}
                </h3>

                {/* Plan Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 animate-scale-pulse">
                    {plan.price}
                  </span>
                  {plan.price !== "Free" && (
                    <span className="text-gray-400 text-lg">/test</span>
                  )}
                </div>

                {/* Plan Description */}
                <p className="text-gray-300 mb-8 group-hover:text-gray-200 transition-colors duration-300">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-200">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 animate-pulse" />
                      <span className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover-glow relative overflow-hidden group/btn ${plan.buttonClass}`}>
                    <span className="relative z-10">{plan.buttonText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="w-full py-2 px-6 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-red-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105">
                    Request Demo
                  </button>
                </div>

                {/* Security Badge */}
                <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-1 text-xs text-gray-400">
                    <Shield className="h-3 w-3 text-green-500" />
                    <span>Secure Payment</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info with Enhanced Animation */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-4xl mx-auto hover-lift hover-glow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-xl font-bold text-white mb-4 relative z-10 group-hover:text-red-400 transition-colors duration-300">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-4 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
              We offer customized security testing packages for enterprise clients with specific requirements. 
              Contact us to discuss your unique security needs.
            </p>
            <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105 relative z-10 hover-glow">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center space-x-8 mt-12 fade-in-up">
          <div className="flex items-center space-x-2 text-gray-400">
            <Shield className="h-5 w-5 text-green-500 animate-pulse" />
            <span className="text-sm">SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Star className="h-5 w-5 text-yellow-500 animate-pulse" />
            <span className="text-sm">5-Star Rated</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Zap className="h-5 w-5 text-blue-500 animate-pulse" />
            <span className="text-sm">Instant Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;