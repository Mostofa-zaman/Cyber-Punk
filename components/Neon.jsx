import React from "react";

const Neon = () => {
  return (
    <section className="bg-[#0B0B0B] text-white border-t-2 border-amber-600 pb-16 lg:pb-[100px] overflow-hidden">
      <div className="max-w-[1320px] w-11/12 mx-auto relative">

        {/* Decorative Images */}
        <img className="absolute -left-20 lg:-left-34 -top-8" src="/grouptwo.png" alt="" />
        <img className="absolute -right-20 lg:-right-34 -top-8" src="/groupthree.png" alt="" />

        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-10">

          <div className="lg:w-1/2 py-10 lg:py-30">

            <h1 className="font-bold text-[32px] sm:text-[40px] lg:text-[57px] leading-tight max-w-[650px]">
              Where{" "}
              <span className=" font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                Neon Dreams
              </span>

              <span className="block text-[#E03609] font-semibold">
                & Digital
              </span>

              Nightmares Converge.
            </h1>

            <p className="py-8 lg:py-20 font-medium text-[15px] lg:text-[18px] leading-7 text-gray-300 max-w-[600px]">
              A realm where advanced technology meets dystopian reality. Our
              website is your gateway to a universe of neon lights, gritty
              streets, and cybernetic enhancements. Explore the high-tech,
              low-life world where the lines between humanity and machinery blur.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 lg:gap-x-15">
              {[
                { num: "89,2K+", text: "Discover the Future" },
                { num: "7001+", text: "Stories and Lore" },
                { num: "3,124+", text: "Art and Design" },
              ].map((item, i) => (
                <div key={i}>
                  <span className="text-[32px] lg:text-[48px] font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                    {item.num}
                  </span>
                  <p className="text-sm lg:text-base">{item.text}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="lg:w-1/2">
            <img className="py-10 lg:py-20 w-full max-w-[600px] mx-auto" src="/neonone.png" alt="" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">

          <div className="lg:w-1/2 lg:pr-10">
            <img className="w-full max-w-[550px] mx-auto" src="/neontwo.png" alt="" />
          </div>

          <div className="lg:w-1/2">

            <h1 className="font-bold text-[32px] sm:text-[40px] lg:text-[57px] leading-tight max-w-[650px]">
              Unveil{" "}
              <span className="block font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
                the Secrets
              </span>

              <span className="block">
                of the Cybernetic Underworld
              </span>
            </h1>

            <p className="py-6 lg:py-15 font-medium text-[15px] lg:text-[18px] text-gray-300 leading-7 max-w-[580px]">
              A realm where advanced technology meets dystopian reality. Our
              website is your gateway to a universe of neon lights, gritty streets,
              and cybernetic enhancements.
            </p>

            <div className="w-full max-w-[636px] border-2 rounded-[20px] border-[#E03609] p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">

                <img src="/neonthree.png" alt="" />

                <div>
                  <h3 className="text-[20px] lg:text-[28px] font-medium">
                    Join the Revolution
                  </h3>

                  <p className="text-[15px] lg:text-[18px] font-medium pt-4 text-gray-300 leading-7 max-w-[400px]">
                    Explore the high-tech, low-life world where the lines between
                    humanity and machinery blur.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Neon;