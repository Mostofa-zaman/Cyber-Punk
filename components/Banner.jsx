import React from "react";

const Banner = () => {
  return (
    <section className="bg-[#0B0B0B] text-white border-t-2 border-amber-600 pb-20 lg:pb-[100px] overflow-hidden">
      <div className="max-w-[1320px] w-11/12 mx-auto relative group">

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

        {/* Hero Image */}
        <div className="pt-10 lg:pt-20 absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0">
          <img
            src="/bannerimg.png"
            alt="Cyberpunk Banner"
            className="mx-auto w-[320px] sm:w-[500px] md:w-[650px] lg:w-[862px] h-auto lg:h-[811px] lg:ml-50"
          />
        </div>

        {/* Heading */}
        <div className="pt-5">
          <h1 className="text-[48px] sm:text-[80px] md:text-[120px] lg:text-[196px] font-bold leading-none text-center">
            Cyber Punk
          </h1>
        </div>

        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between">

          {/* Left */}
          <div className="pt-20 lg:pt-[300px] flex relative">
            <div>
              <h4 className="font-semibold text-[18px] sm:text-[20px] lg:text-[24px] pb-4">
                . Stories & Lore
              </h4>
              <p className="font-medium text-[14px] sm:text-[15px] lg:text-[16px] text-[#DDDDDD] w-[200px] sm:w-[250px] pl-3">
                Dive into compelling narratives set in a dystopian future.
              </p>
            </div>

            <img
              src="/groupone.png"
              alt="group"
              className="absolute pt-5 w-20 sm:w-auto left-50"
            />
          </div>

          {/* Right */}
          <div className="pt-16 lg:pt-[300px] text-center lg:text-end">
            <h4 className="font-semibold text-[24px] sm:text-[28px] lg:text-[36px] text-[#feffffdb]">
              Events and <br /> Updates
            </h4>

            <p className="w-[220px] sm:w-[263px] mx-auto lg:ml-auto text-[14px] sm:text-[15px] lg:text-[16px] pt-6 lg:pt-11 pb-8 lg:pb-[58px]">
              Explore the high-tech, low-life world where the lines between
              humanity and machinery blur.
            </p>

            <button className="bg-[#E03609] hover:bg-[#F0B71F] rounded-[5px] px-5 py-2 font-semibold text-[15px] sm:text-[17px] lg:ml-35">
              Read More
            </button>
          </div>
        </div>

        {/* Middle Card */}
        <div className="relative">

          <div className="flex flex-col sm:flex-row bg-[#00000084] absolute 
          w-[90%] sm:w-[655px] h-auto sm:h-[328px] p-5 sm:p-[33px] 
          border-2 border-[#E03609] rounded-[20px]">

            <img
              src="/bannercard.png"
              alt=""
              className="w-32 sm:w-auto mx-auto sm:mx-0"
            />

            <div className="px-4 sm:px-11 py-4 sm:py-5 text-center sm:text-left">
              <span className="text-[32px] sm:text-[45px] lg:text-[57px] font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                76,285K+
              </span>

              <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium pt-4 pb-4">
                Experience the Future
              </h3>

              <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#ddddddc2] font-medium">
                Explore the high-tech, low-life world
              </p>
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#dddddda9] font-medium">
                where the lines between
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row">

            <div className="lg:pl-[800px] pt-16 lg:pt-[100px] text-center lg:text-left">
              <h2 className="text-white text-[24px] sm:text-[28px] lg:text-[36px] font-semibold pb-6 lg:pb-[44px]">
                Art and <br /> Design
              </h2>

              <p className="text-white font-medium text-[14px] sm:text-[16px] lg:text-[18px]">
                Feast your eyes on stunning <br />
                visuals and concept art that <br />
                bring the cyberpunk
              </p>
            </div>

            <div
              className="lg:ml-[1065px] mt-10 lg:mt-20 absolute 
              px-6 py-3 lg:px-9 lg:py-2.5 justify-end 
              w-[200px] sm:w-[258px] h-auto lg:h-[251px] 
              border-2 border-[#E03609] rounded-[20px]"
            >
              <span className="bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent text-[40px] sm:text-[60px] lg:text-[83px] font-semibold">
                17+
              </span>

              <p className="text-[18px] sm:text-[22px] lg:text-[28px] font-medium">
                Years of <br /> Experiences
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;