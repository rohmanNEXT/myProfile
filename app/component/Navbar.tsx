"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CButton } from "@coreui/react";
import { MdArrowOutward } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkldn = () => {
    window.location.assign(
      "https://www.linkedin.com/in/muhammad-rachman-7b61b3276/"
    );
  };

  const goHome = () => {
    window.location.assign("https://my-profile-now.vercel.app/");
  };

  const goId = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    if (open) setOpen(false);
  };

  return (
    <div className="w-full flex justify-center pb-10">
      {/* Navbar utama */}
      <nav className="fixed z-50 bg-[#1e1b4b]/40 text-[#f0f9ff] backdrop-blur-md border-b rounded-full my-3 flex justify-center border border-[#8881f8] px-2 sm:px-10 md:px-16 lg:px-1">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-10 md:px-16 lg:px-1 py-4">
          {/* Logo */}
          <div
            onClick={goHome}
            className="text-2xl sm:text-3xl font-medium cursor-pointer tracking-tight px-4 cursor-pointer"
          >
            Rohman<span className="text-[#f9d38e]">.dev</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-10 text-lg font-light px-6">
            <button onClick={() => goId("Home")} className="hover:text-blue-400 transition cursor-pointer">
              Home
            </button>
            <button onClick={() => goId("Project")} className="hover:text-blue-400 transition cursor-pointer">
              Project 
            </button>
            <button onClick={() => goId("YouTube")} className="hover:text-blue-400 transition items-center flex cursor-pointer">
              YouTube <MdArrowOutward className="ml-2"/>
            </button>
            <button onClick={() => goId("Contact")} className="hover:text-blue-400 transition cursor-pointer">
              Kontak
            </button>
          </div>

          {/* Tombol LinkedIn Desktop */}
          <div className="hidden md:block px-4 pl-20">
            <CButton
              onClick={linkldn}
              color="light"
              variant="outline"
              className="text-[#e1f1fd] border border-[#e1f1fd] rounded-full px-4 py-1 hover:bg-[#e1f1fd] hover:text-[#0a2e47] transition cursor-pointer"
            >
              linkeldn 
            </CButton>
          </div>

          {/* Tombol Menu Mobile */}
          <button
            className="md:hidden text-[#f0f9ff]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* ✅ MENU MOBILE DIPINDAH KE LUAR NAVBAR */}
      {open && (
     <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 md:hidden flex flex-col items-center w-[90%] bg-[#1e1b4b]/95 backdrop-blur-md border border-[#e1f1fd]/20 rounded-2xl shadow-xl py-6 space-y-3 text-base animate-slideDown cursor-pointer">

          <button
            onClick={() => goId("Home")}
            className="w-full text-center py-2 text-[#e0f2fe] hover:bg-[#38bdf8]/20 hover:text-[#bae6fd] transition rounded-lg cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => goId("Project")}
            className="w-full text-center py-2 text-[#e0f2fe] hover:bg-[#38bdf8]/20 hover:text-[#bae6fd] transition rounded-lg cursor-pointer"
          >
           Project
          </button>
          <button
            onClick={() => goId("YouTube")}
            className="w-full text-center py-2 text-[#e0f2fe] hover:bg-[#38bdf8]/20 hover:text-[#bae6fd] transition rounded-lg flex items-center justify-center cursor-pointer"
          >
            YouTube <MdArrowOutward className="ml-2"/>
          </button>
          <button
            onClick={() => goId("Contact")}
            className="w-full text-center py-2 text-[#e0f2fe] hover:bg-[#38bdf8]/20 hover:text-[#bae6fd] transition rounded-lg cursor-pointer"
          >
            Kontak
          </button>

          <CButton
            onClick={() => linkldn()}
            color="light"
            variant="outline"
            className="text-[#e0f2fe] border border-[#7dd3fc]/40 rounded-full px-5 py-2 
              hover:bg-[#7dd3fc] hover:text-[#0f172a] transition cursor-pointer"
          >
            linkldn 
          </CButton>
        </div>
      )}
    </div>
  );
}
