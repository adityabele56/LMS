// src/components/AuthPage.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#F9F7F2] flex items-center justify-center p-4 md:p-10 font-sans selection:bg-[#C5A059] selection:text-white">
      {/* Main Container */}
      <div className="relative w-full max-w-5xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden flex min-h-[650px]">
        
        {/* 1. Left Side: Form Section */}
        <div className={`w-full md:w-1/2 p-8 md:p-16 transition-all duration-700 ease-in-out flex flex-col justify-center ${isLogin ? 'md:translate-x-0' : 'md:translate-x-full'}`}>
          
          {/* Welcome Header Area */}
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="relative mb-4 group">
              <div className="absolute inset-0 bg-[#C5A059] rounded-full blur-lg opacity-20 animate-pulse"></div>
              <div className="relative w-16 h-16 bg-[#0A2647] rounded-full flex items-center justify-center text-[#C5A059] text-2xl font-serif font-bold border border-[#C5A059]/30 transition-transform duration-1000 group-hover:rotate-[360deg]">
                E
              </div>
            </div>
            <h1 className="text-3xl font-serif text-[#0A2647] font-bold">
              Welcome to <span className="text-[#C5A059] italic">Eduvion</span>
            </h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-2 font-semibold">
              {isLogin ? "Your Gateway to Excellence" : "Start Your Mastery Journey"}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <input type="text" placeholder="Full Name" className="w-full px-5 py-4 bg-[#F9F7F2] border-l-2 border-transparent focus:border-[#C5A059] outline-none transition-all text-sm" />
            )}
            <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-[#F9F7F2] border-l-2 border-transparent focus:border-[#C5A059] outline-none transition-all text-sm" />
            <input type="password" placeholder="Password" className="w-full px-5 py-4 bg-[#F9F7F2] border-l-2 border-transparent focus:border-[#C5A059] outline-none transition-all text-sm" />
            
            <button className="w-full bg-[#1B4D3E] text-white py-4 mt-2 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#0A2647] shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-8">
            <div className="relative flex py-2 items-center mb-6">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-4 text-gray-300 text-[9px] uppercase tracking-widest font-bold">Or continue with</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>
            
            <div className="flex justify-center gap-4">
              {['Google', 'Facebook', 'Twitter'].map((social) => (
                <button key={social} className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#C5A059] hover:text-[#C5A059] transition-all group">
                  <span className="text-xs font-bold">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Right Side: Sliding Overlay (Desktop Only) */}
        <div className={`hidden md:flex absolute top-0 w-1/2 h-full bg-[#0A2647] transition-all duration-700 ease-in-out z-20 items-center justify-center text-center p-12 overflow-hidden ${isLogin ? 'left-1/2' : 'left-0'}`}>
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-20 translate-y-20"></div>
          
          <div className="relative z-10 text-white space-y-6">
            <h2 className="text-4xl font-serif italic text-[#C5A059]">
              {isLogin ? "New Student?" : "Already Learning?"}
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
              {isLogin 
                ? "Sign up and discover a world of premium industry-led courses." 
                : "To keep connected with your progress, please login with your personal info."}
            </p>
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="mt-6 border border-[#C5A059] text-[#C5A059] px-12 py-3 rounded-full hover:bg-[#C5A059] hover:text-[#0A2647] transition-all font-bold uppercase text-[10px] tracking-widest shadow-xl"
            >
              {isLogin ? 'Register Now' : 'Sign In'}
            </button>
            <NavLink to={"/landing"} ><p className="text-[white] hover:text-[#C5A059] font-bold text-sm transition-colors">go to home page</p></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;