import Ballpit from "./Ballpit";
// Ready.jsx fix
export default function Ready() {
  return (
    <div style={{ position: "relative", overflow: "hidden", height: "70vh", width: "100%", backgroundColor: "#111" }}>
      
      {/* 1. Yahan pointerEvents: "none" add karo */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <Ballpit
           // ... props ...
           followCursor={false} /* Mobile ke liye false kar do toh best hai */
        />
      </div>

      {/* 2. Content ko clickable banao */}
      <section className="relative w-full h-full flex flex-col justify-center items-center gap-8 text-white z-10" 
               style={{ pointerEvents: "none" }}> {/* Section scroll na roke */}
        
        <div className="text-center" style={{ pointerEvents: "auto" }}> {/* Button clickable rahe */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif mb-12">
            Ready to get Started?
          </h2>
          <button className="border rounded-full text-lg bg-red-600 px-8 py-3 font-semibold hover:bg-red-700 transition-all">
            Speak with an Expert
          </button>
        </div>
      </section>
    </div>
  );
}