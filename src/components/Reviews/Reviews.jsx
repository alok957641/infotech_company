import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "Professional team with excellent quality and on-time delivery.",
    name: "Rahul Sharma",
    position: "Startup Founder",
  },
  {
    text: "Great service and quick support. Very satisfied with the work",
    name: "Rahul Sharma",
    position: "Startup Founder",
  },
  {
    text: "Affordable pricing and reliable service. Highly recommended!",
    name: "Rahul Sharma",
    position: "Startup Founder",
  },
  {
    text: "Expert team with deep knowledge of ServiceNow. Highly reliable!",
    name: "Priya Verma",
    position: "IT Manager",
  },
  {
    text: "Fast, efficient, and professional. Love working with Infocenter!",
    name: "Ankit Singh",
    position: "CEO",
  },
];

export default function Reviews() {
  return (
    <section className="w-full bg-black py-12 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-center text-white mb-10">
        Client Testimonials
      </h2>

      <div className="relative w-full">
        {/* Motion container */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ display: "flex" }}
        >
          {/* Duplicate reviews array for continuous scroll */}
          {reviews.concat(reviews).map((review, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#111827] to-[#1e293b]
                         border border-blue-500/20 rounded-2xl p-6
                         w-[280px] md:w-[320px]
                         hover:scale-105 transition-transform duration-300
                         shadow-lg hover:shadow-blue-600/40 flex-shrink-0"
            >
              <FaQuoteLeft className="text-blue-500 text-xl mb-3" />
              <p className="text-gray-300 text-sm mb-4">{review.text}</p>
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <FaUserCircle className="text-4xl text-gray-400" />
                <div>
                  <h4 className="text-white text-sm font-semibold">{review.name}</h4>
                  <p className="text-gray-400 text-xs">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
