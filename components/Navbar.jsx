"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isRed, setIsRed] = useState(true);

  const navItems = ["Home", "Pages", "Support", "Contact"];

  return (
    <section className="bg-[#0B0B0B] sticky top-0 z-50">
      <div className="max-w-[1320px] mx-auto py-5 px-4">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="Logo"
            className="cursor-pointer w-28 sm:w-32 md:w-auto"
          />

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-white">
            {navItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-[#E03609] transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-6">

            {/* TOGGLE */}
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isRed}
                onChange={(e) => setIsRed(e.target.checked)}
              />
              <div className="relative w-10 h-5 bg-gray-600 rounded-full peer-checked:bg-red-600
                after:content-[''] after:absolute after:top-0.5 after:left-[2px]
                after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all
                peer-checked:after:translate-x-5">
              </div>
            </label>

            <button className="bg-[#E03609] py-2 px-6 rounded-xl hover:bg-[#F0B71F] transition duration-300">
              Get started free
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            aria-label="Menu"
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute left-0 top-full w-full bg-[#111] text-white z-40
        transition-all duration-300 ease-in-out overflow-hidden
        ${open ? "max-h-[400px] py-6" : "max-h-0 py-0"}`}
      >
        <div className="px-6 flex flex-col gap-6">

          {/* LINKS */}
          <ul className="flex flex-col gap-5 text-lg">
            {navItems.map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-[#E03609] transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* TOGGLE */}
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isRed}
              onChange={(e) => setIsRed(e.target.checked)}
            />
            <div className="relative w-10 h-5 bg-gray-600 rounded-full peer-checked:bg-red-600
              after:content-[''] after:absolute after:top-0.5 after:left-[2px]
              after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all
              peer-checked:after:translate-x-5">
            </div>
            <span className="ml-3 text-sm">Red</span>
          </label>

          <button className="bg-[#E03609] py-3 rounded-xl hover:bg-[#F0B71F] transition duration-300">
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