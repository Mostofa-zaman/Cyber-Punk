import React from "react";

const Portal = () => {
  return (
    <section className="bg-[#0B0B0B] text-white border-t-2 border-amber-600 pb-16 lg:pb-[100px] overflow-hidden">
      <div className="max-w-[1320px] w-11/12 mx-auto relative">

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

        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Image */}
          <div className="lg:w-1/2 p-4 pt-10 lg:pt-20">
            <img
              className="w-full max-w-[600px] mx-auto"
              src="/portal.png"
              alt=""
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">

            <div className="lg:pl-20 pt-6 lg:pt-30">

              <h3 className="font-bold text-[32px] sm:text-[42px] lg:text-[55px] leading-tight max-w-[600px]">
                Your{" "}
                <span className="text-[#e05409]">
                  Portal to a Gritty,
                </span>{" "}
                Tech-Driven Future.
              </h3>

              <p className="pt-6 lg:pt-[63px] max-w-[480px] text-gray-300 leading-7 text-[15px] lg:text-base">
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements.
              </p>

              {/* Buttons */}
              <div className="pt-8 lg:pt-15 flex flex-wrap gap-6">

                <button className="text-white border rounded-lg py-2 px-8 lg:px-10 font-medium bg-gradient-to-r from-[#F0B71F] to-[#E03609] hover:bg-[#ffffff57] transition cursor-pointer">
                  Read More
                </button>

                <button className="text-white bg-[#ffffff57] border rounded-lg py-2 px-8 lg:px-10 font-medium hover:bg-gradient-to-r from-[#F0B71F] to-[#E03609] transition cursor-pointer">
                  Learn More
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portal;