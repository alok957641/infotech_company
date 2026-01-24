import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full sticky z-[100] top-0 bg-slate-900 shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* logo */}
        <div className="flex-shrink-0">
          <p className="text-2xl sm:text-3xl font-bold text-blue-700">
            Info<span className="text-red-500">Center</span>
          </p>
        </div>

        {/* desktop links */}
        <ul className="hidden lg:flex md:gap-4 lg:gap-9 items-center text-white font-semibold">
          <li className="cursor-pointer px-2 py-4 hover:text-blue-400 transition">
            <a href="">What We Do</a>
          </li>

          {/* Business Solutions Main Dropdown */}
          <li className="relative group px-2 py-4 cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-400 transition">
              <a href="">Business Solutions</a>
              <span className="text-xs group-hover:rotate-180 transition-transform duration-300">▼</span>
            </div>

            {/* Level 1 Dropdown (IT / CRM) */}
            <ul className="absolute left-0 top-full mt-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-gray-700 font-semibold rounded-b-md">
              
              {/* IT Submenu */}
              <li className="relative group/it px-4 py-3 hover:bg-gray-100 transition border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <span>IT</span> <span className="text-[10px]">▶</span>
                </div>
                {/* Level 2 Submenu */}
                <ul className="absolute left-full top-0 ml-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover/it:opacity-100 group-hover/it:visible transition-all duration-300 rounded-md border-l border-gray-100">
                  <li className="px-4 py-2 hover:bg-gray-200 border-b border-gray-50"><a href="">Enterprise Asset Management</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200 border-b border-gray-50"><a href="">IT Service Management</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200 border-b border-gray-50"><a href="">IT Asset Management</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200 border-b border-gray-50"><a href="">IT Operations Management</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200 border-b border-gray-50"><a href="">Strategic Portfolio Management</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="">Enterprise Architecture</a></li>
                </ul>
              </li>

              {/* CRM Submenu - FIXED THIS SECTION */}
              <li className="relative group/crm px-4 py-3 hover:bg-gray-100 transition">
                <div className="flex justify-between items-center">
                  <span>CRM</span> <span className="text-[10px]">▶</span>
                </div>
                {/* Level 2 Submenu for CRM */}
                <ul className="absolute left-full top-0 ml-0 w-64 bg-white shadow-xl opacity-0 invisible group-hover/crm:opacity-100 group-hover/crm:visible transition-all duration-300 rounded-md border-l border-gray-100">
                  <li className="px-4 py-2 hover:bg-gray-200 border-b border-gray-50"><a href="">Customer Service Management</a></li>
                  <li className="px-4 py-2 hover:bg-gray-200"><a href="">Financial Services Operations</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="cursor-pointer px-2 py-4 hover:text-blue-400 transition"> <a href="">Our Services</a></li>
          <li className="cursor-pointer px-2 py-4 hover:text-blue-400 transition"> <a href="">Resources</a></li>
        </ul>

        {/* button */}
        <button className="hidden md:block border border-red-500 hover:bg-red-500 text-white font-semibold px-5 py-2 rounded-md transition-all duration-300">
          Contact Us 
        </button>

        {/* mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white text-3xl p-2"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-slate-800 z-40 shadow-2xl max-h-[calc(100vh-64px)] overflow-y-auto border-t border-slate-700">
          <ul className="flex flex-col text-white font-semibold">
            <li className="px-6 py-4 border-b border-slate-700">What We Do</li>
            <li className="px-6 py-4 border-b border-slate-700">
              <span className="text-blue-400">Business Solutions</span>
              <ul className="pl-4 mt-3 space-y-3 text-sm text-gray-300 border-l border-slate-600">
                <li className="font-bold text-gray-100">IT Solutions:</li>
                <li className="pl-2"><a href="">Enterprise Asset Management</a></li>
                <li className="pl-2"><a href="">IT Service Management</a></li>
                {/* ... baki items ... */}
                <li className="font-bold text-gray-100 mt-4">CRM Solutions:</li>
                <li className="pl-2"><a href="">Customer Service Management</a></li>
                <li className="pl-2"><a href="">Financial Services Operations</a></li>
              </ul>
            </li>
            <li className="px-6 py-4 border-b border-slate-700">Our Services</li>
            <li className="px-6 py-4">Resources</li>
          </ul>
        </div>
      )}
    </nav>
  );
}