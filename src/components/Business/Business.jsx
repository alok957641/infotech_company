import Business1 from "../../assets/business1.webp";
import Business2 from "../../assets/business2.webp";
import Business3 from "../../assets/business3.webp";

export default function Business() {
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            Business Solutions
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base lg:text-lg">
            Powerful ServiceNow solutions designed to transform enterprise
            operations across IT, HR, and Customer Services.
          </p>

          <div className="mx-auto mt-6 w-24 h-[2px] bg-pink-500"></div>
        </div>

        {/* Cards */}
        <div className="grid gap-16 lg:grid-cols-3">

          {/* CARD 1 */}
          <div className="flex flex-col items-center text-center gap-8">
            <img
              src={Business1}
              alt=""
              className="w-[220px]"
            />
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Our experts bring deep experience across ServiceNow Enterprise IT
              and Digital Operations, supporting organizations since the early
              platform releases.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center text-center gap-8">
            <img
              src={Business2}
              alt=""
              className="w-[220px]"
            />
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Led by former HR executives, we deliver employee experience
              solutions that improve engagement and productivity at scale.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center text-center gap-8">
            <img
              src={Business3}
              alt=""
              className="w-[220px]"
            />
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              We automate customer, field service, and industry workflows to
              help businesses operate faster, smarter, and more efficiently.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
