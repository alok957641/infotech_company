import Ballpit from "./Ballpit";

export default function Ready() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        height: "70vh", 
        width: "100%",
        backgroundColor: "#111",
      }}
    >
      {/* Ballpit background - ADDED pointer-events-none */}
      <div 
        style={{ 
          position: "absolute", 
          inset: 0, 
          zIndex: 1,
          pointerEvents: "none" // Taaki touch/scroll seedha piche chala jaye
        }}
      >
        <Ballpit
          count={100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={true}
          colors={["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"]}
        />
      </div>

      {/* Foreground content - ADDED pointer-events-auto */}
      <section
        className="relative w-full h-full flex flex-col justify-center items-center gap-8 text-white z-10"
        style={{ 
          zIndex: 2,
          pointerEvents: "none" // Section khud scroll na roke
        }}
      >
        <div className="text-center" style={{ pointerEvents: "auto" }}> 
          {/* Button aur text clickable rahe isliye yahan pointer-events-auto diya */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif mb-12">
            Ready to get Started?
          </h2>
          <button className="border rounded-full text-lg bg-red-600 px-8 py-3 font-semibold hover:bg-red-700 transition-all shadow-[0_0_15px_rgba(255,0,0,0.6)]">
            Speak with an Expert
          </button>
        </div>
      </section>
    </div>
  );
}