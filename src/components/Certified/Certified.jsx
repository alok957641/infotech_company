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

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center">

        {/* Slider */}
        <div className="order-1 w-full lg:w-1/2 flex justify-center">
          <div className="relative w-[280px] h-[280px] rounded-2xl overflow-hidden shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full h-full">
                  <img
                    src={slide}
                    alt={`slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-500/30 hover:bg-pink-500/60 text-white p-2 rounded-full transition"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500/30 hover:bg-pink-500/60 text-white p-2 rounded-full transition"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-4 bg-pink-500" : "w-2 bg-pink-500/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-2 w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            ServiceNow Certified Industry & Domain Experts
          </h2>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
            Infocenter is recognized for its deep industry expertise across Healthcare, Financial Services, Manufacturing, Retail, and Telecom/Technology/Business Services. We hold extensive certifications across the ServiceNow Platform including IT, Asset, HRSD, Customer, ITOM, App, and Industry Solutions (FSO, Retail, HCLS etc.).
          </p>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
            Our Industry Vertical and ServiceNow National Practice Leads are ready to help you drive transformation within your organization.
          </p>
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
            Learn more about our certifications and expertise by visiting our 
            <a href="" className="text-pink-500 font-semibold ml-1">ServiceNow Partner Page</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
