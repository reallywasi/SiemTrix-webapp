"use client"

import React, { useState, useEffect } from 'react';

function LandingPage() {
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for billing toggle
  const [isAnnual, setIsAnnual] = useState(false);

  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  // State for demo modal
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // State for active demo tab
  const [activeTab, setActiveTab] = useState('productivity');

  // State for contact form success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on link click or ESC key
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle billing toggle
  const toggleBilling = (type) => {
    setIsAnnual(type === 'annual');
  };

  // Handle FAQ toggle
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Open demo modal
  const openDemoModal = () => {
    setIsDemoModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close demo modal
  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
    document.body.style.overflow = '';
  };

  // Handle demo tab change
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  // Handle contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const requiredFields = ['firstName', 'lastName', 'email', 'subject', 'message'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!data[field] || data[field].trim() === '') {
        isValid = false;
      }
    });

    if (!emailRegex.test(data.email)) {
      isValid = false;
    }

    if (isValid) {
      setShowSuccessMessage(true);
      e.target.reset();
      setTimeout(() => setShowSuccessMessage(false), 5000);
    }
  };

  // Handle ESC key for modal and mobile menu
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (isDemoModalOpen) closeDemoModal();
        if (isMobileMenuOpen) closeMobileMenu();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isDemoModalOpen, isMobileMenuOpen]);

  return (
    <div className="antialiased text-gray-800 min-h-screen flex flex-col">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black"
      >
        Skip to main content
      </a>

      <main id="main-content" className="flex-1 relative h-full">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
     
        </header>

        {/* Hero Section */}
        <section id="hero" className="bg-slate-900 text-white min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-600/20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Transform Your Digital <span className="text-emerald-400">Activity</span> Into Insights
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    SiemTrix analyzes your browsing history and system logs to deliver powerful productivity dashboards and security insights.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    'Track coding time on GitHub, LeetCode, VS Code',
                    'Monitor entertainment vs productivity balance',
                    'Advanced security log analysis',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Start Free Analysis
                  </button>
                  <button className="border border-gray-600 hover:border-emerald-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-400/10">
                    View Demo Dashboard
                  </button>
                </div>
                <div className="flex items-center space-x-6 pt-4">
                  {[
                    { value: '99.9%', label: 'Accuracy', color: 'emerald' },
                    { value: '10K+', label: 'Users', color: 'emerald' },
                    { value: '24/7', label: 'Monitoring', color: 'emerald' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative z-20">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBhbmFseXRpY3MlMjUyMGRhcmslMjUyMHByb2Zlc3Npb25hbCUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="SiemTrix cybersecurity dashboard with teal analytics display"
                    className="w-full h-auto rounded-2xl shadow-2xl border border-gray-700"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 z-30 transform rotate-12">
                  <img
                    src="https://images.unsplash.com/photo-1563452619267-bc16ef6cecec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBhbmFseXRpY3MlMjUyMGRhcmslMjUyMHByb2Zlc3Npb25hbCUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Mobile security monitoring interface"
                    className="w-32 h-auto rounded-xl shadow-xl border border-gray-600"
                    loading="eager"
                  />
                </div>
                <div className="absolute -top-4 -right-4 z-30">
                  <img
                    src="https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBhbmFseXRpY3MlMjUyMGRhcmslMjUyMHByb2Zlc3Npb25hbCUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Smart device encryption and security"
                    className="w-24 h-auto rounded-lg shadow-lg border border-gray-600"
                    loading="eager"
                  />
                </div>
                <div className="absolute inset-0 z-10">
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful analytics and insights from your digital activity patterns
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Productivity Analytics',
                  description: 'Track coding time on GitHub, LeetCode, and VS Code. Get detailed insights into your productive hours.',
                  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBhbmFseXRpY3MlMjUyMGRhcmslMjUyMG1vZGVybiUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Productivity analytics dashboard with teal LED display',
                  items: ['Development time tracking', 'Focus session analysis', 'Weekly productivity reports'],
                  color: 'emerald',
                },
                {
                  title: 'Cross-Platform Monitoring',
                  description: 'Monitor activity across all devices. Chrome history, Windows logs, and mobile usage patterns.',
                  image: 'https://images.unsplash.com/photo-1563452619267-bc16ef6cecec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBhbmFseXRpY3MlMjUyMGRhcmslMjUyMG1vZGVybiUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Mobile security monitoring interface',
                  items: ['Multi-device sync', 'Browser history analysis', 'System log integration'],
                  color: 'blue',
                },
                {
                  title: 'Security Intelligence',
                  description: 'Advanced SIEM log analysis with threat detection and security pattern recognition.',
                  image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBhbmFseXRpY3MlMjUyMGRhcmslMjUyMG1vZGVybiUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Smart device encryption and security analysis',
                  items: ['Threat detection', 'Anomaly identification', 'Security alerts'],
                  color: 'red',
                },
                {
                  title: 'Smart Insights',
                  description: 'AI-powered recommendations to optimize your digital habits and improve focus.',
                  image: 'https://images.unsplash.com/photo-1591290619618-904f6dd935e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBhbmFseXRpY3MlMjUyMGRhcmslMjUyMG1vZGVybiUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Smart wireless analytics and insights dashboard',
                  items: ['Habit optimization', 'Focus recommendations', 'Performance metrics'],
                  color: 'purple',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-6">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-48 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className={`w-1.5 h-1.5 bg-${feature.color}-500 rounded-full mr-2`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '99.9%', label: 'Analysis Accuracy', color: 'emerald' },
                  { value: '24/7', label: 'Real-time Monitoring', color: 'blue' },
                  { value: '50+', label: 'Data Sources', color: 'purple' },
                  { value: '10K+', label: 'Active Users', color: 'red' },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple three-step process to transform your digital activity into actionable insights
              </p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
                {[
                  {
                    step: 1,
                    title: 'Collect Data',
                    description: 'Securely gather logs from Chrome history, Windows activity, and system events for comprehensive analysis.',
                    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eSUyNTIwd29ya2Zsb3clMjUyMGRpYWdyYW0lMjUyMHByb2Zlc3Npb25hbCUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                    alt: 'Data collection workflow with teal LED analytics display',
                    color: 'emerald',
                  },
                  {
                    step: 2,
                    title: 'Analyze Patterns',
                    description: 'AI-powered analysis identifies productivity patterns, security threats, and usage trends across all platforms.',
                    image: 'https://images.unsplash.com/photo-1563452619267-bc16ef6cecec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eSUyNTIwd29ya2Zsb3clMjUyMGRpYWdyYW0lMjUyMHByb2Zlc3Npb25hbCUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                    alt: 'Mobile analysis interface for workflow processing',
                    color: 'blue',
                  },
                  {
                    step: 3,
                    title: 'Get Insights',
                    description: 'Receive detailed dashboards with productivity metrics, focus analytics, and security recommendations.',
                    image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y3liZXJzZWN1cml0eSUyNTIwd29ya2Zsb3clMjUyMGRpYWdyYW0lMjUyMHByb2Zlc3Npb25hbCUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                    alt: 'Smart device insights and encryption workflow',
                    color: 'purple',
                  },
                ].map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div
                      className={`bg-white border-4 border-${step.color}-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 relative z-10`}
                    >
                      <span className={`text-2xl font-bold text-${step.color}-600`}>{step.step}</span>
                    </div>
                    <div className="mb-6">
                      <img
                        src={step.image}
                        alt={step.alt}
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Real-time Processing', description: 'Instant analysis and updates', color: 'emerald' },
                  { title: 'Privacy First', description: 'Your data stays secure', color: 'blue' },
                  { title: 'Smart Alerts', description: 'Proactive notifications', color: 'purple' },
                  { title: 'Easy Setup', description: '5-minute installation', color: 'red' },
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <div className={`w-6 h-6 bg-${benefit.color}-500 rounded`}></div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="bg-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade security with advanced threat detection and privacy protection
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Advanced SIEM Analytics</h3>
                  <p className="text-gray-300 mb-6">
                    Real-time security information and event management with AI-powered threat detection across all your digital activities.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: 'End-to-End Encryption',
                      description: 'All data encrypted in transit and at rest with AES-256',
                      color: 'emerald',
                    },
                    {
                      title: 'Anomaly Detection',
                      description: 'Machine learning identifies unusual patterns and potential threats',
                      color: 'blue',
                    },
                    {
                      title: 'Zero Trust Architecture',
                      description: 'Continuous verification and least-privilege access controls',
                      color: 'purple',
                    },
                    {
                      title: 'Compliance Ready',
                      description: 'GDPR, SOC 2, and ISO 27001 compliant infrastructure',
                      color: 'red',
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-6 h-6 bg-${feature.color}-500 rounded-full flex items-center justify-center mt-1`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  {[
                    { value: '99.99%', label: 'Uptime SLA', color: 'emerald' },
                    { value: '<1ms', label: 'Threat Response', color: 'blue' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold text-${stat.color}-400 mb-1`}>{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBkYXJrJTI1MjBwcm9mZXNzaW9uYWwlMjUyMGlsbHVzdHJhdGlvbnxlbnwxfDB8fHwxNzQ4MzE5ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Advanced cybersecurity dashboard with teal LED security monitoring"
                  className="w-full h-auto rounded-2xl shadow-2xl border border-gray-700"
                  loading="lazy"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-8 h-8 border-2 border-white rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center animate-pulse delay-1000">
                  <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Mobile Security',
                  description: 'Comprehensive mobile device monitoring with real-time threat detection and secure data transmission.',
                  image: 'https://images.unsplash.com/photo-1563452619267-bc16ef6cecec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBkYXJrJTI1MjBwcm9mZXNzaW9uYWwlMjUyMGlsbHVzdHJhdGlvbnxlbnwxfDB8fHwxNzQ4MzE5ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Mobile security interface with professional monitoring',
                  items: ['Device fingerprinting', 'App behavior analysis', 'Secure data sync'],
                  color: 'emerald',
                },
                {
                  title: 'Smart Encryption',
                  description: 'Advanced encryption protocols protect your data across all devices with quantum-resistant algorithms.',
                  image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBkYXJrJTI1MjBwcm9mZXNzaW9uYWwlMjUyMGlsbHVzdHJhdGlvbnxlbnwxfDB8fHwxNzQ4MzE5ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Smart device encryption and security protocols',
                  items: ['Quantum-safe encryption', 'Hardware security modules', 'Key rotation automation'],
                  color: 'blue',
                },
              ].map((feature, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="mb-6">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-48 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className={`w-1.5 h-1.5 bg-${feature.color}-400 rounded-full mr-2`}></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <h3 className="text-xl font-semibold text-white mb-8">Trusted by Security Professionals</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { title: 'SOC 2', description: 'Type II Certified', color: 'emerald' },
                  { title: 'ISO', description: '27001 Compliant', color: 'blue' },
                  { title: 'GDPR', description: 'Privacy Ready', color: 'purple' },
                  { title: 'PCI', description: 'DSS Level 1', color: 'red' },
                ].map((cert, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 border border-gray-700">
                      <span className={`text-${cert.color}-400 font-bold text-sm`}>{cert.title}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section id="dashboard-preview" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dashboard</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience powerful analytics with our intuitive dashboard interface
              </p>
            </div>
            <div className="mb-16">
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-white font-bold text-lg">SiemTrix Dashboard</div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">Live Dashboard</div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBpbnRlcmZhY2UlMjUyMGRhcmslMjUyMG1vZGVybiUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="SiemTrix main dashboard interface with teal analytics display"
                    className="w-full h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                      Live Data
                    </div>
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Real-time
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: 'Mobile Dashboard',
                  description: 'Access your productivity insights anywhere with our responsive mobile interface.',
                  image: 'https://images.unsplash.com/photo-1563452619267-bc16ef6cecec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBpbnRlcmZhY2UlMjUyMGRhcmslMjUyMG1vZGVybiUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Mobile dashboard interface for on-the-go monitoring',
                  stats: [
                    { label: 'Coding Time Today', value: '6h 42m', color: 'emerald' },
                    { label: 'Focus Score', value: '87%', color: 'blue' },
                    { label: 'Productivity Rank', value: 'Top 15%', color: 'purple' },
                  ],
                },
                {
                  title: 'Advanced Analytics',
                  description: 'Deep insights into your digital habits with AI-powered recommendations and trends.',
                  image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBpbnRlcmZhY2UlMjUyMGRhcmslMjUyMG1vZGVybiUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMTk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Advanced analytics dashboard with smart device integration',
                  stats: [
                    { label: 'Weekly Improvement', value: '+23%', color: 'emerald' },
                    { label: 'Distraction Events', value: '12', color: 'red' },
                    { label: 'Goal Achievement', value: '94%', color: 'blue' },
                  ],
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="mb-6">
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-48 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.stats.map((stat, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{stat.label}</span>
                        <span className={`font-semibold text-${stat.color}-600`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Demo</h3>
                <p className="text-gray-600">Explore key dashboard features with live data visualization</p>
              </div>
              <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
                {['productivity', 'security', 'insights'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 font-medium transition-colors duration-300 ${
                      activeTab === tab
                        ? 'text-emerald-600 border-b-2 border-emerald-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => changeTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className="tab-content">
                <div id="productivity-tab" className={`tab-panel ${activeTab === 'productivity' ? '' : 'hidden'}`}>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { value: '8.5h', label: 'Daily Coding Time', extra: '+15% vs last week', color: 'emerald', bg: 'emerald-50' },
                      { value: '92%', label: 'Focus Efficiency', extra: 'Above average', color: 'blue', bg: 'blue-50' },
                      { value: '47', label: 'GitHub Commits', extra: 'This week', color: 'purple', bg: 'purple-50' },
                    ].map((stat, index) => (
                      <div key={index} className={`text-center p-6 bg-${stat.bg} rounded-lg`}>
                        <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                        <div className="text-gray-600">{stat.label}</div>
                        <div className={`text-sm text-${stat.color}-600 mt-1`}>{stat.extra}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div id="security-tab" className={`tab-panel ${activeTab === 'security' ? '' : 'hidden'}`}>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { value: '0', label: 'Security Threats', extra: 'All clear', color: 'green', bg: 'green-50' },
                      { value: '3', label: 'Anomalies Detected', extra: 'Low risk', color: 'yellow', bg: 'yellow-50' },
                      { value: '99.9%', label: 'System Uptime', extra: 'Excellent', color: 'blue', bg: 'blue-50' },
                    ].map((stat, index) => (
                      <div key={index} className={`text-center p-6 bg-${stat.bg} rounded-lg`}>
                        <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                        <div className="text-gray-600">{stat.label}</div>
                        <div className={`text-sm text-${stat.color}-600 mt-1`}>{stat.extra}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div id="insights-tab" className={`tab-panel ${activeTab === 'insights' ? '' : 'hidden'}`}>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { value: '2.3x', label: 'Productivity Boost', extra: 'Since using SiemTrix', color: 'indigo', bg: 'indigo-50' },
                      { value: '67%', label: 'Distraction Reduction', extra: 'Monthly improvement', color: 'pink', bg: 'pink-50' },
                      { value: '4.8', label: 'Focus Score', extra: 'Out of 5.0', color: 'orange', bg: 'orange-50' },
                    ].map((stat, index) => (
                      <div key={index} className={`text-center p-6 bg-${stat.bg} rounded-lg`}>
                        <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                        <div className="text-gray-600">{stat.label}</div>
                        <div className={`text-sm text-${stat.color}-600 mt-1`}>{stat.extra}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Try Dashboard Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your productivity and security needs
              </p>
            </div>
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-lg">
                <button
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                    !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                  }`}
                  onClick={() => toggleBilling('monthly')}
                >
                  Monthly
                </button>
                <button
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                    isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                  }`}
                  onClick={() => toggleBilling('annual')}
                >
                  Annual
                  <span className="ml-2 bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full text-xs">Save 20%</span>
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: 'Starter',
                  description: 'Perfect for individual users',
                  monthlyPrice: 9,
                  annualPrice: 7,
                  image: 'https://images.unsplash.com/photo-1563452619267-bc16ef6cecec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eSUyNTIwcHJpY2luZyUyNTIwZGFzaGJvYXJkJTI1MjBwcm9mZXNzaW9uYWwlMjUyMGNsZWFuJTI1MjBpbGx1c3RyYXRpb258ZW58MXwwfHx8MTc0ODMxOTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Starter plan mobile interface for basic monitoring',
                  features: ['Basic productivity tracking', 'Chrome history analysis', 'Weekly reports', 'Email support'],
                  buttonText: 'Start Free Trial',
                  buttonStyle: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
                },
                {
                  title: 'Professional',
                  description: 'For serious productivity enthusiasts',
                  monthlyPrice: 29,
                  annualPrice: 23,
                  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eSUyNTIwcHJpY2luZyUyNTIwZGFzaGJvYXJkJTI1MjBwcm9mZXNzaW9uYWwlMjUyMGNsZWFuJTI1MjBpbGx1c3RyYXRpb258ZW58MXwwfHx8MTc0ODMxOTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Professional plan dashboard with teal analytics display',
                  features: [
                    'Advanced SIEM analytics',
                    'Multi-platform monitoring',
                    'Real-time alerts',
                    'AI-powered insights',
                    'Priority support',
                  ],
                  buttonText: 'Start Free Trial',
                  buttonStyle: 'bg-emerald-500 hover:bg-emerald-600 text-white',
                  popular: true,
                },
                {
                  title: 'Enterprise',
                  description: 'For teams and organizations',
                  monthlyPrice: 99,
                  annualPrice: 79,
                  image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y3liZXJzZWN1cml0eSUyNTIwcHJpY2luZyUyNTIwZGFzaGJvYXJkJTI1MjBwcm9mZXNzaW9uYWwlMjUyMGNsZWFuJTI1MjBpbGx1c3RyYXRpb258ZW58MXwwfHx8MTc0ODMxOTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
                  alt: 'Enterprise plan smart device encryption and security',
                  features: [
                    'Enterprise SIEM platform',
                    'Team collaboration tools',
                    'Custom integrations',
                    'Dedicated account manager',
                    '24/7 phone support',
                  ],
                  buttonText: 'Contact Sales',
                  buttonStyle: 'bg-gray-900 hover:bg-gray-800 text-white',
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border ${plan.popular ? 'border-2 border-emerald-500' : 'border-gray-200'} p-8 hover:shadow-lg transition-shadow duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <img
                      src={plan.image}
                      alt={plan.alt}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      loading="lazy"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className={`text-3xl font-bold text-gray-900 ${isAnnual ? 'hidden' : ''}`}>
                        ${plan.monthlyPrice}
                      </span>
                      <span className={`text-3xl font-bold text-gray-900 ${isAnnual ? '' : 'hidden'}`}>
                        ${plan.annualPrice}
                      </span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    <p className={`text-sm text-gray-500 mt-1 ${isAnnual ? '' : 'hidden'}`}>
                      Billed annually (${plan.annualPrice * 12}/year)
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h3>
              <div className="space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    question: 'Is there a free trial available?',
                    answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.',
                  },
                  {
                    question: 'Can I change plans anytime?',
                    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
                  },
                  {
                    question: 'Is my data secure?',
                    answer: 'Yes, we use enterprise-grade encryption and are SOC 2 Type II certified. Your data is always protected.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="faq-item bg-white rounded-lg border border-gray-200">
                    <button
                      className="faq-question w-full text-left p-6 font-semibold text-gray-900 hover:text-emerald-600 transition-colors duration-300 flex items-center justify-between"
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      <span className="faq-icon text-2xl">{openFaq === index ? '−' : '+'}</span>
                    </button>
                    <div className={`faq-answer ${openFaq === index ? '' : 'hidden'} px-6 pb-6 text-gray-600`}>
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-50 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by thousands of developers and security professionals worldwide
              </p>
            </div>
          </div>
          <div className="w-full relative">
            <div className="scroller" data-speed="slow">
              <ul className="tag-list scroller__inner flex space-x-6 animate-scroll">
                {[
                  {
                    quote: 'SiemTrix transformed how I track my coding productivity. The GitHub integration is phenomenal!',
                    name: 'Sarah Johnson',
                    role: 'Senior Developer at TechCorp',
                    initials: 'SJ',
                    color: 'emerald',
                  },
                  {
                    quote: 'The security insights are incredible. Caught several anomalies that could have been serious threats.',
                    name: 'Michael Chen',
                    role: 'Cybersecurity Analyst',
                    initials: 'MC',
                    color: 'blue',
                  },
                  {
                    quote: 'Finally understand where my time goes! The entertainment vs productivity breakdown is eye-opening.',
                    name: 'Alex Rodriguez',
                    role: 'Freelance Developer',
                    initials: 'AR',
                    color: 'purple',
                  },
                  {
                    quote: 'The VS Code time tracking is spot-on. Helped me optimize my workflow and increase productivity by 40%.',
                    name: 'Emily Parker',
                    role: 'Full Stack Engineer',
                    initials: 'EP',
                    color: 'red',
                  },
                  {
                    quote: 'Best SIEM tool I’ve used. The dashboard is intuitive and the alerts are always accurate.',
                    name: 'David Kim',
                    role: 'IT Security Manager',
                    initials: 'DK',
                    color: 'yellow',
                  },
                  {
                    quote: 'Love the LeetCode integration! Now I can see exactly how much time I spend on coding practice.',
                    name: 'Jessica Liu',
                    role: 'Software Engineer',
                    initials: 'JL',
                    color: 'indigo',
                  },
                  // Duplicate for seamless scroll
                  {
                    quote: 'SiemTrix transformed how I track my coding productivity. The GitHub integration is phenomenal!',
                    name: 'Sarah Johnson',
                    role: 'Senior Developer at TechCorp',
                    initials: 'SJ',
                    color: 'emerald',
                  },
                  {
                    quote: 'The security insights are incredible. Caught several anomalies that could have been serious threats.',
                    name: 'Michael Chen',
                    role: 'Cybersecurity Analyst',
                    initials: 'MC',
                    color: 'blue',
                  },
                  {
                    quote: 'Finally understand where my time goes! The entertainment vs productivity breakdown is eye-opening.',
                    name: 'Alex Rodriguez',
                    role: 'Freelance Developer',
                    initials: 'AR',
                    color: 'purple',
                  },
                ].map((testimonial, index) => (
                  <li
                    key={index}
                    className="testimonial-card bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-w-80 max-w-80"
                  >
                    <blockquote className="text-gray-700 mb-4">{testimonial.quote}</blockquote>
                    <div className="flex items-center">
                      <div className={`w-10 h-10 bg-${testimonial.color}-100 rounded-full flex items-center justify-center mr-3`}>
                        <span className={`text-${testimonial.color}-600 font-semibold text-sm`}>{testimonial.initials}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '10,000+', label: 'Active Users', color: 'emerald' },
                { value: '99.9%', label: 'Uptime', color: 'blue' },
                { value: '4.9/5', label: 'User Rating', color: 'purple' },
                { value: '24/7', label: 'Support', color: 'red' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .scroller:hover .animate-scroll {
              animation-play-state: paused;
            }
            .scroller {
              mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
              -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
            }
          `}</style>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-600/20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Ready to Transform Your <span className="text-emerald-400">Digital Productivity?</span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Join thousands of developers and security professionals who trust SiemTrix for comprehensive activity analysis and security monitoring.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    '14-day free trial, no credit card required',
                    'Setup in under 5 minutes',
                    'Cancel anytime, no questions asked',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 bg-${['emerald', 'blue', 'purple'][index]}-500 rounded-full flex items-center justify-center`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    onClick={() => alert('Redirecting to free trial signup...')}
                  >
                    Start Free Trial
                  </button>
                  <button
                    className="border border-gray-600 hover:border-emerald-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-400/10"
                    onClick={openDemoModal}
                  >
                    Schedule Demo
                  </button>
                </div>
                <div className="flex items-center space-x-6 pt-4">
                  {[
                    { value: '10K+', label: 'Happy Users', color: 'emerald' },
                    { value: '4.9/5', label: 'User Rating', color: 'blue' },
                    { value: '99.9%', label: 'Uptime', color: 'purple' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative z-20">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBpbnTlcmZhY2UlMjUyMGRhcmslMjUyMG1vZGVybiUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMjAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="SiemTrix dashboard interface with teal analytics and modern design"
                    className="w-full h-auto rounded-2xl shadow-2xl border border-gray-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 z-30 transform -rotate-12">
                  <img
                    src="https://images.unsplash.com/photo-1563452619267-bc16ef6cecec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eSUyNTIwZGFzaGJvYXJkJTI1MjBpbnRlcmZhY2UlMjUyMGRhcmslMjUyMG1vZGVybiUyNTIwaWxsdXN0cmF0aW9ufGVufDF8MHx8fDE3NDgzMjAxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Mobile dashboard interface for on-the-go monitoring"
                    className="w-32 h-auto rounded-xl shadow-xl border border-gray-600"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 z-10">
                  <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="demo-modal"
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isDemoModalOpen ? 'flex' : 'hidden'} items-center justify-center p-4`}
            aria-modal={isDemoModalOpen}
            aria-hidden={!isDemoModalOpen}
            onClick={(e) => e.target.id === 'demo-modal' && closeDemoModal()}
          >
            <div
              className={`bg-white rounded-2xl max-w-md w-full p-6 relative transform transition-all duration-300 ${
                isDemoModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                onClick={closeDemoModal}
                aria-label="Close modal"
              >
                <span className="text-2xl">×</span>
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Demo</h3>
                <p className="text-gray-600 mb-6">See SiemTrix in action with a personalized demo tailored to your needs.</p>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Demo scheduled successfully!'); closeDemoModal(); }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Work Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors duration-300">
                      <option>Preferred Time</option>
                      <option>Morning (9-12 PM)</option>
                      <option>Afternoon (1-5 PM)</option>
                      <option>Evening (6-8 PM)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Schedule Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or need support? Our team is here to assist you with your productivity and security needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form id="contact-form" className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors duration-300"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
                {showSuccessMessage && (
                  <div className="text-center text-emerald-600 font-medium">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-4">
                  Reach out directly or connect with us on social media for the latest updates.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 text-emerald-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a href="mailto:support@siemtrix.com" className="text-gray-600 hover:text-emerald-600">
                      support@siemtrix.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 text-emerald-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-emerald-600">
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 text-emerald-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-600">123 Tech Lane, Silicon Valley, CA 94025</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'Twitter', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.6 8.6 0 01-2.72 1.04A4.28 4.28 0 0016.07 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11 1-3.56-.18-6.72-1.88-8.84-4.48a4.27 4.27 0 001.33 5.71 4.24 4.24 0 01-1.94-.54v.05c0 2.07 1.47 3.79 3.42 4.18a4.3 4.3 0 01-1.93.07 4.29 4.29 0 004 2.98A8.6 8.6 0 012 18.07a12.12 12.12 0 006.57 1.93c7.88 0 12.19-6.53 12.19-12.19 0-.19 0-.37-.01-.56A8.7 8.7 0 0022.46 6z', href: 'https://twitter.com' },
                    { name: 'LinkedIn', icon: 'M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.34V8.55h3.42v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.62 0 4.29 2.38 4.29 5.48v6.73zM5.34 7.02a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm1.78 13.43H3.56V8.55h3.56v11.9zM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0z', href: 'https://linkedin.com' },
                    { name: 'GitHub', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z', href: 'https://github.com' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-500 transition-colors duration-300"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <a href="#" className="text-2xl font-bold text-white mb-4 block">
                SiemTrix
              </a>
              <p className="text-sm">
                Transforming your digital activity into actionable insights with advanced productivity and security analytics.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                {['Features', 'How It Works', 'Security', 'Dashboard', 'Pricing'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="hover:text-emerald-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="hover:text-emerald-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                {['Help Center', 'Documentation', 'Community', 'Status'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="hover:text-emerald-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} SiemTrix. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-sm hover:text-emerald-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm hover:text-emerald-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      </main>
          </div>
);
}


export default LandingPage;