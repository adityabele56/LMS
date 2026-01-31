// Components/Pricing.jsx
import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      description: "Perfect for exploring our platform and learning basics.",
      features: ["Access to 5 Free Courses", "Community Support", "Basic Quizzes", "Mobile Access"],
      buttonText: "Join for Free",
      isPopular: false
    },
    {
      name: "Professional",
      price: "29",
      description: "Our most popular plan for career-focused individuals.",
      features: ["Unlimited Course Access", "Industry Certificates", "1-on-1 Mentorship", "Direct Q&A with Experts", "Priority Support"],
      buttonText: "Get Pro Access",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "99",
      description: "Advanced solutions for teams and organizations.",
      features: ["Everything in Pro", "Bulk Enrollments", "Team Progress Dashboard", "Custom Learning Paths", "Dedicated Account Manager"],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-12 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16 space-y-4">
          <span className="text-[#C5A059] font-bold tracking-[0.4em] uppercase text-xs">Flexible Options</span>
          <h2 className="text-5xl font-serif text-[#1B4D3E]">Invest in Your Future</h2>
          <p className="text-gray-500 max-w-lg mx-auto italic">Choose a plan that fits your learning journey. No hidden fees, cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-10 transition-all duration-500 transform hover:-translate-y-4 rounded-sm ${
                plan.isPopular 
                ? 'bg-[#1B4D3E] text-white shadow-2xl scale-105 z-10' 
                : 'bg-white text-[#1B4D3E] shadow-lg border border-gray-100 hover:border-[#C5A059]'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C5A059] text-[#0A2647] text-[10px] font-bold px-6 py-1 uppercase tracking-[0.2em] rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-serif mb-2 tracking-wide uppercase">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$</span>
                <span className="text-6xl font-serif font-bold tracking-tighter">{plan.price}</span>
                <span className="text-sm opacity-60">/month</span>
              </div>
              
              <p className={`text-sm mb-8 leading-relaxed ${plan.isPopular ? 'text-white/70' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <ul className="text-left space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className={plan.isPopular ? 'text-[#C5A059]' : 'text-[#1B4D3E]'}>✔</span>
                    <span className={plan.isPopular ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 font-bold uppercase text-xs tracking-[0.2em] transition-all duration-300 rounded-sm ${
                  plan.isPopular 
                  ? 'bg-[#C5A059] text-[#0A2647] hover:bg-white' 
                  : 'border-2 border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Shortcut */}
        <p className="mt-16 text-gray-500 text-sm">
          Have questions about the plans? <a href="#" className="text-[#C5A059] border-b border-[#C5A059] font-bold">Visit our FAQ</a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;