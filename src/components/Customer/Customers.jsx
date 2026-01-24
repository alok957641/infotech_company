import Customer from "../../assets/customer.webp";

export default function Customers() {
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center">

        {/* TEXT */}
        <div className="order-2 w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            Customer-Centric Focus
          </h2>

          <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-xl">
            At Infocenter, we are customer-centric. Our first priority and overall focus are always on our customers’ needs. We proudly maintain one of the highest CSATs (Customer Surveys) in the ServiceNow Ecosystem.
          </p>

          <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl">
            We have helped organizations achieve digital transformation across the ServiceNow platform in various industries, including Healthcare, Financial Services, Manufacturing, Retail, Energy and Utilities, Logistics, Technology, Service Providers, Telecom, and more!
          </p>

          <button className="mt-4 px-8 py-3 rounded-lg font-semibold
            bg-pink-500 text-black hover:bg-pink-600 transition duration-300 w-fit">
            Get Started Today
          </button>
        </div>

        {/* IMAGE */}
        <div className="order-1 w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Customer}
            alt="Customer-Centric Focus"
            className="w-[260px] sm:w-[300px] lg:w-[440px] rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
