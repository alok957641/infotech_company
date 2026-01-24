import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-[100] bg-[#0F172A] shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <p className="text-3xl sm:text-4xl font-bold text-blue-500 drop-shadow-lg hover:drop-shadow-[0_0_15px_#7df9ff] transition-all duration-300 cursor-pointer">
            Info<span className="text-red-500">Center</span>
          </p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8 items-center text-white font-semibold">
          <li className="cursor-pointer hover:text-blue-400 transition">
            {" "}
            <a href="">What We Do</a>{" "}
          </li>

          {/* Business Solutions Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-400 transition">
              <span>Business Solutions</span>{" "}
              <FaAngleDown className="group-hover:rotate-180 transition-transform duration-300" />
            </div>

            {/* Level 1 Dropdown */}
            <ul className="absolute left-0 top-full mt-2 w-64 bg-[#1e293b] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-lg border border-gray-700 text-gray-200 font-medium">
              {/* IT Submenu */}
              <li className="relative group/it px-4 py-3 hover:bg-gray-700 transition">
                <div className="flex justify-between items-center">
                  <span>IT</span> <FaAngleRight />
                </div>
                <ul className="absolute left-full top-0 w-64 bg-[#1e293b] shadow-2xl opacity-0 invisible group-hover/it:opacity-100 group-hover/it:visible transition-all duration-300 rounded-md border-l border-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <a href="">Enterprise Asset Management</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <a href="">IT Service Management</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <a href="">IT Asset Management</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <a href="">IT Operations Management</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <a href="">Strategic Portfolio Management</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <a href="">Enterprise Architecture</a>
                  </li>
                </ul>
              </li>

              {/* CRM Submenu */}
              <li className="relative group/crm px-4 py-3 hover:bg-gray-700 transition">
                <div className="flex justify-between items-center">
                  <span>CRM</span> <FaAngleRight />
                </div>
                <ul className="absolute left-full top-0 w-64 bg-[#1e293b] shadow-2xl opacity-0 invisible group-hover/crm:opacity-100 group-hover/crm:visible transition-all duration-300 rounded-md border-l border-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <a href="">Customer Service Management</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <a href="">Financial Services Operations</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            {" "}
            <a href="">Our Services</a>{" "}
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            {" "}
            <a href="">Resources</a>{" "}
          </li>
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block border border-red-500 hover:bg-red-500 text-white font-semibold px-5 py-2 rounded-md transition-all duration-300">
          Contact Us
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white text-3xl p-2 hover:text-blue-400 transition-all"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-[#1e293b] z-50 shadow-2xl transition-max-height duration-500 overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <ul className="flex flex-col text-white font-semibold px-6 py-4 gap-2">
          <li className="py-3 border-b border-gray-700 hover:text-blue-400 transition">
            What We Do
          </li>
          <li className="py-3 border-b border-gray-700">
            <span className="font-bold text-blue-400">Business Solutions</span>
            <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-300">
              <li className="font-semibold text-gray-100 mt-2">
                IT Solutions:
              </li>
              <li>
                <a href="">Enterprise Asset Management</a>
              </li>
              <li>
                <a href="">IT Service Management</a>
              </li>
              <li>
                <a href="">IT Asset Management</a>
              </li>
              <li>
                <a href="">IT Operations Management</a>
              </li>
              <li>
                <a href="">Strategic Portfolio Management</a>
              </li>
              <li>
                <a href="">Enterprise Architecture</a>
              </li>

              <li className="font-semibold text-gray-100 mt-3">
                CRM Solutions:
              </li>
              <li>
                <a href="">Customer Service Management</a>
              </li>
              <li>
                <a href="">Financial Services Operations</a>
              </li>
            </ul>
          </li>
          <li className="py-3 border-b border-gray-700 hover:text-blue-400 transition">
            Our Services
          </li>
          <li className="py-3 hover:text-blue-400 transition">Resources</li>
        </ul>
      </div>
    </nav>
  );
}
