import React from "react";

const Dive = () => {
  return (
    <section className="bg-[#0B0B0B] text-white border-t-2 border-amber-600 pb-20 lg:pb-[100px] overflow-hidden">
      <div className="max-w-[1320px] w-11/12 mx-auto relative dive">

        {/* Decorative Images */}
        <img
          className="absolute -left-16 lg:-left-34 -top-8 w-24 lg:w-auto"
          src="/grouptwo.png"
          alt=""
        />
        <img
          className="absolute -right-16 lg:-right-34 -top-8 w-24 lg:w-auto"
          src="/groupthree.png"
          alt=""
        />

        {/* Background Wrapper */}
        <div className="divebgimg">

          <div className="pl-4 sm:pl-8 lg:pl-[45px] pb-12 lg:pb-[90px] pt-16 sm:pt-24 lg:pt-[170px] flex flex-col lg:flex-row">

            {/* Left Content */}
            <div>
              <h2 className="text-[28px] sm:text-[40px] md:text-[52px] lg:text-[68px] 
              leading-tight lg:leading-20 
              w-full lg:w-[640px] font-bold">
                Greetings! Dive into the Cybernetic Universe
              </h2>

              <p className="w-full lg:w-[640px] leading-7 sm:leading-8 lg:leading-9 
              pt-6 sm:pt-10 lg:pt-[52px] 
              text-[14px] sm:text-[16px] lg:text-[18px] text-[#dddddd]">
                Our website is your gateway to a universe of neon lights,
                gritty streets, and cybernetic enhancements. Explore the
                high-tech, low-life world where the lines between humanity
                and machinery blur.
              </p>
            </div>

            {/* Right Card */}
            <div className="pt-10 lg:pt-20 lg:pl-50 flex justify-center lg:justify-start">
              <div className="border py-8 sm:py-10 lg:py-14 px-6 sm:px-10 lg:px-[50px] 
              bg-[#ffffff49] border-[#F0B71F] rounded-[5px]">

                <ul className="flex flex-col gap-y-5 lg:gap-y-7">

                  <li className="flex gap-4 lg:gap-5 text-[18px] sm:text-[20px] lg:text-[25px] items-center">
                    <div className="h-4 w-4 lg:h-5 lg:w-5 bg-amber-500"></div>
                    Join the Revolution
                  </li>

                  <li className="flex gap-4 lg:gap-5 text-[18px] sm:text-[20px] lg:text-[25px] items-center">
                    <div className="h-4 w-4 lg:h-5 lg:w-5 bg-red-500"></div>
                    Art and Design
                  </li>

                  <li className="flex gap-4 lg:gap-5 text-[18px] sm:text-[20px] lg:text-[25px] items-center">
                    <div className="h-4 w-4 lg:h-5 lg:w-5 bg-amber-500"></div>
                    Tech and Gear
                  </li>

                  <li className="flex gap-4 lg:gap-5 text-[18px] sm:text-[20px] lg:text-[25px] items-center">
                    <div className="h-4 w-4 lg:h-5 lg:w-5 bg-red-500"></div>
                    Stories and Lore
                  </li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Dive;