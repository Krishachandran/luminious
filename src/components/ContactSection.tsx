import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
    <section className="py-24 bg-[#f8f9fc]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#E4A853] font-medium mb-4">CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b]">
            A great step for your<br />marketing
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="relative grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Circular Arrow */}
          <motion.div 
            className="hidden md:block absolute left-[calc(50%-2.5rem)] top-[calc(50%-2.5rem)] z-20"
            initial={{ rotate: -45, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              scale: { delay: 0.2 }
            }}
            style={{
              transform: 'translate(25%, -50%)'  // Move circle right and up
            }}
          >
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center shadow-xl">
              <ArrowRight className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="bg-[#adb5bf] rounded-[2rem] p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <p className="text-xl text-[#1e293b]">info@luminious.net</p>
              <p className="text-xl text-[#1e293b]">+91 9845085807</p>
              <div className="pt-8">
                <p className="text-xl text-[#1e293b]">Jyothi Nagar, 2nd Mile</p>
                <p className="text-xl text-[#1e293b]">Kottayam, Kerala 686522</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top right circles */}
              <svg className="absolute top-0 right-0 w-48 h-48 text-white/20" viewBox="0 0 100 100">
                <circle cx="80" cy="20" r="6" fill="currentColor" />
                <circle cx="60" cy="40" r="6" fill="currentColor" />
                <circle cx="90" cy="40" r="6" fill="currentColor" />
                <circle cx="70" cy="30" r="4" fill="currentColor" />
                <circle cx="85" cy="30" r="3" fill="currentColor" />
                <circle cx="75" cy="45" r="4" fill="currentColor" />
              </svg>

              {/* Bottom left circles */}
              <svg className="absolute bottom-0 left-0 w-64 h-64 text-white/20" viewBox="0 0 100 100">
                <circle cx="20" cy="60" r="4" fill="currentColor" />
                <circle cx="40" cy="80" r="4" fill="currentColor" />
                <circle cx="20" cy="80" r="4" fill="currentColor" />
                <circle cx="40" cy="60" r="4" fill="currentColor" />
                <circle cx="60" cy="80" r="4" fill="currentColor" />
                <circle cx="30" cy="70" r="4" fill="currentColor" />
                <circle cx="50" cy="70" r="4" fill="currentColor" />
                <circle cx="10" cy="70" r="4" fill="currentColor" />
                <circle cx="25" cy="65" r="3" fill="currentColor" />
                <circle cx="45" cy="75" r="3" fill="currentColor" />
                <circle cx="15" cy="85" r="3" fill="currentColor" />
              </svg>

              {/* Center circles */}
              <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-white/10" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="3" fill="currentColor" />
                <circle cx="65" cy="50" r="3" fill="currentColor" />
                <circle cx="35" cy="50" r="3" fill="currentColor" />
                <circle cx="50" cy="35" r="3" fill="currentColor" />
                <circle cx="50" cy="65" r="3" fill="currentColor" />
              </svg>

              {/* Top left small circles */}
              <svg className="absolute top-0 left-0 w-32 h-32 text-white/15" viewBox="0 0 100 100">
                <circle cx="20" cy="20" r="3" fill="currentColor" />
                <circle cx="35" cy="20" r="3" fill="currentColor" />
                <circle cx="20" cy="35" r="3" fill="currentColor" />
              </svg>

              {/* Bottom right small circles */}
              <svg className="absolute bottom-0 right-0 w-40 h-40 text-white/15" viewBox="0 0 100 100">
                <circle cx="70" cy="70" r="4" fill="currentColor" />
                <circle cx="85" cy="70" r="3" fill="currentColor" />
                <circle cx="70" cy="85" r="3" fill="currentColor" />
                <circle cx="80" cy="80" r="2" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#dadee1] rounded-[2rem] p-12 relative">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-full bg-[#e5e7e8] border border-white/50 focus:ring-2 focus:ring-[#6366f1] text-[#1e293b] placeholder-[#b4b7ba]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-6 py-4 rounded-full bg-[#e5e7e8] border border-white/50 focus:ring-2 focus:ring-[#6366f1] text-[#1e293b] placeholder-[#b4b7ba]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white rounded-full py-4 px-6 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
              >
                Send <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}; 