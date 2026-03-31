import help1img from "../../assets/help1.jpg";
import help2img from "../../assets/help2.jpg";
import help3img from "../../assets/help3.jpg";

export default function Help() {
  const cards = [
    {
      img: help1img,
      title: "PLAN: RADIUS™",
      sub: "Strategy and Roadmap",
      desc: "Cost-effective ServiceNow workshops led by experts to align business goals, priorities, and budgets.",
      link: "Explore RADIUS™",
      accent: "from-blue-500/20 to-blue-600/5"
    },
    {
      img: help2img,
      title: "BUILD: Implement",
      sub: "Fixed-Fee Engagements",
      desc: "Senior consultants delivering proven implementations and automation across enterprise workflows.",
      link: "Explore Professional Services",
      accent: "from-purple-500/20 to-purple-600/5"
    },
    {
      img: help3img,
      title: "MANAGE: DEVSHOP™",
      sub: "ServiceNow Managed Services",
      desc: "Ongoing managed services that ensure stability, scalability, and peak platform performance.",
      link: "Explore DEVSHOP™",
      accent: "from-pink-500/20 to-pink-600/5"
    },
  ];

  return (
    <section className="relative w-full bg-[#030712] py-32 overflow-hidden">
      
      {/* --- PREMIUM BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header - Cinematic Pro Style */}
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.6em] font-black text-blue-500 mb-4 inline-block">
            Our Core Methodology
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight max-w-4xl mx-auto">
            Let NowInfoTech Help You <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent italic">
              Plan, Build, and Manage™
            </span>
          </h2>
          <div className="mx-auto mt-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        {/* Cards Grid - ui.jpg Style Glass Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">

          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative bg-white/[0.02] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-4 shadow-2xl"
            >
              {/* Top Accent Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              {/* Image Container with Cinematic Zoom */}
              <div className="relative overflow-hidden h-[240px] m-3 rounded-[2rem]">
                <div className="absolute inset-0 bg-[#030712]/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                {/* Floating Tag */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-1.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-[9px] font-black text-white tracking-widest uppercase">
                    Step 0{i + 1}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 pt-4 flex flex-col gap-4 relative z-20">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-black">
                    {card.sub}
                  </p>
                  <h3 className="text-2xl font-black text-white tracking-tighter transition-colors duration-300 group-hover:text-blue-400">
                    {card.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed font-medium line-clamp-3">
                  {card.desc}
                </p>

                {/* Bottom CTA Link - Modern Line Style */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <a
                    href="#"
                    className="group/btn inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-all"
                  >
                    {card.link}
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Subtle Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}