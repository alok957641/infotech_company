import artical1 from "../../assets/artical.png";
import artical2 from "../../assets/artical2.png";
import artical3 from "../../assets/artical3.jpg";

export default function Artical() {
  return (
    <section className="w-full py-8 ">
      <h2 className="text-xl sm:text-2xl lg:text-3xl   font-bold font-serif text-center py-2">
        Recommended Articles
      </h2>
      <div className="grid lg:grid-cols-3  grid-cols-1 items-stretch items-center md:px-18 px-4 gap-8 py-4">
        {/* cards */}

        <div
          class="bg-white border border-slate-300 
          shadow-[0_4px_12px_rgba(15,23,42,0.08)] 
          hover:shadow-[0_12px_28px_rgba(15,23,42,0.18)] 
          hover:-translate-y-1 transition-all duration-300"
        >
          <div className="overflow-hidden flex justify-center items-center">
            {/* img */}
            <img
              src={artical1}
              className="w-full md:h-[280px] lg:h-[240px] h-240px "
              alt=""
            />
          </div>
          <div className="py-4 flex flex-col gap-2">
            {/* text */}

            <h3 className="text-md font-semibold px-4">
              The Financial Sector’s Resilience Inflection Point: Navigating
              DORA with a Platform-First Mindset
            </h3>
            <p className="max-w-3xl mx-auto px-3 text-sm sm:text-base lg:text-md leading-relaxed  text-gray-500 font-semibold ">
              by Martin Chabarria | 0 Comments The financial sector is facing
              unprecedented regulatory and operational pressure with the arrival
              of the Digital Operational Resilience Act (DORA). More than just
              another compliance mandate, DORA reflects a broader shift:
              regulators now expect institutions to... <br />
              <a
                href="https://infocenter.io/the-financial-sectors-resilience-inflection-point-navigating-dora-with-a-platform-first-mindset/"
                className="text-blue-500"
              >
                read more
              </a>
            </p>
          </div>
        </div>

        <div
          class="bg-white border border-slate-300 
          shadow-[0_4px_12px_rgba(15,23,42,0.08)] 
          hover:shadow-[0_12px_28px_rgba(15,23,42,0.18)] 
          hover:-translate-y-1 transition-all duration-300"
        >
          <div className="overflow-hidden flex justify-center items-center">
            {/* img */}
            <img
              src={artical2}
              className="w-full md:h-[280px] lg:h-[240px] h-240px "
              alt=""
            />
          </div>
          <div className="py-4 flex flex-col gap-2">
            {/* text */}

            <h3 className="text-md font-semibold px-4">
              Beyond Compliance: Architecting Digital Resilience for DORA with
              ServiceNow CSDM
            </h3>
            <p className="max-w-3xl mx-auto px-3 text-sm sm:text-base lg:text-md leading-relaxed  text-gray-500 font-semibold ">
              by Martin Chabarria | 0 Comments Beyond Compliance: Architecting
              Digital Resilience for DORA with ServiceNow CSDM Introduction The
              Digital Operational Resilience Act (DORA) presents substantial
              challenges for European financial institutions, requiring a robust
              framework for managing ICT... <br />
              <a
                href="https://infocenter.io/the-financial-sectors-resilience-inflection-point-navigating-dora-with-a-platform-first-mindset/"
                className="text-blue-500"
              >
                read more
              </a>
            </p>
          </div>
        </div>

        <div
          class="bg-white border border-slate-300 
          shadow-[0_4px_12px_rgba(15,23,42,0.08)] 
          hover:shadow-[0_12px_28px_rgba(15,23,42,0.18)] 
          hover:-translate-y-1 transition-all duration-300"
        >
          <div className="overflow-hidden flex justify-center items-center">
            {/* img */}
            <img
              src={artical3}
              className="w-full md:h-[280px] lg:h-[240px] h-240px "
              alt=""
            />
          </div>
          <div className="py-4 flex flex-col gap-2">
            {/* text */}

            <h3 className="text-md font-semibold px-4">
              ServiceNow + data.world: Changing the Game for AI-Powered
              Workflows
            </h3>
            <p className="max-w-3xl mx-auto px-3 text-sm sm:text-base lg:text-md leading-relaxed  text-gray-500 font-semibold ">
              by Alayna Bolyard | 0 Comments At Infocenter, we’ve been keeping a
              close eye on how enterprise AI is evolving—and today, we’re
              excited to talk about a major leap forward: ServiceNow has
              acquired data.world, and it's a move that will reshape how
              organizations manage, govern, and activate their data... <br />
              <a
                href="https://infocenter.io/the-financial-sectors-resilience-inflection-point-navigating-dora-with-a-platform-first-mindset/"
                className="text-blue-500"
              >
                read more
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
