import ElectricBorder from "./ElectricBorder";
import help1img from "../../assets/help1.jpg";
import help2img from "../../assets/help2.jpg";
import help3img from "../../assets/help3.jpg";
import { useEffect, useState } from "react";

export default function Help() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Window resize handle karne ka sahi tarika
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint tak mobile behavior rakho
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cards = [
    {
      img: help1img,
      title: "PLAN: RADIUS™",
      sub: "Strategy and Roadmap",
      desc: "Cost-effective ServiceNow workshops led by business-area leaders with domain expertise to determine your needs, gain internal alignment and a budget.",
      link: "Explore RADIUS™ ≥",
    },
    {
      img: help2img,
      title: "BUILD: Implement",
      sub: "Fixed-Fee Engagements",
      desc: "Our senior team has developed and implemented best practices and process automation in every corporate and operational business area.",
      link: "Explore Professional Services ≥",
    },
    {
      img: help3img,
      title: "MANAGE: DEVSHOP™",
      sub: "ServiceNow Managed Services",
      desc: "DEVSHOP™ provides cost-effective continuity and capacity to keep your organization running at peak performance.",
      link: "Explore DEVSHOP™ ≥",
    },
  ];

  return (
    <section className="w-full bg-black py-12">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold font-serif leading-tight">
            Let Infocenter Help You Plan, Build, and Manage™ ServiceNow
          </h2>
        </div>

        {/* cards grid - flex use karna mobile par zyada stable hai */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          {cards.map((card, i) => (
            <div key={i} className="w-full h-full flex">
              {isMobile ? (
                // MOBILE: Improved Glow fallback with better touch support
                <div
                  className="rounded-2xl p-6 flex flex-col gap-4 w-full bg-slate-900/50"
                  style={{
                    border: "1px solid rgba(125, 249, 255, 0.3)",
                    boxShadow: "0 10px 30px -15px rgba(125, 249, 255, 0.2)",
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-48 sm:h-64 object-cover rounded-xl"
                  />
                  <div className="flex flex-col gap-3 flex-grow">
                    <h2 className="text-lg font-bold text-white">{card.title}</h2>
                    <h3 className="text-sm text-cyan-400 font-medium">{card.sub}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{card.desc}</p>
                    <a href="#" className="mt-auto pt-4 text-cyan-400 font-bold hover:underline">
                      {card.link}
                    </a>
                  </div>
                </div>
              ) : (
                // DESKTOP: ElectricBorder
                <ElectricBorder
                  color="#7df9ff"
                  speed={1}
                  chaos={0.12}
                  thickness={2}
                  style={{ borderRadius: 16, width: '100%' }}
                >
                  <div className="p-6 flex flex-col gap-4 h-full bg-black">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-52 object-cover rounded-xl"
                    />
                    <div className="flex flex-col gap-3 flex-grow">
                      <h2 className="text-lg font-bold text-white">{card.title}</h2>
                      <h3 className="text-sm text-cyan-400 font-medium">{card.sub}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">{card.desc}</p>
                      <a href="#" className="mt-auto pt-4 text-cyan-400 font-bold hover:underline">
                        {card.link}
                      </a>
                    </div>
                  </div>
                </ElectricBorder>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}