"use client";

import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Hero: React.FC = () => {
  
  return (
    <div className="w-full min-h-screen flex items-center" id="Home">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 lg:px-20 gap-16 md:gap-32">

        {/* Kiri: Foto profil + tombol WA */}
        <div className="flex flex-col items-center space-y-5">
          <div className="relative">
            <Image
              src="/file.svg"
              alt="Profile"
              width={900}
              height={900}
              className="border-4 border-[#6b63f1] shadow-3xl boder-white rounded-3xl bg-black"
            />

            {/* Ikon sosial miring ke atas kanan */}
          
          </div>

          {/* Tombol Contact WhatsApp */}
  <a
  href="https://wa.me/085646831030"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between gap-3 
             w-fit sm:w-auto
             bg-[#1e1b4b]/40 text-[#e2e0ff]
             px-4 sm:px-6 py-3 sm:py-3.5
             rounded-full border border-[#e2e0ff]/30 shadow-md font-medium
             transition-all duration-300 backdrop-blur-md
             hover:bg-[#6b63f1] hover:text-[#1e1b4b]
             active:scale-95"
>
  {/* Teks kiri */}
  <div className="text-base sm:text-lg font-semibold tracking-tight">
    Contact WA
  </div>

  {/* Icon kanan */}
  <div
    className="p-1.5 sm:p-2 border border-[#e2e0ff]/40 rounded-full 
               bg-[#e2e0ff]/10 hover:bg-[#e2e0ff]/80 hover:text-[#1e1b4b]
               transition-all duration-300 flex items-center justify-center"
  >
    <MdArrowOutward className="text-2xl sm:text-3xl" />
  </div>
</a>


        </div>

        {/* Kanan: About Me */}
        <div className="max-w-md text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-mrdium pb-5">Tentang saya</h1>
          <p className="md:text-lg leading-relaxed text-md text-[#1e1b4b]/80">
          Halo, saya Rohman — Web Developer lulusan Purwadhika, fokus pada React, Next.js, dan JavaScript. Kadang Saya suka membuat tampilan web yang bersih, cepat, dan responsif. Saya juga terus belajar teknologi baru agar setiap proyek lebih efisien, modern, dan mudah digunakan.
Selain itu, saya tertarik pada pengembangan UI/UX, optimasi performa, serta integrasi API agar aplikasi terasa lebih interaktif dan dinamis.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
