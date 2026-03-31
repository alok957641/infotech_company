import Business1 from "../../assets/business1.webp";
import Business2 from "../../assets/business2.webp";
import Business3 from "../../assets/business3.webp";

export default function Business() {
  const solutions = [
    {
      img: Business1,
      title: "IT & Digital Ops",
      desc: "Our experts bring deep experience across ServiceNow Enterprise IT and Digital Operations, supporting organizations since early releases.",
      glow: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]",
      border: "hover:border-blue-500/50"
    },
    {
      img: Business2,
      title: "Employee Experience",
      desc: "Led by former HR executives, we deliver employee experience solutions that improve engagement and productivity at scale.",
      glow: "group-hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]",
      border: "hover:border-purple-500/50"
    },
    {
      img: Business3,
      title: "Customer Workflows",
      desc: "We automate customer, field service, and industry workflows to help businesses operate faster, smarter, and more efficiently.",
      glow: "group-hover:shadow-[0_0_50px_rgba(236,72,153,0.2)]",
      border: "hover:border-pink-500/50"
    }
  ];

  return (
    <section className="relative w-full bg-[#030712] py-32 overflow-hidden">
      
      {/* --- DECORATIVE BLURS --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Pro Minimalist */}
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-500 mb-4 inline-block">
            Enterprise Excellence
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8">
            Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed font-medium">
            Powerful ServiceNow solutions designed to transform enterprise
            operations across IT, HR, and Customer Services.
          </p>
          <div className="mx-auto mt-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-10 lg:grid-cols-3">
          {solutions.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative flex flex-col items-center text-center p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 transition-all duration-700 hover:-translate-y-4 ${item.border} ${item.glow}`}
            >
              {/* Card Glow Background */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Image with 3D Float Effect */}
              <div className="relative mb-10 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
                {/* Image shadow/glow */}
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[200px] relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h3 className="text-xl font-black text-white mb-4 tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-1/2 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}