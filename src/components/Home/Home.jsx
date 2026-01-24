export default function Home() {
  return (
    <section
      id="Home"
      className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px]" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />

      {/* CONTENT */}
      <div className="relative z-20 w-full py-24">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          
          {/* Eyebrow */}
          <p className="uppercase tracking-widest text-xs text-pink-400 mb-4">
            Smart IT • Digital Growth • Reliable Support
          </p>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Grow Your Business <br />
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              with Smart IT Solutions
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
            We design and build high-quality websites, scalable software, and
            digital solutions that help businesses grow faster, smarter, and
            more efficiently.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-4 bg-pink-500 text-black font-bold rounded-xl 
              hover:bg-pink-600 hover:scale-105 transition-all duration-300
              shadow-[0_0_40px_rgba(236,72,153,0.35)]">
              Get Started Today
            </button>

            <a
              href="#services"
              className="text-gray-300 font-semibold tracking-wide hover:text-white transition"
            >
              View Services →
            </a>
          </div>

          {/* TRUST / VALUE STRIP */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <span>⚡ Fast Delivery</span>
            <span>🔒 Secure & Scalable</span>
            <span>📈 Growth-Focused</span>
            <span>🤝 Long-Term Support</span>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex flex-col items-center gap-2 text-gray-400 text-xs">
          <span>Scroll</span>
          <div className="w-[2px] h-8 bg-gradient-to-b from-pink-400 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
