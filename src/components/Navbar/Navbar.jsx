import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-[100] bg-[#030712]/90 backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        
        {/* LOGO - NowInfoTech (Deep Dark Style) */}
        <div className="flex-shrink-0 group cursor-pointer">
          <div className="flex items-center tracking-tighter">
            <span className="text-3xl font-light text-white/40 group-hover:text-white transition-all duration-500">
              Now
            </span>
            <span className="text-3xl font-black bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500">
              InfoTech
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-red-600 ml-1.5 shadow-[0_0_12px_#dc2626] animate-pulse"></span>
          </div>
        </div>

        {/* Desktop Links - Same Data, Deep Dark Theme */}
        <ul className="hidden lg:flex gap-12 items-center text-[13px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <li className="cursor-pointer hover:text-blue-400 transition-all duration-300 group/link relative">
            <a href="">What We Do</a>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 group-hover/link:w-full transition-all duration-500"></span>
          </li>

          {/* Business Solutions Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1.5 group-hover:text-white transition-all duration-300">
              <span>Business Solutions</span>
              <FaAngleDown className="group-hover:rotate-180 transition-transform duration-500 text-[10px] text-gray-600" />
            </div>

            {/* Level 1 Dropdown - Ultra Dark Glass */}
            <div className="absolute left-0 top-full pt-6 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <ul className="bg-[#0B0F1A] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.9)] rounded-3xl p-3 ring-1 ring-white/5">
                
                {/* IT Submenu */}
                <li className="relative group/it p-1">
                  <div className="flex justify-between items-center px-5 py-4 hover:bg-white/[0.03] rounded-2xl transition-all text-gray-400 hover:text-white border border-transparent hover:border-white/5">
                    <span className="text-sm font-bold tracking-widest uppercase">IT Solutions</span> 
                    <FaAngleRight className="text-[10px] text-blue-500" />
                  </div>
                  
                  {/* Floating Submenu */}
                  <ul className="absolute left-[calc(100%+15px)] top-0 w-72 bg-[#0B0F1A] shadow-[0_20px_80px_rgba(0,0,0,0.9)] opacity-0 invisible group-hover/it:opacity-100 group-hover/it:visible transition-all duration-300 rounded-3xl border border-white/10 p-3 ring-1 ring-white/5">
                    {["Enterprise Asset Management", "IT Service Management", "IT Asset Management", "IT Operations Management", "Strategic Portfolio Management", "Enterprise Architecture"].map((item) => (
                      <li key={item} className="px-5 py-3 hover:bg-white/[0.05] rounded-xl text-[11px] text-gray-500 hover:text-blue-400 transition-all cursor-pointer uppercase tracking-wider">
                        <a href="">{item}</a>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* CRM Submenu */}
                <li className="relative group/crm p-1">
                  <div className="flex justify-between items-center px-5 py-4 hover:bg-white/[0.03] rounded-2xl transition-all text-gray-400 hover:text-white border border-transparent hover:border-white/5">
                    <span className="text-sm font-bold tracking-widest uppercase">CRM Solutions</span> 
                    <FaAngleRight className="text-[10px] text-purple-500" />
                  </div>
                  <ul className="absolute left-[calc(100%+15px)] top-0 w-72 bg-[#0B0F1A] shadow-[0_20px_80px_rgba(0,0,0,0.9)] opacity-0 invisible group-hover/crm:opacity-100 group-hover/crm:visible transition-all duration-300 rounded-3xl border border-white/10 p-3 ring-1 ring-white/5">
                    <li className="px-5 py-3 hover:bg-white/[0.05] rounded-xl text-[11px] text-gray-500 hover:text-purple-400 transition-all cursor-pointer uppercase tracking-wider">
                      <a href="">Customer Service Management</a>
                    </li>
                    <li className="px-5 py-3 hover:bg-white/[0.05] rounded-xl text-[11px] text-gray-500 hover:text-purple-400 transition-all cursor-pointer uppercase tracking-wider">
                      <a href="">Financial Services Operations</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition-all duration-300 relative group/link">
            <a href="">Our Services</a>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 group-hover/link:w-full transition-all duration-500"></span>
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition-all duration-300 relative group/link">
            <a href="">Resources</a>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 group-hover/link:w-full transition-all duration-500"></span>
          </li>
        </ul>

        {/* Contact Button - Sleek Dark Neon */}
        <button className="hidden md:block bg-white text-black text-xs font-black px-8 py-3 rounded-full hover:bg-transparent hover:text-white border border-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95 uppercase tracking-[0.2em]">
          Contact Us
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white w-10 h-10 flex flex-col justify-center items-center gap-1.5 bg-white/5 rounded-full"
        >
          <div className={`w-5 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-5 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-5 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* Mobile Menu - Data Kept Same */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-[#030712] border-t border-white/5 transition-all duration-700 ease-in-out ${mobileOpen ? "h-[calc(100vh-80px)] opacity-100 visible" : "h-0 opacity-0 invisible overflow-hidden"}`}
      >
        <ul className="flex flex-col text-white px-10 py-12 gap-8 h-full">
          <li className="text-4xl font-light tracking-tighter border-b border-white/5 pb-4">What We Do</li>
          <li className="space-y-4">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em]">Business Solutions</span>
            <div className="pl-4 space-y-6">
               <div className="space-y-4">
                  <p className="text-white font-bold text-lg">IT Solutions</p>
                  <ul className="text-gray-500 text-sm space-y-3 border-l border-white/10 pl-4">
                    {["Enterprise Asset Management", "IT Service Management", "IT Asset Management"].map(i => <li key={i}>{i}</li>)}
                  </ul>
               </div>
            </div>
          </li>
          <li className="text-4xl font-light tracking-tighter border-b border-white/5 pb-4">Our Services</li>
          <button className="mt-auto mb-10 w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] rounded-full">Get In Touch</button>
        </ul>
      </div>
    </nav>
  );
}