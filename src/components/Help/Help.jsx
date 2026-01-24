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
      link: "Explore RADIUS™ →",
    },
    {
      img: help2img,
      title: "BUILD: Implement",
      sub: "Fixed-Fee Engagements",
      desc: "Senior consultants delivering proven implementations and automation across enterprise workflows.",
      link: "Explore Professional Services →",
    },
    {
      img: help3img,
      title: "MANAGE: DEVSHOP™",
      sub: "ServiceNow Managed Services",
      desc: "Ongoing managed services that ensure stability, scalability, and peak platform performance.",
      link: "Explore DEVSHOP™ →",
    },
  ];

  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            Let Infocenter Help You Plan, Build, and Manage™ ServiceNow
          </h2>
          <div className="mx-auto mt-6 w-24 h-[2px] bg-pink-500"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-12">

          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative bg-[#0b0b0b] rounded-2xl overflow-hidden
                         border border-white/10 shadow-lg
                         transition-all duration-500
                         hover:-translate-y-3 hover:shadow-2xl hover:border-pink-500"
            >
              {/* Image */}
              <div className="overflow-hidden h-[220px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-3">
                <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-pink-400">
                  {card.title}
                </h3>

                <p className="text-sm uppercase tracking-wide text-pink-500 font-semibold">
                  {card.sub}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>

                <a
                  href="#"
                  className="mt-4 text-pink-500 font-semibold hover:text-white transition-colors duration-300"
                >
                  {card.link}
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
