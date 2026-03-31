import { motion } from "framer-motion";

export default function Ready() {
  return (
    <section className="relative w-full h-[60vh] flex flex-col justify-center items-center gap-10 text-white overflow-hidden bg-[#030712]">
      
      {/* --- PRO ANIMATED BACKGROUND ELEMENTS --- */}
      
      {/* Animated Glowing Orb 1 */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Animated Glowing Orb 2 */}
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -150, 0],
          y: [0, -80, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" 
      />

      {/* Subtle Noise Texture overlay from ui.jpg */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-50 mix-blend-overlay pointer-events-none"></div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        
        {/* Eyebrow */}
        <motion.span 
          initial={{ opacity: 0, tracking: "0.2em" }}
          whileInView={{ opacity: 1, tracking: "0.6em" }}
          transition={{ duration: 1 }}
          className="block text-[10px] uppercase font-black text-blue-500 mb-6"
        >
          Take the next step
        </motion.span>

        <motion.h2
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-12 text-white tracking-tighter leading-tight"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ready to Get <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent italic">
            Started Today?
          </span>
        </motion.h2>

        {/* PRO Level CTA Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative group inline-block"
        >
          {/* External Button Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          
          <motion.button
            className="relative flex items-center gap-4 px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-300 active:scale-95"
            whileHover={{ y: -5 }}
          >
            <span className="relative z-10">Speak with an Expert</span>
            
            {/* Animated Arrow */}
            <motion.span 
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-lg"
            >
              →
            </motion.span>

            {/* Inner hover slide effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute inset-0 group-hover:bg-white/10" />
            
            {/* Hover text color change would need extra span, but keeping it black is cleaner for premium look */}
            <span className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-500"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Speak with an Expert →</span>
          </motion.button>
        </motion.div>

        {/* Sub-note */}
        <p className="mt-10 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
          No commitment required • Free consultation
        </p>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
    </section>
  );
}