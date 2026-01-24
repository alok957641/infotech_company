import Customer from "../../assets/customer.webp";

export default function Customers() {
  return (
    <section className="w-full  ">
      <div className="w-full max-w-8xl flex flex-col lg:flex-row justify-between items-center gap-12 mx-auto p-6 ">
        <div className="order-2  flex flex-col gap-4 p-0 md:gap-6  ">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-serif px-4 text-stone-700">
            Customer-Centric Focus
          </h2>
          <p className="max-w-3xl mx-auto px-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 font-semibold">
            At Infocenter, we are customer-centric. Our first priority and
            overall focus are always on our customers’ needs. We are proud to
            maintain one of the highest CSATs (Customer Surveys) in the
            ServiceNow Ecosystem.
          </p>
          <p className="max-w-3xl mx-auto px-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600 font-semibold">
            We have helped organizations achieve digital transformation across
            the ServiceNow platform in various industries, including Healthcare,
            Financial Services, Manufacturing, Retail, Energy and Utilities,
            Logistics, Technology, Service Providers, Telecom, and more!
          </p>


          <div className="px-4 ">
            <button className="border px-4 py-2 rounded-md hover:bg-red-500 duration-300 ">
           Get Started Today
            </button>
          </div>
        </div>

        <div className="order-1  p-5">
          <img className="w-[300px] " src={Customer} alt="" />
        </div>
      </div>
    </section>
  );
}
