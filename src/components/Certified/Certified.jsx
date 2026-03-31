import React, { useState, useEffect } from "react";
import slider1 from "../../assets/slider1.webp";
import slider2 from "../../assets/slider2.webp";
import slider3 from "../../assets/slider3.webp";
import slider4 from "../../assets/slider4.webp";

export default function Certified() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [slider1, slider2, slider3, slider4];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full bg-[#030712] py-32 overflow-hidden">
      
      {/* --- BG DECORATION --- */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20 items-center relative z-10">

        {/* SLIDER - PRO GLASS DESIGN */}
        <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
          <div className="relative group">
            
            {/* Outer Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#1e293b]/50 backdrop-blur-xl shadow-2xl">
              
              {/* Image Track */}
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full h-full p-4">
                    <img
                      src={slide}
                      alt={`Certification ${index + 1}`}
                      className="w-full h-full object-contain rounded-xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Controls - Hidden by default, show on hover */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-blue-600 transition-all"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-blue-600 transition-all"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              {/* Status Dots - Modern Bar Style */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      currentIndex === i ? "w-8 bg-blue-500" : "w-3 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Floating Element */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-600/20 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center animate-bounce duration-[4000ms]">
                <span className="text-2xl">🏆</span>
            </div>
          </div>
        </div>

        {/* TEXT CONTENT - PRO TYPOGRAPHY */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-500">
              Our Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tighter">
              ServiceNow <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certified</span> Industry Experts
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed font-medium">
              NowInfoTech is recognized for its deep industry expertise across <span className="text-white">Healthcare, Financial Services, Manufacturing, Retail,</span> and Telecom. We hold extensive certifications across the ServiceNow Platform.
            </p>
            
            <div className="p-6 rounded-2xl bg-white/[0.02] border-l-4 border-blue-600 backdrop-blur-sm">
               <p className="text-gray-300 text-sm italic leading-relaxed">
                "Our Industry Vertical leads are ready to help you drive transformation within your organization with confidence."
              </p>
            </div>

            <p className="text-gray-400 text-base lg:text-lg leading-relaxed font-medium">
              Learn more about our certifications and expertise by visiting our 
              <a href="" className="relative inline-block ml-2 text-white font-bold group">
                ServiceNow Partner Page
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}