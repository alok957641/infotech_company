import { GridScan } from "./GridScan";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Window resize handle karne ke liye function
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="Home"
      // min-h-screen ko "h-auto" ya "min-h-[100dvh]" (dynamic viewport) use karna better hai mobile ke liye
      className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* GRID ANIMATION – DESKTOP ONLY */}
      {!isMobile && (
       <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.1}
            scanColor="#FF9FFC"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
          />
        </div>
      )}

     
      <div className="relative z-20 w-full py-20">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Grow Your Business <br />
            <span className="text-pink-400">
              with Smart IT Solutions
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
            We provide reliable and affordable IT services including website
            development, software solutions, digital marketing, and technical
            support.
          </p>

          <div className="mt-10">
            <button className="px-8 py-4 bg-pink-500 text-black font-bold rounded-lg hover:bg-pink-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/20">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}