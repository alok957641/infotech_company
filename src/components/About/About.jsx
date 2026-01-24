import aboutimg from "../../assets/aboutlgo.webp";

export default function About() {
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto px-8">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT : TEXT */}
          <div className="flex flex-col gap-8">
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
              About Infocenter
            </h2>

            {/* Line */}
            <div className="w-20 h-[2px] bg-pink-500"></div>

            {/* Paragraphs */}
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-xl">
              Infocenter is a leading pure-play ServiceNow <span className="text-white font-semibold">Elite Partner</span> delivering
              strategy, professional, and managed services across the enterprise.
            </p>

            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl">
              Our global team of certified ServiceNow experts helps organizations
              solve complex business challenges, improve operational efficiency,
              and accelerate digital transformation.
            </p>

            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl">
              We help you <span className="text-white font-semibold">Plan, Build, and Manage™</span> ServiceNow with confidence
              and long-term vision.
            </p>

            {/* Button */}
            <div>
              <button className="mt-6 px-8 py-3 rounded-lg font-semibold
                bg-pink-500 text-black
                hover:bg-pink-600 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT : IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={aboutimg}
              alt="About Infocenter"
              className="w-[260px] sm:w-[300px] lg:w-[340px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
