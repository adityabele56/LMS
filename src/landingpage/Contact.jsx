import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-[#0f081a] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-violet-400 font-black uppercase tracking-[0.3em] text-sm">Get in Touch</h4>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Let's Start Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Learning Journey</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-md">
                Have questions about our courses or need career guidance? Our team is here to help you 24/7.
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Cards */}
              {[
                { icon: "📍", title: "Visit Us", detail: "123 Education Lane, Tech City, NY" },
                { icon: "📧", title: "Email Us", detail: "support@edujar.com" },
                { icon: "📞", title: "Call Us", detail: "+1 (555) 000-1234" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#1a0b2e] border border-white/5 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-violet-500/50 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg">{item.title}</h5>
                    <p className="text-slate-500 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[#1a0b2e]/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-400 text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400 text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-slate-400 text-xs font-bold uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                  <option className="bg-[#1a0b2e]">General Inquiry</option>
                  <option className="bg-[#1a0b2e]">Course Support</option>
                  <option className="bg-[#1a0b2e]">Business Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-slate-400 text-xs font-bold uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-black rounded-2xl hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(124,58,237,0.3)] active:scale-95 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;