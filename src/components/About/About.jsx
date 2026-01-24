import aboutimg from "../../assets/aboutlgo.webp";

export default function About() {
  return (
    <section className="w-full  ">
      <div className="w-full max-w-8xl flex flex-col lg:flex-row justify-between items-center gap-12 mx-auto p-6 ">
        <div className="order-2 lg:order-1 flex flex-col gap-4 p-0 md:gap-6  ">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-serif px-4 text-stone-700">
            About Infocenter{" "}
          </h2>
          <p className="max-w-3xl mx-auto px-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 font-semibold">
            Infocenter is the Leading Pure-Play ServiceNow “Elite” Partner
            providing Strategy, Professional, and Managed Services across the
            Enterprise.
          </p>
          <p className="max-w-3xl mx-auto px-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 font-semibold">
            Our global team of certified ServiceNow experts is dedicated to
            helping your organization overcome unique business challenges,
            enhance operational efficiency, and drive digital transformation.
          </p>

          <p className="max-w-3xl mx-auto px-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 font-semibold">
            As the leading ServiceNow Elite Partner, we’re here to help you
            Plan, Build, and Manage™ ServiceNow with confidence.
          </p>

          <div className="px-4 ">
            <button className="border px-4 py-2 rounded-md hover:bg-red-500 duration-300 ">
                Contect us 
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 p-5">
          <img className="w-[300px] " src={aboutimg} alt="" />
        </div>
      </div>
    </section>
  );
}
