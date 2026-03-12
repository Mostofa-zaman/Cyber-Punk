"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      number: "01.",
      title: "How do I stay updated on new content and events?",
      desc: "A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.",
    },
    {
      number: "02.",
      title: "How can I contact customer cyber punk support?",
      desc: "A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.",
    },
    {
      number: "03.",
      title: "Can I purchase cyberpunk-themed merchandise?",
      desc: "A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.",
    },
    {
      number: "04.",
      title:
        "Are there any rules or guidelines for participating in the community?",
      desc: "A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.",
    },
  ];

  return (
    <section className="bg-[#0B0B0B] text-white pb-[100px]">

      {/* heading */}
      <div className="max-w-[1320px] mx-auto pb-20 px-4 text-center">
        <h2 className="text-[34px] md:text-[45px] lg:text-[55px] font-bold max-w-[700px] mx-auto">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        <p className="text-[15px] md:text-[18px] font-medium mt-4 text-[#cccccc] max-w-[700px] mx-auto">
          A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements.
        </p>
      </div>

      {/* faq grid */}
      <div className="max-w-[1320px] mx-auto px-4 grid md:grid-cols-2 gap-y-16 gap-x-12">

        {faqs.map((faq, i) => {
          const isOpen = activeIndex === i;

          return (
            <div key={i} className="space-y-4">

              {/* question */}
              <div
                onClick={() => toggleFAQ(i)}
                className="flex gap-4 cursor-pointer"
              >
                <div className="text-[#E03609] font-bold text-3xl md:text-4xl">
                  {faq.number}
                </div>

                <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-snug max-w-[550px]">
                  {faq.title}
                </h3>
              </div>

              {/* answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p className="text-[#cccccc] md:pl-20 text-[14px] md:text-[15px] max-w-[450px] pb-2">
                  {faq.desc}
                </p>
              </div>

              {/* gradient line */}
              <div className="h-[2px] w-full md:max-w-[520px] md:ml-20 bg-gradient-to-r from-[#E03609] to-[#F0B71F]"></div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;