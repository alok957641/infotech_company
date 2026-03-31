import { FaStar, FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "Professional team with excellent quality and on-time delivery. Their ServiceNow approach is unmatched.",
    name: "Rahul Sharma",
    position: "Startup Founder",
  },
  {
    text: "Great service and quick support. Very satisfied with the work and the strategic roadmapping provided.",
    name: "Rahul Sharma",
    position: "Startup Founder",
  },
  {
    text: "Affordable pricing and reliable service. Highly recommended for any enterprise scaling their IT ops!",
    name: "Rahul Sharma",
    position: "Startup Founder",
  },
  {
    text: "Expert team with deep knowledge of ServiceNow. Highly reliable and consistent in their delivery.",
    name: "Priya Verma",
    position: "IT Manager",
  },
  {
    text: "Fast, efficient, and professional. Love working with NowInfoTech for our digital transformation!",
    name: "Ankit Singh",
    position: "CEO",
  },
];

export default function Reviews() {
  return (
    <section className="relative w-full bg-[#030712] py-24 overflow-hidden">
      
      {/* --- PREMIUM BG DECORATION --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header - Pro Minimalist */}
      <div className="text-center mb-20 relative z-10">
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-500 mb-4 inline-block">
          Trusted by Leaders
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter">
          Client <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Testimonials</span>
        </h2>
        <div className="mx-auto mt-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>

      {/* Infinity Slider Container */}
      <div className="relative w-full flex overflow-hidden mask-fade-edges">
        <motion.div
          className="flex gap-8 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, // Smooth, slow professional speed
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {/* Duplicate for infinite scroll */}
          {reviews.concat(reviews).map((review, i) => (
            <div
              key={i}
              className="relative group bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-[2rem] p-8
                         w-[320px] md:w-[380px] flex-shrink-0 transition-all duration-500 
                         hover:bg-white/[0.04] hover:border-blue-500/30 shadow-2xl"
            >
              {/* Quote Icon with Glow */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#0B0F1A] border border-white/10 rounded-full flex items-center justify-center shadow-lg">
                <FaQuoteLeft className="text-blue-500 text-xs" />
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-8 font-medium">
                "{review.text}"
              </p>

              {/* Stars - Clean Glow */}
              <div className="flex gap-1 text-blue-400 mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-xs" />
                ))}
              </div>

              {/* User Info - Glass Card Inside */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full" />
                  <FaUserCircle className="text-4xl text-gray-400 relative z-10" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-black tracking-tight">{review.name}</h4>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Global CSS for faded edges effect (Optional but PRO) */}
      <style jsx>{`
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}