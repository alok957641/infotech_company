import footerimg from "../../assets/FOOTER.webp";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="">
      <div className="bg-[#0F172A] flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row md:py-9 md:gap-8 justify-between md:items-center  gap-12 md:py-0 py-5 px-8 min-h-80 md:px-12">
        <div>
          <p className="text-6xl font-bold text-blue-700">
            Info<span className="text-red-500">Center</span>
          </p>
        </div>

        {/* links */}
        <div>
          <ul className="flex flex-col md:gap-2 gap-5">
            <li className="text-gray-400 font-semibold text-l "> <a href="">CUSTOM APPLICATION </a></li>
            <li className="text-gray-400 font-semibold text-l "> <a href="">RADIUS </a></li>
            <li className="text-gray-400 font-semibold text-l "> <a href="">PROFESSIONAL SERVICES </a></li>
            <li className="text-gray-400 font-semibold text-l "> <a href="">DEVSHOP </a></li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col md:gap-2 gap-5">
            <li className="text-gray-400 font-semibold text-l "> <a href="">SOLUTION </a></li>
            <li className="text-gray-400 font-semibold text-l "> <a href="">ABOUT US </a></li>
            <li className="text-gray-400 font-semibold text-l "> <a href="">CAREERS </a></li>
          </ul>
        </div>
        <div>
          <img src={footerimg} className="w-[300px] h-[100px] " alt="" />
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center bg-black text-white p-4 px-8 gap-5 ">
        <div className="order-2 md:order-1 ">
          <p className="text-md text-center text-gray-400 ">Copyright 2026 InfoCenter. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-8 order-1 md:order-2">
          {/* icons */}

          <a href=""><FaInstagram className="text-3xl text-yellow-500" /></a>
          <a href=""><FaFacebookF className="text-3xl text-yellow-500" /></a>
          <a href=""><FaTwitter  className="text-3xl text-yellow-500" /></a>
          <a href=""><FaLinkedin   className="text-3xl text-yellow-500 "/></a>
        </div>
      </div>
    </footer>
  );
}
