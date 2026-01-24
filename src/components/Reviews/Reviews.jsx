import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";

import clentimg from "../../assets/client.avif";

export default function Reviews() {
  return (
    <section className="w-full bg-black py-5 ">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-center text-white">
        Client Testimonials
      </h2>
      <div className="w-full max-w-8xl flex flex-col lg:flex-row justify-center items-center px-3 md:px-0 p-8 gap-9 ">
        <div
          className="
      bg-gradient-to-br from-[#111827] to-[#1e293b]
      border border-blue-500/20 rounded-2xl p-6 md:w-[320px] w-[280px]
      hover:scale-105 transition-all duration-300
      shadow-lg hover:shadow-blue-600/40"
        >
          <FaQuoteLeft className="text-blue-500 text-xl mb-3" />

          <p className="text-gray-300 text-sm mb-4">
            Professional team with excellent quality and on-time delivery.
          </p>

          <div className="flex gap-1 text-yellow-400 mb-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <div className="flex items-center gap-3">
            <FaUserCircle className="text-4xl text-gray-400" />
            <div>
              <h4 className="text-white text-sm font-semibold">Rahul Sharma</h4>
              <p className="text-gray-400 text-xs">Startup Founder</p>
            </div>
          </div>
        </div>

        <div
          className="
      bg-gradient-to-br from-[#111827] to-[#1e293b]
      border border-blue-500/20 rounded-2xl p-6 md:w-[320px] w-[280px]
      hover:scale-105 transition-all duration-300
      shadow-lg hover:shadow-blue-600/40"
        >
          <FaQuoteLeft className="text-blue-500 text-xl mb-3" />

          <p className="text-gray-300 text-sm mb-4">
            Great service and quick support. Very satisfied with the work
          </p>

          <div className="flex gap-1 text-yellow-400 mb-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <div className="flex items-center gap-3">
            <FaUserCircle className="text-4xl text-gray-400" />
            <div>
              <h4 className="text-white text-sm font-semibold">Rahul Sharma</h4>
              <p className="text-gray-400 text-xs">Startup Founder</p>
            </div>
          </div>
        </div>

        <div
          className="
      bg-gradient-to-br from-[#111827] to-[#1e293b]
      border border-blue-500/20 rounded-2xl p-6 md:w-[320px] w-[280px]
      hover:scale-105 transition-all duration-300
      shadow-lg hover:shadow-blue-600/40"
        >
          <FaQuoteLeft className="text-blue-500 text-xl mb-3" />

          <p className="text-gray-300 text-sm mb-4">
            Affordable pricing and reliable service. Highly recommended!
          </p>

          <div className="flex gap-1 text-yellow-400 mb-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <div className="flex items-center gap-3">
            <FaUserCircle className="text-4xl text-gray-400" />
            <div>
              <h4 className="text-white text-sm font-semibold">Rahul Sharma</h4>
              <p className="text-gray-400 text-xs">Startup Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
