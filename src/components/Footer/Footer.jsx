import footerimg from "../../assets/FOOTER.webp";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030712] relative overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND DECORATION (ui.jpg Vibe) --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          
          {/* 1. Logo & Description */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center tracking-tighter">
              <span className="text-3xl font-light text-white/50">Now</span>
              <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                InfoTech
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 ml-1.5 shadow-[0_0_10px_#ef4444]"></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
              Leading ServiceNow Elite Partner delivering innovative digital solutions to help your enterprise grow faster and smarter.
            </p>
            {/* Social Icons - Pro Style */}
            <div className="flex items-center gap-5 mt-2">
              {[FaLinkedin, FaTwitter, FaInstagram, FaFacebookF].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Services Links */}
          <div className="flex flex-col gap-6 lg:pl-10">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Services</h4>
            <ul className="flex flex-col gap-4">
              {["CUSTOM APPLICATION", "RADIUS", "PROFESSIONAL SERVICES", "DEVSHOP"].map((item, i) => (
                <li key={i} className="text-gray-500 text-[13px] font-bold tracking-wider hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Company</h4>
            <ul className="flex flex-col gap-4">
              {["SOLUTIONS", "ABOUT US", "CAREERS", "CONTACT"].map((item, i) => (
                <li key={i} className="text-gray-500 text-[13px] font-bold tracking-wider hover:text-blue-400 transition-all duration-300 cursor-pointer flex items-center group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Partner Logo / Certification */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="relative group">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={footerimg} 
                className="w-56 sm:w-64 h-auto relative z-10 transition-transform duration-500 group-hover:scale-105" 
                alt="Partner Certification" 
              />
            </div>
            <p className="text-[10px] text-gray-600 font-bold tracking-[0.2em] uppercase text-right">
              Certified ServiceNow <br /> Elite Partner 2026
            </p>
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="w-full border-t border-white/[0.03] bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[11px] font-bold tracking-widest uppercase text-center">
            © 2026 <span className="text-white">NowInfoTech</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-[11px] font-bold text-gray-600 tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}