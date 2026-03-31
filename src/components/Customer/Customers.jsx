import Customer from "../../assets/customer.webp";

export default function Customers() {
  return (
    <section className="relative w-full bg-[#030712] py-32 overflow-hidden">
      
      {/* --- BG GLOWS --- */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* LEFT : VISUAL (IMAGE) - PRO 3D STYLE */}
          <div className="order-1 w-full lg:w-1/2 flex justify-center relative group">
            {/* Background Glow behind Image */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />
            
            <div className="relative">
              {/* Image Frame */}
              <img
                src={Customer}
                alt="Customer-Centric Focus"
                className="relative z-10 w-[280px] sm:w-[320px] lg:w-[460px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 transition-all duration-700 group-hover:scale-105 group-hover:-rotate-2"
              />
              
              {/* Floating CSAT Badge - UI.jpg Vibe */}
              <div className="absolute -bottom-6 -right-6 sm:right-0 bg-[#0B0F1A]/80 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20 animate-bounce duration-[4000ms]">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-black text-white leading-none">5.0</span>
                  <div className="flex gap-1 my-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-blue-500 text-xs">★</span>
                    ))}
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black">Top CSAT Score</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT : TEXT CONTENT - PRO TYPOGRAPHY */}
          <div className="order-2 w-full lg:w-1/2 flex flex-col gap-8">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-blue-500"></span>
                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-500">
                  Our Philosophy
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter">
                Customer-Centric <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent italic">
                  Focus & Care
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-200 text-lg lg:text-xl leading-relaxed font-medium">
                At NowInfoTech, our first priority is always on our customers’ needs. We proudly maintain one of the <span className="text-white border-b border-blue-500/30">highest CSATs</span> in the ServiceNow Ecosystem.
              </p>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:border-white/10 transition-all duration-500">
                <p className="text-gray-400 text-base leading-relaxed">
                  We have helped organizations achieve digital transformation across Healthcare, Financial Services, Manufacturing, Retail, Energy, and Telecom.
                </p>
              </div>
            </div>

            {/* CTA Button - UI.jpg Style */}
            <div className="mt-4">
              <button className="group relative inline-flex items-center justify-center px-10 py-4 font-black text-xs uppercase tracking-widest text-white transition-all duration-500 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-95 overflow-hidden">
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}