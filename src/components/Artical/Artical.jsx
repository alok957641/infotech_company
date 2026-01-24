import artical1 from "../../assets/artical.png";
import artical2 from "../../assets/artical2.png";
import artical3 from "../../assets/artical3.jpg";

export default function Artical() {
  const articles = [
    {
      img: artical1,
      title: "The Financial Sector’s Resilience Inflection Point: Navigating DORA with a Platform-First Mindset",
      desc: "by Martin Chabarria | 0 Comments The financial sector is facing unprecedented regulatory and operational pressure with the arrival of the Digital Operational Resilience Act (DORA). More than just another compliance mandate, DORA reflects a broader shift...",
      link: "https://infocenter.io/the-financial-sectors-resilience-inflection-point-navigating-dora-with-a-platform-first-mindset/"
    },
    {
      img: artical2,
      title: "Beyond Compliance: Architecting Digital Resilience for DORA with ServiceNow CSDM",
      desc: "by Martin Chabarria | 0 Comments The Digital Operational Resilience Act (DORA) presents substantial challenges for European financial institutions, requiring a robust framework for managing ICT...",
      link: "https://infocenter.io/the-financial-sectors-resilience-inflection-point-navigating-dora-with-a-platform-first-mindset/"
    },
    {
      img: artical3,
      title: "ServiceNow + data.world: Changing the Game for AI-Powered Workflows",
      desc: "by Alayna Bolyard | 0 Comments At Infocenter, we’ve been keeping a close eye on how enterprise AI is evolving—and today, we’re excited to talk about a major leap forward that will reshape how organizations manage data...",
      link: "https://infocenter.io/the-financial-sectors-resilience-inflection-point-navigating-dora-with-a-platform-first-mindset/"
    }
  ];

  return (
    <section className="w-full py-20 bg-black">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-center mb-16 text-white">
        Recommended Articles
      </h2>

      {/* Grid */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 max-w-7xl mx-auto px-6">
        {articles.map((article, i) => (
          <article
            key={i}
            className="group bg-[#111827] rounded-2xl overflow-hidden
            border border-blue-500/20
            shadow-[0_0_15px_rgba(125,249,255,0.2)]
            hover:shadow-[0_0_25px_rgba(125,249,255,0.35)]
            transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-[240px]">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-white leading-snug">
                {article.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {article.desc}
              </p>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-pink-400 font-semibold text-sm hover:text-pink-500 transition-colors"
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
