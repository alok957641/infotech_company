import footerimg from "../../assets/FOOTER.webp";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black relative overflow-hidden">
      
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 p-8 lg:p-12">
        
        {/* Logo + Description */}
        <div className="flex flex-col gap-4">
          <p className="text-5xl sm:text-6xl font-bold text-blue-700">
            Info<span className="text-red-500">Center</span>
          </p>
          <p className="text-gray-400 text-sm max-w-xs">
            Leading IT solutions provider delivering innovative services to help your business grow.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg">Services</h4>
          <ul className="flex flex-col gap-2">
            {["CUSTOM APPLICATION","RADIUS","PROFESSIONAL SERVICES","DEVSHOP"].map((item, i) => (
              <li key={i} className="text-gray-400 font-medium hover:text-pink-500 transition-colors hover:drop-shadow-[0_0_10px_rgba(255,20,147,0.7)] cursor-pointer">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg">Company</h4>
          <ul className="flex flex-col gap-2">
            {["SOLUTION","ABOUT US","CAREERS"].map((item, i) => (
              <li key={i} className="text-gray-400 font-medium hover:text-pink-500 transition-colors hover:drop-shadow-[0_0_10px_rgba(255,20,147,0.7)] cursor-pointer">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Image */}
        <div className="flex justify-start lg:justify-end p-2">
          <img src={footerimg} className="w-[280px] sm:w-[300px] h-auto filter drop-shadow-[0_0_20px_rgba(125,249,255,0.5)]" alt="Footer Logo" />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex md:flex-row flex-col md:justify-between justify-center items-center bg-black text-white p-4 px-8 gap-5 border-t border-gray-800">
        
        <div className="order-2 md:order-1">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 InfoCenter. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 order-1 md:order-2">
          {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedin].map((Icon, i) => (
            <a key={i} href="#" className="text-yellow-500 hover:text-pink-500 transition-colors hover:drop-shadow-[0_0_15px_rgba(255,20,147,0.8)]">
              <Icon className="text-2xl sm:text-3xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
