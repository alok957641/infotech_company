import artical1 from "../../assets/artical.png";
import artical2 from "../../assets/artical2.png";
import artical3 from "../../assets/artical3.jpg";

export default function Artical() {
  const articles = [
    {
      img: artical1,
      tag: "FINANCE",
      author: "Martin Chabarria",
      title: "The Financial Sector’s Resilience Inflection Point: Navigating DORA",
      desc: "Digital Operational Resilience Act (DORA) reflects a broader shift in the financial sector's operational pressure...",
      link: "https://infocenter.io/the-financial-sectors-resilience-inflection-point-navigating-dora-with-a-platform-first-mindset/"
    },
    {
      img: artical2,
      tag: "COMPLIANCE",
      author: "Martin Chabarria",
      title: "Beyond Compliance: Architecting Digital Resilience with ServiceNow CSDM",
      desc: "DORA presents substantial challenges for European financial institutions, requiring a robust framework for ICT...",
      link: "https://infocenter.io/the-financial-sectors-resilience-inflection-point-navigating-dora-with-a-platform-first-mindset/"
    },
    {
      img: artical3,
      tag: "AI TECHNOLOGY",
      author: "Alayna Bolyard",
      title: "ServiceNow + data.world: Changing the Game for AI-Powered Workflows",
      desc: "A major leap forward that will reshape how organizations manage data and evolve enterprise AI workflows...",
      link: "https://infocenter.io/the-financial-sectors-resilience-inflection-point-navigating-dora-with-a-platform-first-mindset/"
    }
  ];

  return (
    <section className="relative w-full py-32 bg-[#030712] overflow-hidden">
      
      {/* --- BG DECORATION --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Minimal & Pro */}
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-500 mb-4">
            Insights & Updates
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter">
            Recommended <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-transparent mt-6 rounded-full" />
        </div>

        {/* Grid - Clean Layout */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {articles.map((article, i) => (
            <article
              key={i}
              className="group relative bg-white/[0.02] rounded-[2rem] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-3 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                {/* Overlay Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 opacity-60" />
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Floating Tag */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black text-white tracking-widest uppercase">
                    {article.tag}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col gap-4">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  <span>{article.author}</span>
                  <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                  <span>5 min read</span>
                </div>

                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {article.desc}
                </p>

                {/* Read More - Pro Style */}
                <div className="mt-4 pt-6 border-t border-white/5">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-all"
                  >
                    Read Article 
                    <span className="w-8 h-px bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-blue-500 transition-all duration-500"></span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button - Bottom */}
        <div className="mt-20 flex justify-center">
          <button className="px-12 py-4 bg-white/5 border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
            Explore All Resources
          </button>
        </div>
      </div>
    </section>
  );
}