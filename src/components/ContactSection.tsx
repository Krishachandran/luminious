import { ArrowRight } from 'lucide-react';

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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-[#adb5bf] rounded-3xl p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-xl text-[#1e293b]">hello@one.com</p>
              <p className="text-xl text-[#1e293b]">+1 7037568571</p>
              <div className="pt-8">
                <p className="text-xl text-[#1e293b]">775 Westminster Avenue</p>
                <p className="text-xl text-[#1e293b]">Brooklyn, NY 11230</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="relative">
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
                {/* Add your decorative SVG or pattern here */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#dadee1] rounded-3xl p-12">
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