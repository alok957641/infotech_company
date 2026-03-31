import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import LogoImg from "../../assets/logo.png"; 

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detect karne ke liye taaki navbar background change kare
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // 'fixed' use kiya hai taaki scroll ke saath move na ho, hamesha top par rahe
    <nav className={`w-full fixed top-0 left-0 z-[999] transition-all duration-500 ${
      scrolled 
      ? "bg-[#030712]/80 backdrop-blur-xl py-2 shadow-[0_10px_40px_0_rgba(0,0,0,0.8)] border-b border-white/5" 
      : "bg-transparent py-4"
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        
        {/* BIGGEST LOGO SECTION */}
        <div className="flex-shrink-0 group cursor-pointer py-2">
          <div className="flex items-center gap-2 relative">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <img 
              src={LogoImg} 
              alt="NowInfoTech Logo" 
              className={`transition-all duration-500 object-contain group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] ${
                scrolled ? "h-14 sm:h-16 lg:h-20" : "h-16 sm:h-20 lg:h-28"
              }`} 
            />
            
            <span className="h-2.5 w-2.5 rounded-full bg-red-600 mb-4 shadow-[0_0_20px_#dc2626] animate-pulse"></span>
          </div>
        </div>

        {/* Desktop Links - All <li> restored (No changes in data) */}
        <ul className="hidden lg:flex gap-10 items-center text-[14px] font-black uppercase tracking-[0.25em] text-gray-400">
          
          <li className="cursor-pointer hover:text-white transition-all duration-300 group/link relative">
            <a href="">What We Do</a>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 group-hover/link:w-full transition-all duration-500 shadow-[0_0_8px_#3b82f6]"></span>
          </li>

          {/* Business Solutions Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-2 group-hover:text-white transition-all duration-300">
              <span>Business Solutions</span>
              <FaAngleDown className="group-hover:rotate-180 transition-transform duration-500 text-blue-500" />
            </div>

            <div className="absolute left-0 top-full pt-8 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <ul className="bg-[#0B0F1A] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,1)] rounded-[2rem] p-4 ring-1 ring-white/5">
                
                <li className="relative group/it p-1">
                  <div className="flex justify-between items-center px-6 py-4 hover:bg-blue-600/10 rounded-2xl transition-all text-gray-300 hover:text-white border border-transparent hover:border-white/5">
                    <span className="font-black text-xs tracking-widest">IT SOLUTIONS</span> 
                    <FaAngleRight className="text-blue-500" />
                  </div>
                  
                  <ul className="absolute left-[calc(100%+15px)] top-0 w-80 bg-[#0B0F1A] shadow-2xl opacity-0 invisible group-hover/it:opacity-100 group-hover/it:visible transition-all duration-300 rounded-[2rem] border border-white/10 p-4">
                    {["Enterprise Asset Management", "IT Service Management", "IT Asset Management", "IT Operations Management", "Strategic Portfolio Management", "Enterprise Architecture"].map((item) => (
                      <li key={item} className="px-6 py-3 hover:bg-white/[0.05] rounded-xl text-[11px] text-gray-500 hover:text-blue-400 transition-all cursor-pointer font-bold tracking-wider">
                        <a href="">{item}</a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="relative group/crm p-1 border-t border-white/5 mt-1">
                  <div className="flex justify-between items-center px-6 py-4 hover:bg-purple-600/10 rounded-2xl transition-all text-gray-300 hover:text-white border border-transparent hover:border-white/5">
                    <span className="font-black text-xs tracking-widest">CRM SOLUTIONS</span> 
                    <FaAngleRight className="text-purple-500" />
                  </div>
                  <ul className="absolute left-[calc(100%+15px)] top-0 w-80 bg-[#0B0F1A] shadow-2xl opacity-0 invisible group-hover/crm:opacity-100 group-hover/crm:visible transition-all duration-300 rounded-[2rem] border border-white/10 p-4">
                    <li className="px-6 py-3 hover:bg-white/[0.05] rounded-xl text-[11px] text-gray-500 hover:text-purple-400 transition-all cursor-pointer font-bold tracking-wider">
                      <a href="">Customer Service Management</a>
                    </li>
                    <li className="px-6 py-3 hover:bg-white/[0.05] rounded-xl text-[11px] text-gray-500 hover:text-purple-400 transition-all cursor-pointer font-bold tracking-wider">
                      <a href="">Financial Services Operations</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>

          <li className="cursor-pointer hover:text-white transition-all duration-300 relative group/link">
            <a href="">Our Services</a>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 group-hover/link:w-full transition-all duration-500 shadow-[0_0_8px_#3b82f6]"></span>
          </li>
          
          <li className="cursor-pointer hover:text-white transition-all duration-300 relative group/link">
            <a href="">Resources</a>
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 group-hover/link:w-full transition-all duration-500 shadow-[0_0_8px_#3b82f6]"></span>
          </li>
        </ul>

        {/* PRO CONTACT BUTTON */}
        <button className="hidden md:block bg-white text-black text-[11px] font-black px-10 py-4 rounded-full hover:bg-transparent hover:text-white border-2 border-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95 uppercase tracking-[0.25em]">
          Contact Us
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white w-12 h-12 flex flex-col justify-center items-center gap-1.5 bg-white/5 rounded-2xl border border-white/10"
        >
          <div className={`w-6 h-0.5 bg-white transition-all duration-500 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-500 ${mobileOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-500 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-0 mt-20 bg-[#030712] border-t border-white/5 transition-all duration-700 ease-in-out ${mobileOpen ? "h-screen opacity-100 visible" : "h-0 opacity-0 invisible overflow-hidden"}`}>
        <ul className="flex flex-col text-white px-10 py-16 gap-10">
          <li className="text-5xl font-black tracking-tighter border-b border-white/5 pb-6">What We Do</li>
          <li className="space-y-6">
            <span className="text-blue-500 text-[12px] font-black uppercase tracking-[0.6em]">Business Solutions</span>
            <div className="pl-6 border-l-2 border-blue-600 space-y-6">
               <p className="text-white font-black text-2xl tracking-tight">IT Solutions</p>
               <p className="text-white font-black text-2xl tracking-tight">CRM Solutions</p>
            </div>
          </li>
          <li className="text-5xl font-black tracking-tighter border-b border-white/5 pb-6">Our Services</li>
          <button className="mt-auto mb-10 w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] rounded-3xl text-sm">Get In Touch</button>
        </ul>
      </div>
    </nav>
  );
}