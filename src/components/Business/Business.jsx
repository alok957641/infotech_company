import Business1 from "../../assets/business1.webp";
import Business2 from "../../assets/business2.webp";
import Business3 from "../../assets/business3.webp";

export default function Business() {
  return (
    <section className="w-full bg-black text-white py-12 ">
      <h2 className="text-1xl  sm:text-2xl lg:text-3xl font-bold font-serif text-center ">
        Business Solutions | Across the ServiceNow Platform
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full max-w-8xl p-5 mt-12 ">
        {/* card1 */}

        <div className="flex flex-col gap-4  ">
          <div className="overflow-hidden flex justify-center items-center">
            <img className=" w-[250px] h-[250px]" src={Business1} alt="" />
          </div>
          <div className="p-7">
            <p className="text-sm md:px-12 lg:px-0 md:text-xl  lg:text-lg text-center  font-semibold text-gray-300 ">
              Infocenter’s team of experts have experience across all
              ServiceNow’s Enterprise IT and Digital Operations Products. Many
              of our experts have been working with ServiceNow since the Aspen
              release (2011).
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="overflow-hidden flex justify-center items-center">
            <img className="  w-[250px] h-[250px]" src={Business2} alt="" />
          </div>
          <div className="p-7">
            <p className="text-sm md:px-12 lg:px-0 md:text-xl  lg:text-lg text-center  font-semibold text-gray-300 ">
              Led by former HR Executives with deep expertise across industries,
              our team has vast experience within the Employee Experience space
              that has transformed numerous organizations.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="overflow-hidden flex justify-center items-center">
            <img className=" w-[250px] h-[250px]" src={Business3} alt="" />
          </div>
          <div className="p-7">
             <p className="text-sm md:px-12 lg:px-0 md:text-xl  lg:text-lg text-center  font-semibold text-gray-300 ">
              Automate your work across Customer and Field Services, Financial
              Operations, HCLS, and more! Infocenter has great customer success
              across all ServiceNow Customer and Industry Solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
