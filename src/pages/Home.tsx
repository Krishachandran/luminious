import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Users, Zap, ArrowRight, Leaf, Headphones, Calendar, CreditCard } from 'lucide-react';
import { ParticlesBackground } from '../components/ParticlesBackground';
import { ContactSection } from '../components/ContactSection';

export const Home = () => {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = {
    projects: 200,
    clients: 50,
    experience: 10,
    satisfaction: 98,
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-section">
          <ParticlesBackground />
          <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-5xl font-bold leading-tight">
                  Units Operate From Virtual Devices
                </h1>
                <div className="flex flex-wrap gap-3">
                  <span className="feature-tag feature-tag-blue">Opensea</span>
                  <span className="feature-tag feature-tag-purple">Foundation</span>
                  <span className="feature-tag feature-tag-pink">AndroidVR</span>
                  <span className="feature-tag feature-tag-orange">Showtime</span>
                </div>
                <p className="text-[#64748b] text-lg">
                  All units operate from virtual android or even real devices that are indistinguishable from a real human device.
                </p>
                <div className="flex gap-4">
                  <button className="primary-button">
                    Add New Task <ArrowRight size={20} />
                  </button>
                  <button className="secondary-button">
                    Learn More
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-card">
                  <div className="space-y-4">
                    <div className="task-card">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[#64748b]">48,997 Likes</span>
                        <span className="text-sm text-[#64748b]">Dec 13, 2024</span>
                      </div>
                    </div>
                    <div className="task-card">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[#64748b]">2,598 Comments</span>
                        <span className="text-sm text-[#64748b]">Dec 14, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-[#6366f1]/10 blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#60a5fa]/10 blur-xl"></div>
              </motion.div>
            </div>
          </div>
          
          {/* Add subtle wave divider */}
          <div className="wave-divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="feature-section">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#1e293b]">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Automated Posting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="feature-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-[#1e293b]">Automated Posting</span>
                  <span className="text-sm text-[#64748b]">Active</span>
                </div>
                <p className="text-[#64748b] text-base">
                  Set up your preferences and let AI handle your social media presence
                </p>
                <div className="mt-4 flex justify-end">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </div>
              </motion.div>

              {/* Smart Engagement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="feature-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-[#1e293b]">Smart Engagement</span>
                  <span className="text-sm text-[#64748b]">Processing</span>
                </div>
                <p className="text-[#64748b] text-base">
                  AI-powered interactions that feel natural and engaging
                </p>
                <div className="mt-4 flex justify-end">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-blue-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Analytics Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="feature-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-[#1e293b]">Analytics Dashboard</span>
                  <span className="text-sm text-[#64748b]">Real-time</span>
                </div>
                <p className="text-[#64748b] text-base">
                  Track performance and optimize your social media strategy
                </p>
                <div className="mt-4 flex justify-end">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-purple-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="service-section pb-[250px]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#1e293b]">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Code2 className="w-8 h-8" />,
                  title: 'Web Development',
                  description: 'Custom web applications built with cutting-edge technologies',
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: 'Digital Strategy',
                  description: 'Strategic planning for digital transformation',
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'UX/UI Design',
                  description: 'User-centered design that drives engagement',
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: 'Performance',
                  description: 'Optimization for speed and scalability',
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="service-card"
                >
                  <div className="icon-container">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          ref={statsRef}
          className="py-20 bg-gradient-to-r from-[#2e3136] to-[#17191c]"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: stats.projects, label: 'Projects Completed' },
                { value: stats.clients, label: 'Happy Clients' },
                { value: stats.experience, label: 'Years Experience' },
                { value: stats.satisfaction, label: '% Client Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { 
                    opacity: 1,
                    y: 0
                  } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 
                  }}
                  className="text-white"
                >
                  <motion.div 
                    className="text-4xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    animate={statsInView ? { 
                      scale: [0, 1.2, 1],
                    } : {}}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.2 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={statsInView ? {
                        opacity: 1
                      } : {}}
                      transition={{ 
                        duration: 0.3,
                        delay: 0.5 + index * 0.1
                      }}
                    >
                      {stat.value}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={statsInView ? {
                        opacity: 1,
                        x: 0
                      } : {}}
                      transition={{ 
                        duration: 0.3,
                        delay: 0.6 + index * 0.1
                      }}
                    >
                      +
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    className="text-sm opacity-80"
                    initial={{ opacity: 0, y: 10 }}
                    animate={statsInView ? {
                      opacity: 0.8,
                      y: 0
                    } : {}}
                    transition={{ 
                      duration: 0.3,
                      delay: 0.4 + index * 0.1
                    }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-[#f8f9fc]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
              <div className="relative">
                <img
                  src="/benefits-image.jpg"
                  alt="Team planning and designing"
                  className="rounded-2xl w-full object-cover"
                />
              </div>

              {/* Right side - Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-[#E4A853] font-medium mb-4">Advantage</p>
                  <h2 className="text-4xl font-bold text-[#1e293b]">
                    Various Benefits That<br />You Will Get
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Benefit 1 */}
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#1e293b] rounded-xl flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1e293b]">
                      Design is unique because we always explore
                    </h3>
                  </div>

                  {/* Benefit 2 */}
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#1e293b] rounded-xl flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1e293b]">
                      Provide good and flexible communication
                    </h3>
                  </div>

                  {/* Benefit 3 */}
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#1e293b] rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1e293b]">
                      The project completion time is as agreed
                    </h3>
                  </div>

                  {/* Benefit 4 */}
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#1e293b] rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1e293b]">
                      Trusted payment systems & methods
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ContactSection />
    </>
  );
};

const features = [
  {
    title: "Automated Posting",
    description: "Set up your preferences and let AI handle your social media presence"
  },
  {
    title: "Smart Engagement",
    description: "AI-powered interactions that feel natural and engaging"
  },
  {
    title: "Analytics Dashboard",
    description: "Track performance and optimize your social media strategy"
  }
];