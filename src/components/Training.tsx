import React, { useEffect, useRef } from 'react';
import { GraduationCap, Users, Award, BookOpen, Target, Shield, Zap, TrendingUp } from 'lucide-react';

const Training = () => {
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
              }, index * 100);
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

  const features = [
    {
      icon: <Target className="h-6 w-6 text-red-600" />,
      text: "Hands-on practical exercises"
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      text: "Real-world bug bounty scenarios"
    },
    {
      icon: <Award className="h-6 w-6 text-red-600" />,
      text: "Industry-recognized certifications"
    },
    {
      icon: <Users className="h-6 w-6 text-red-600" />,
      text: "Expert instructor guidance"
    }
  ];

  const courses = [
    {
      title: "Web Application Security Fundamentals",
      duration: "4 weeks",
      level: "Beginner",
      students: "500+",
      progress: 85
    },
    {
      title: "Advanced Penetration Testing",
      duration: "6 weeks", 
      level: "Intermediate",
      students: "300+",
      progress: 92
    },
    {
      title: "Bug Bounty Hunting Mastery",
      duration: "8 weeks",
      level: "Advanced",
      students: "150+",
      progress: 78
    }
  ];

  return (
    <section id="training" className="py-20 bg-gray-900 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 border border-red-600/20 rounded-full animate-scale-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-red-600/20 rounded-full animate-float"></div>
        <Zap className="absolute top-20 left-20 h-8 w-8 text-red-600/20 animate-pulse" />
        <TrendingUp className="absolute bottom-20 right-20 h-6 w-6 text-red-600/20 animate-float" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6 fade-in-up">
            <GraduationCap className="h-16 w-16 text-red-600 animate-glow animate-float" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
            Train with <span className="text-red-600 glitch" data-text="HackerCept">HackerCept</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 fade-in-up">
            Master ethical hacking and penetration testing with our comprehensive online courses. 
            Learn from industry experts with real-world bug bounty experience.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Training Info */}
          <div className="fade-in-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 hover-glow">
              We train students with <span className="text-red-600 animate-glow">real-world</span> bug bounty experience
            </h3>
            
            <p className="text-gray-300 mb-8 leading-relaxed hover-lift">
              Our instructors are active bug bounty hunters and penetration testers who bring 
              practical, real-world experience to every lesson. You'll learn the same techniques 
              and methodologies used by professional security researchers.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 hover-lift hover-glow p-2 rounded-lg transition-all duration-300">
                  <div className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {feature.icon}
                  </div>
                  <span className="text-gray-300 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover-glow relative overflow-hidden group">
              <span className="relative z-10">Join Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Right Column - Course Cards */}
          <div className="space-y-4 fade-in-right">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-red-600/50 hover:bg-black/70 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover-glow relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 h-1 bg-red-600 rounded-t-xl transition-all duration-1000 group-hover:w-full" style={{ width: `${course.progress}%` }}></div>
                
                <div className="flex justify-between items-start mb-3 relative z-10">
                  <h4 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                    {course.title}
                  </h4>
                  <span className="bg-red-600/20 text-red-400 px-2 py-1 rounded text-xs font-medium animate-pulse">
                    {course.level}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-400 relative z-10">
                  <span>Duration: {course.duration}</span>
                  <span className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{course.students} enrolled</span>
                  </span>
                </div>
                
                {/* Success Rate */}
                <div className="mt-3 flex items-center space-x-2 relative z-10">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-green-400">{course.progress}% completion rate</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-black/50 border border-gray-800 rounded-xl p-8 hover-lift hover-glow relative overflow-hidden group scale-in">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            <div className="hover-lift">
              <div className="flex justify-center mb-2">
                <BookOpen className="h-8 w-8 text-red-600 animate-float" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 animate-scale-pulse">15+</div>
              <div className="text-gray-400 text-sm">Courses Available</div>
            </div>
            <div className="hover-lift">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-red-600 animate-float" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="text-3xl font-bold text-white mb-1 animate-scale-pulse">1000+</div>
              <div className="text-gray-400 text-sm">Students Trained</div>
            </div>
            <div className="hover-lift">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-red-600 animate-float" style={{ animationDelay: '1s' }} />
              </div>
              <div className="text-3xl font-bold text-white mb-1 animate-scale-pulse">95%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
            <div className="hover-lift">
              <div className="flex justify-center mb-2">
                <Target className="h-8 w-8 text-red-600 animate-float" style={{ animationDelay: '1.5s' }} />
              </div>
              <div className="text-3xl font-bold text-white mb-1 animate-scale-pulse">50+</div>
              <div className="text-gray-400 text-sm">Bug Bounties Found</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-to-r from-red-900/20 to-red-600/20 border border-red-600/30 rounded-xl p-8 max-w-4xl mx-auto hover-lift hover-glow relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-red-400 transition-colors duration-300">
              Ready to Start Your <span className="animate-glow">Cybersecurity</span> Journey?
            </h3>
            <p className="text-gray-300 mb-6 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
              Join thousands of students who have already started their career in ethical hacking 
              and cybersecurity with HackerCept's comprehensive training programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-110 hover-glow">
                View All Courses
              </button>
              <button className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;