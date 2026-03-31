import aboutimg from "../../assets/aboutlgo.webp";

export default function About() {
  return (
    <section className="relative w-full bg-[#030712] py-32 overflow-hidden">
      
      {/* --- BACKGROUND GLOWS (ui.jpg Style) --- */}
      <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT : TEXT CONTENT */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            
            {/* Minimal Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-blue-500"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-blue-400">
                Who We Are
              </span>
            </div>

            {/* Heading - Cinematic Typography */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
              About <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">NowInfoTech</span>
            </h2>

            {/* Content with Glass Cards effect */}
            <div className="space-y-6 mt-4">
              <p className="text-gray-200 text-lg lg:text-xl leading-relaxed font-medium">
                NowInfoTech is a leading pure-play ServiceNow <span className="text-blue-400 border-b border-blue-500/30">Elite Partner</span> delivering
                strategy, professional, and managed services across the enterprise.
              </p>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:border-white/10 transition-all duration-500">
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                  Our global team of certified experts helps organizations
                  solve complex business challenges, improve operational efficiency,
                  and <span className="text-white italic">accelerate digital transformation.</span>
                </p>
              </div>

              <p className="text-gray-400 text-base lg:text-lg leading-relaxed italic border-l-2 border-blue-600 pl-6 py-2">
                We help you <span className="text-white font-bold tracking-tight uppercase text-sm">Plan, Build, and Manage™</span> ServiceNow with confidence
                and long-term vision.
              </p>
            </div>

            {/* Button - Pro Glass Style */}
            <div className="mt-8">
              <button className="group relative inline-flex items-center justify-center px-10 py-4 font-black text-xs uppercase tracking-widest text-white transition-all duration-500 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-95 overflow-hidden">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>

          {/* RIGHT : IMAGE / VISUAL */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 group">
            
            {/* Image Glowing Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-all duration-700 pointer-events-none" />
            
            <div className="relative">
              {/* Decorative Frame Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-blue-500 rounded-tl-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-purple-500 rounded-br-2xl opacity-50"></div>
              
              <img
                src={aboutimg}
                alt="About NowInfoTech"
                className="relative z-10 w-[280px] sm:w-[320px] lg:w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute bottom-0 left-0 sm:-left-10 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl animate-bounce duration-[3000ms]">
                <p className="text-3xl font-black text-white">Elite</p>
                <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Partner Status</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}