
"use client";

import React, { useState } from "react";
const Navbar = () => {
   const [open, setOpen] = useState(false);
  return (
   
  <section className="bg-[#0B0B0B] lg:pb-10">
      <div className="lg:max-w-[1320px] mx-auto py-5 px-4">

        {/* TOP BAR */}
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <div>
            <img
              src="/logo.png"
              alt="Cyberpunk nav"
              className="mx-auto cursor-pointer w-32 md:w-auto"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <ul className="flex md:gap-10 lg:gap-30 text-white text-[16px]">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Pages</li>
              <li className="cursor-pointer">Support</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* DESKTOP BUTTON */}
          <button className="hidden md:block bg-[#E03609] md:py-3 md:px-4 lg:py-4 lg:px-10 rounded-2xl hover:bg-[#F0B71F] cursor-pointer text-white">
            Get started free
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="md:hidden mt-5 space-y-5 text-white">
            <ul className="flex flex-col gap-4 text-[18px]">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Pages</li>
              <li className="cursor-pointer">Support</li>
              <li className="cursor-pointer">Contact</li>
            </ul>

            <button className="bg-[#E03609] py-3 px-4 rounded-xl hover:bg-[#F0B71F] cursor-pointer w-full text-center">
              Get started free
            </button>
          </div>
        )}
      </div>
    </section>

  )
}

export default Navbar