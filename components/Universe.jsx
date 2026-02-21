import React from "react";

const Universe = () => {
  const features = [
    {
      img: "/unione.png",
      title: "Discover the Future",
      desc: "Explore the high-tech, low-life world where the lines between humanity",
    },
    {
      img: "/unitwo.png",
      title: "Explore Features",
      desc: "Explore the high-tech, low-life world where the lines between humanity",
    },
    {
      img: "/unithree.png",
      title: "Stay Connected",
      desc: "Explore the high-tech, low-life world where the lines between humanity",
    },
  ];

  return (
    <section className="bg-[#0B0B0B] text-white border-t-2 border-amber-600 pb-16 lg:pb-[150px] overflow-hidden">
      <div className="max-w-[1320px] w-11/12 mx-auto relative pt-14 lg:pt-20">

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

        {/* Heading */}
        <div className="text-center max-w-[800px] mx-auto">

          <h1 className="text-[32px] sm:text-[42px] lg:text-[55px] font-bold leading-tight">
            Dive into the Cybernetic{" "}
            <span className="block bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
              Universe
            </span>
          </h1>

          <p className="text-[15px] lg:text-[18px] font-medium pt-4 lg:pt-5 text-gray-300 leading-7">
            A realm where advanced technology meets dystopian reality. Our
            website is your gateway to a universe of neon lights, gritty streets,
            and cybernetic enhancements.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 lg:pt-15">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-6 max-w-[430px] mx-auto"
            >
              <div className="w-[70px] h-[70px] lg:w-[81px] lg:h-[81px] border-2 rounded-[20px] border-amber-600 p-4 flex items-center justify-center shrink-0">
                <img src={item.img} alt={item.title} />
              </div>

              <div>
                <h3 className="text-[20px] lg:text-[28px] font-medium pb-2 lg:pb-4">
                  {item.title}
                </h3>

                <p className="text-[15px] lg:text-[18px] font-medium text-gray-300 leading-7 max-w-[260px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Universe;