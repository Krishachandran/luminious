import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative -mt-[80px] overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#f5f3ff]">
          {/* Animated Background Image */}
          <motion.div 
            className="absolute inset-0 w-full h-full origin-center"
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.05, 1.02, 1.07, 1],
              rotate: [0, 1, -1, 2, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1]
            }}
          >
            <motion.img 
              src="/creative-shape.png" 
              alt="Background Shape" 
              className="w-full h-full object-cover opacity-50 scale-110"
              animate={{
                filter: [
                  "hue-rotate(0deg) brightness(1)",
                  "hue-rotate(45deg) brightness(1.1)",
                  "hue-rotate(90deg) brightness(1.2)",
                  "hue-rotate(180deg) brightness(1.1)",
                  "hue-rotate(0deg) brightness(1)"
                ],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Gradient Overlay with Animation */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-[#f5f3ff]/60"
              animate={{
                opacity: [0.6, 0.7, 0.8, 0.7, 0.6],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-[95px] pb-12">
          <div className="container mx-auto px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8 max-w-2xl">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-[64px] leading-[1.2] font-medium text-[#1e293b] tracking-tight"
                >
                  BRING ALL YOUR<br />
                  IDEAS TO LIFE WITH OUR<br />
                  CREATIVE MAGIC
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-[#64748b] text-lg leading-relaxed max-w-xl"
                >
                  Our creative team gets to work, crafting a custom design that's not only beautiful but functional. We develop your landing page using the latest technologies and best practices.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <button className="group flex items-center gap-2 bg-[#1e293b] text-white px-6 py-3 rounded-full hover:bg-[#334155] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(99,102,241,0.2)] hover:-translate-y-1">
                    <span className="font-medium text-base relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                      Get started
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transform transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-1">
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Small floating bubbles */}
                <motion.div 
                  className="absolute top-10 left-10 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-60"
                  animate={{
                    y: [-10, 10, -10],
                    x: [-5, 5, -5],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute top-20 right-20 w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-60"
                  animate={{
                    y: [10, -10, 10],
                    x: [5, -5, 5],
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Main Creative Shape */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.img 
                    src="/creative-shape.png" 
                    alt="Creative Shape" 
                    className="w-full relative z-10"
                    animate={{
                      filter: [
                        "hue-rotate(0deg) brightness(1)",
                        "hue-rotate(45deg) brightness(1.1)",
                        "hue-rotate(0deg) brightness(1)",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Additional floating elements */}
                <motion.div 
                  className="absolute bottom-10 left-1/4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-green-400 opacity-50"
                  animate={{
                    y: [0, -15, 0],
                    x: [-5, 5, -5],
                    scale: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute top-1/3 right-10 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-60"
                  animate={{
                    y: [-5, 5, -5],
                    x: [0, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-[#f5f3ff] to-[#eff6ff]">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Left Side */}
            <div className="space-y-6 lg:pl-4">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-[#1e293b]">About Us</h3>
                <p className="text-[#64748b] leading-relaxed text-lg max-w-xl">
                  An agency is an organization or entity that provides a specific service on behalf of another party. In many cases, agencies act as intermediaries.
                </p>
                <div className="inline-flex items-center">
                  <button className="group flex items-center gap-2 text-[#1e293b] bg-white border border-[#e2e8f0] px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:scale-105">
                    <span className="font-medium">Learn More</span>
                    <div className="w-10 h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center group-hover:bg-[#1e293b] group-hover:border-[#1e293b] transition-colors">
                      <ArrowRight className="w-5 h-5 rotate-45 group-hover:text-white transition-colors" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-white rounded-[2rem] p-8 mt-12 relative overflow-hidden lg:mr-6">
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-4 py-1 rounded-full bg-white border border-[#e2e8f0] text-sm text-[#64748b]">Our Service</span>
                  <span className="px-4 py-1 rounded-full bg-white border border-[#e2e8f0] text-sm text-[#64748b]">2024</span>
                </div>
                <div className="w-16 h-16 bg-[#1e293b] rounded-full flex items-center justify-center mb-6">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-6xl font-medium text-[#1e293b] mb-2">720<span className="text-4xl">+</span></h2>
                <h3 className="text-2xl text-[#1e293b] mb-4">projects launched</h3>
                <p className="text-[#64748b] mb-6">
                  We work in detail for every project, trust me.
                </p>
                <button className="text-[#1e293b] border border-[#e2e8f0] px-6 py-3 rounded-full hover:bg-[#1e293b] hover:text-white transition-colors">
                  Get Started Now
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6 lg:pr-4">
              <h2 className="text-5xl font-medium text-[#1e293b] flex items-center gap-2">
                Transforming ideas into visually stunning realities
                <img src="/sphere.svg" alt="" className="w-8 h-8" />
              </h2>

              <div className="space-y-4">
                {/* Web Design Card */}
                <div className="bg-[#f8f9fc] p-6 rounded-2xl group hover:bg-white hover:shadow-lg hover:border-[#1e293b] border border-transparent transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#1e293b] font-medium px-4 py-1 rounded-full group-hover:bg-[#f8f9fc] transition-all duration-300">Web Design</span>
                      <span className="w-5 h-5 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-xs">○</span>
                    </div>
                  </div>
                  <p className="text-[#64748b]">
                    We don't believe in one-size-fits-all solutions. Our design process starts with understanding your brand's unique identity, goals, and target audience. We then create a custom design
                  </p>
                </div>

                {/* Graphic Design Card */}
                <div className="bg-[#f8f9fc] p-6 rounded-2xl group hover:bg-white hover:shadow-lg hover:border-[#1e293b] border border-transparent transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#1e293b] font-medium px-4 py-1 rounded-full group-hover:bg-[#f8f9fc] transition-all duration-300">Graphic Design</span>
                      <span className="w-5 h-5 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-xs">○</span>
                    </div>
                  </div>
                  <p className="text-[#64748b]">
                    In a world where mobile devices dominate, having a well-designed app is essential for engaging customers and growing your business.
                  </p>
                </div>

                {/* Motion Graphic Card */}
                <div className="bg-[#f8f9fc] p-6 rounded-2xl group hover:bg-white hover:shadow-lg hover:border-[#1e293b] border border-transparent transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#1e293b] font-medium px-4 py-1 rounded-full group-hover:bg-[#f8f9fc] transition-all duration-300">Motion Graphic</span>
                      <span className="w-5 h-5 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-xs">○</span>
                    </div>
                  </div>
                  <p className="text-[#64748b]">
                    Whether you're looking to enhance your marketing videos, create stunning visual content for social media, or develop compelling animations for your website.
                  </p>
                </div>

                {/* Illustration Card */}
                <div className="bg-[#f8f9fc] p-6 rounded-2xl group hover:bg-white hover:shadow-lg hover:border-[#1e293b] border border-transparent transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#1e293b] font-medium px-4 py-1 rounded-full group-hover:bg-[#f8f9fc] transition-all duration-300">Illustration</span>
                      <span className="w-5 h-5 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center text-xs">○</span>
                    </div>
                  </div>
                  <p className="text-[#64748b]">
                    We specialize in crafting unique, eye-catching illustrations that elevate your brand and engage your audience. Whether you need custom artwork for your marketing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-b from-[#eff6ff] to-[#f5f3ff]">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="space-y-4 mb-16">
            <p className="text-xl text-[#1e293b]">See Our Portfolio Reels</p>
            <div className="flex justify-between items-center">
              <h2 className="text-5xl font-medium text-[#1e293b] flex items-center gap-2">
                Awesome <div className="inline-flex items-center gap-2"><img src="/sphere.svg" alt="" className="w-8 h-8" /> works</div>
              </h2>
              <button className="group flex items-center gap-2 text-[#1e293b] border border-[#e2e8f0] px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                <span className="font-medium">Learn More</span>
                <div className="w-10 h-10 rounded-full border border-[#e2e8f0] flex items-center justify-center group-hover:bg-[#1e293b] group-hover:border-[#1e293b] transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sri Guru Parampara",
                category: "UI/UX Website Design",
                image: "/portfolio/guruparampara.jpg"
              },
              {
                title: "Growthy",
                category: "UI/UX Mobile App Design",
                image: "/portfolio/growthy.jpg"
              },
              {
                title: "Alphaee",
                category: "E-reading Design",
                image: "/portfolio/alphaee.jpg"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-4 rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-[#1e293b] mb-1">{project.title}</h3>
                    <p className="text-[#64748b] text-sm">{project.category}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-[#f5f3ff] to-[#eff6ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#1e293b] mb-4">See from our client</p>
            <h2 className="text-6xl font-medium text-[#1e293b] flex items-center justify-center gap-2">
              What Our <div className="inline-flex items-center gap-2">Client Says <img src="/sphere.svg" alt="" className="w-8 h-8" /></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Working with vantage was not just a service, it was a collaborative and enjoyable journey. Team's dedication to understanding our goals and delivering beyond.",
                author: "Betely Agency",
                role: "Branding Design UI/UX Design"
              },
              {
                quote: "He creativity and professionalism of this team are unmatched. From start to finish, they provided outstanding support and delivered results that made a real impact.",
                author: "Sarah Thampaer",
                role: "Branding Design UI/UX Design"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f8f9fc] p-12 rounded-2xl"
              >
                <p className="text-[#1e293b] text-xl leading-relaxed mb-12">{testimonial.quote}</p>
                <div>
                  <h4 className="text-[#6366f1] text-xl font-medium mb-1">{testimonial.author}</h4>
                  <p className="text-[#64748b] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-4 mt-8 max-w-5xl mx-auto">
            <button className="w-12 h-12 rounded-full border border-[#e2e8f0] flex items-center justify-center hover:bg-white transition-colors">
              <ArrowRight className="w-5 h-5 text-[#64748b] rotate-180" />
            </button>
            <button className="w-12 h-12 rounded-full border border-[#e2e8f0] flex items-center justify-center hover:bg-white transition-colors">
              <ArrowRight className="w-5 h-5 text-[#64748b]" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#eff6ff] to-[#f5f3ff]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-[#1e293b] mb-8 flex items-center justify-center gap-2">
            CREATE NEW INNOVATION <span className="inline-flex items-center">TOGETHER <img src="/sphere.svg" alt="" className="w-8 h-8 ml-2" /></span>
          </h2>
          <button className="primary-button">
            Contact Us <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
} 