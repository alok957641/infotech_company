import { motion } from "framer-motion";


export default function Ready() {
  return (
    <section className="relative w-full h-[50vh]  flex flex-col justify-center items-center gap-10 text-white overflow-hidden bg-black ">
      
      {/* Animated Ball Background */}
      

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-8 text-white drop-shadow-[0_0_15px_rgba(255,0,70,0.6)]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Get Started?
        </motion.h2>

        <motion.button
          className="relative inline-block text-lg font-semibold px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-pink-500 hover:from-pink-500 hover:to-red-600 text-white shadow-lg hover:shadow-[0_0_25px_rgba(255,0,70,0.5)] transition-all"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          Speak with an Expert
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-red-600 opacity-20 blur-xl"></span>
        </motion.button>
      </div>
    </section>
  );
}
