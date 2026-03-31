export default function Home() {
  return (
    <section
      id="Home"
      className="relative w-full min-h-screen bg-[#030712] flex items-center justify-center overflow-hidden"
    >
      {/* --- PREMIUM BACKGROUND ELEMENTS (ui.jpg Vibe) --- */}
      
      {/* Top Left Glow */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      
      {/* Center Dynamic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[160px]" />
      
      {/* Bottom Right Neon Glow */}
      <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-pink-600/15 rounded-full blur-[140px]" />

      {/* Subtle Grid Pattern for Tech Feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 mix-blend-overlay"></div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-20 w-full pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          
          {/* Eyebrow - Glass Badge Style */}
          <div className="mb-8 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-inner">
            <p className="uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Smart IT • Digital Growth • Reliable Support
            </p>
          </div>

          {/* Heading - Cinematic Typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-white">
            Grow Your Business <br />
            <span className="relative inline-block mt-2">
               {/* Underline glow effect */}
              <span className="absolute -inset-x-2 bottom-2 h-4 bg-blue-500/20 blur-xl"></span>
              <span className="bg-gradient-to-b from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                with Smart IT Solutions
              </span>
            </span>
          </h1>

          {/* Subtext - Clean & Elegant */}
          <p className="mt-10 text-base sm:text-lg md:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto font-medium tracking-tight">
            We design and build high-quality websites, scalable software, and
            digital solutions that help businesses grow <span className="text-white italic">faster, smarter,</span> and
            more efficiently.
          </p>

          {/* CTA Buttons - ui.jpg Pro Style */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Primary Button */}
            <button className="group relative px-12 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.15)]">
              <span className="relative z-10">Get Started Today</span>
              {/* Button Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="absolute inset-0 group-hover:bg-white/20 transition-all"></span>
            </button>

            {/* Secondary Link */}
            <a
              href="#services"
              className="group flex items-center gap-2 text-gray-400 font-bold tracking-widest text-xs uppercase hover:text-white transition-all duration-300"
            >
              View Services 
              <span className="inline-block transition-transform group-hover:translate-x-2 text-blue-500">
                →
              </span>
            </a>
          </div>

          {/* TRUST / VALUE STRIP - Floating Card Style */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
            {[
              { label: "Fast Delivery", icon: "⚡" },
              { label: "Secure & Scalable", icon: "🔒" },
              { label: "Growth-Focused", icon: "📈" },
              { label: "Long-Term Support", icon: "🤝" }
            ].map((item, idx) => (
              <div key={idx} className="group p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500">
                <span className="block text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover:text-blue-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR - Minimalist */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <div className="flex flex-col items-center gap-3 text-gray-500 group">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black group-hover:text-white transition-colors">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scrollLine_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* Global CSS for the custom animation (Add to your globals.css or use inline style) */}
      <style jsx>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}