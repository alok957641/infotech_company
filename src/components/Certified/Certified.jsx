import React, { useState, useEffect } from "react";
import slider1 from "../../assets/slider1.webp";
import slider2 from "../../assets/slider2.webp";
import slider3 from "../../assets/slider3.webp";
import slider4 from "../../assets/slider4.webp";

export default function Certified() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Is array mein tu apni images ke links daal sakta hai
  const slides = [
    {
      id: 1,
      content: (
        <img
          src={slider1}
          className="w-full h-full object-cover"
          alt="slide 1"
        />
      ),
    },

    {
      id: 2,
      content: (
        <img
          src={slider2}
          className="w-full h-full object-cover"
          alt="slide 2"
        />
      ),
    },

    {
      id: 3,
      content: (
        <img
          src={slider3}
          className="w-full h-full object-cover"
          alt="slide 1"
        />
      ),
    },

    {
      id: 4,
      content: (
        <img
          src={slider4}
          className="w-full h-full object-cover"
          alt="slide 2"
        />
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play (har 3 second mein slide change hogi)
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-8xl flex lg:flex-row flex-col  items-center gap-12 p-5 py-7 ">
        {/* slider */}
        <div className="order-1 p-4">
          {/* Container - Yahan se size control hota hai */}
          <div className="relative w-[280px] h-[280px] bg-white rounded-2xl overflow-hidden shadow-2xl group ">
            {/* Slides Wrapper */}
            <div
              className="flex transition-transform duration-500 ease-out h-full "
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full h-full">
                  {slide.content}
                </div>
              ))}
            </div>

            {/* Left Arrow Button */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* Dots (Pagination) */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? "w-4 bg-white" : "w-1.5 bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* text box  */}
        <div className="order-2 flex  flex-col gap-5  ">
          <h2 className="text-1xl sm:text-2xl lg:text-4xl font-bold font-serif px-4 text-stone-700">
            ServiceNow Certified Industry and Domain Experts
          </h2>
          <p className="max-w-3xl   text-sm sm:text-base lg:text-lg  leading-relaxed pl-3 ">
            Infocenter is recognized for its deep industry expertise across
            Healthcare & Life Sciences, Financial Services, Manufacturing,
            Retail, and Telecom/Technology/Business Services. We also hold
            extensive certifications across the ServiceNow Platform, including
            IT, Asset, HRSD, Customer, ITOM, App, and Industry Solutions (FSO,
            Retail, HCLS etc.).
          </p>

          <p className="max-w-3xl   text-sm sm:text-base lg:text-lg  leading-relaxed pl-3">
            Our Industry Vertical and ServiceNow National Practice Leads are
            ready to help you drive transformation within your organization.
          </p>

          <p className="max-w-3xl   text-sm sm:text-base lg:text-lg  leading-relaxed pl-3">
            Learn more about our certifications and expertise by visiting our
            <a href="" className="text-blue-700 font-bold "> ServiceNow Partner Page.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
