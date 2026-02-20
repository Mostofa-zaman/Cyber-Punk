"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isRed, setIsRed] = useState(true);

  return (
    <section className="bg-[#0B0B0B] relative">
      <div className="max-w-[1320px] mx-auto py-5 px-4">

        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="Cyberpunk nav"
            className="cursor-pointer w-28 sm:w-32 md:w-auto"
          />

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-white">
            <li className="cursor-pointer hover:text-[#E03609]">Home</li>
            <li className="cursor-pointer hover:text-[#E03609]">Pages</li>
            <li className="cursor-pointer hover:text-[#E03609]">Support</li>
            <li className="cursor-pointer hover:text-[#E03609]">Contact</li>
          </ul>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-6">

            {/* TOGGLE */}
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isRed}
                onChange={(e) => setIsRed(e.target.checked)}
              />
              <div className="relative w-9 h-5 bg-gray-700 rounded-full peer-checked:bg-red-600
                  after:content-[''] after:absolute after:top-0.5 after:left-[2px]
                  after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all
                  peer-checked:after:translate-x-full"></div>
            </label>

            <button className="bg-[#E03609] py-2 px-6 rounded-xl hover:bg-[#F0B71F] text-white transition">
              Get started free
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-3xl z-50"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-[#111] text-white transform
          transition-transform duration-300 ease-in-out md:hidden z-40 shadow-lg
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6">

          {/* CLOSE BUTTON */}
          <button
            className="self-end text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* MENU LINKS */}
          <ul className="flex flex-col gap-5 text-lg">
            <li className="cursor-pointer hover:text-[#E03609]">Home</li>
            <li className="cursor-pointer hover:text-[#E03609]">Pages</li>
            <li className="cursor-pointer hover:text-[#E03609]">Support</li>
            <li className="cursor-pointer hover:text-[#E03609]">Contact</li>
          </ul>

          {/* TOGGLE */}
          <label className="inline-flex items-center cursor-pointer mt-4">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isRed}
              onChange={(e) => setIsRed(e.target.checked)}
            />
            <div className="relative w-9 h-5 bg-gray-700 rounded-full peer-checked:bg-red-600
              after:content-[''] after:absolute after:top-0.5 after:left-[2px]
              after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all
              peer-checked:after:translate-x-full"></div>
            <span className="ml-3 text-sm">Red</span>
          </label>

          <button className="bg-[#E03609] py-3 rounded-xl hover:bg-[#F0B71F] transition">
            Get started free
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </section>
  );
};

export default Navbar;
