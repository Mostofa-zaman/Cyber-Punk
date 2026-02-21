import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#0B0B0B] text-white border-t-2 border-amber-600 pb-16 lg:pb-[100px] overflow-hidden">
      <div className="max-w-[1320px] w-11/12 mx-auto pt-14 lg:pt-20 relative">

        {/* Decorative Images */}
        <img
          className="absolute -left-20 lg:-left-34 -top-8 pointer-events-none"
          src="/grouptwo.png"
          alt=""
        />
        <img
          className="absolute -right-20 lg:-right-34 -top-8 pointer-events-none"
          src="/groupthree.png"
          alt=""
        />

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* About */}
          <div className="lg:col-span-2">
            <h2 className="text-[20px] lg:text-[22px] font-semibold pb-6 lg:pb-[30px]">
              Cyber.AI - Cyber Punk Website
            </h2>

            <p className="text-[15px] lg:text-[18px] font-medium max-w-[420px] leading-7 lg:leading-8 text-[#CBCBCB]">
              Explore the high-tech, low-life world where the lines between
              humanity
            </p>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-[16px] lg:text-[18px] font-medium pb-3">
              Information
            </h3>

            <ul className="flex flex-col gap-2">
              <li className="footer-link">Press Centre</li>
              <li className="footer-link">Our Blog</li>
              <li className="footer-link">Term and Condition</li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-[16px] lg:text-[18px] font-medium pb-3">
              Menu
            </h3>

            <ul className="flex flex-col gap-2">
              <li className="footer-link">About</li>
              <li className="footer-link">Services</li>
              <li className="footer-link">Blog</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[16px] lg:text-[18px] font-medium pb-3">
              Contact
            </h3>

            <ul className="flex flex-col gap-2">
              <li className="footer-link">Phone : +123 456 789</li>
              <li className="footer-link">Email : @example.com</li>
              <li className="footer-link">Address Line 01</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <footer className="pt-12 lg:pt-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">

            <p className="text-[14px] text-gray-300">
              © Cyber.AI – Cyber Punk 2024. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex items-center gap-6 lg:gap-8">
              <a href="#" className="footer-link">Terms</a>
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Cookies</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {["", "", ""].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-[#e06609] hover:text-[#e06609] hover:shadow-[0_0_10px_#e06609] transition duration-300 cursor-pointer"
                >
                  {/* icon */}
                </div>
              ))}
            </div>

          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;