import React from 'react'

const FAQ = () => {
    const faqs = [
    {
      number: "01.",
      title: "How do I stay updated on new content and events?",
      desc: "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
    {
      number: "02.",
      title: "How can I contact customer cyber punk support?",
      desc: "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
    {
      number: "03.",
      title: "Can I purchase cyberpunk-themed merchandise?",
      desc: "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
    {
      number: "04.",
      title: "Are there any rules or guidelines for participating in the community?",
      desc: "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
  ];
  return (
   <section className='bg-[#0B0B0B]  text-white  pb-[100px]'>

        <div className="max-w-[1320px] mx-auto pb-30">
            <div className=" text-center">
                <h2 className='text-[55px] font-bold max-w-[700px] mx-auto'>Frequently Asked <span className='bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent'> Questions</span></h2>
                <p className='text-[18px] font-medium'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe <br /> of neon lights, gritty streets, and cybernetic enhancements. </p>
            </div>
        </div>
    <div className="max-w-[1320px] mx-auto grid grid-cols-2 gap-y-20 gap-x-12">
        

        {faqs.map((faq, i) => (
          <div key={i} className="space-y-4">

            {/* NUMBER + BOX */}
            <div className="flex gap-4">
              <div className=" px-3  text-[#E03609] font-bold text-4xl">
                {faq.number}
              </div>

              <h3 className="text-[28px]  font-semibold leading-snug max-w-[550px]">
                {faq.title}
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[#cccccc] pl-22 text-[15px] max-w-[450px]">
              {faq.desc}
            </p>

            {/* GRADIENT LINE */}
            <div className="h-[2px] w-[520px] ml-22  bg-gradient-to-r from-[#E03609] to-[#F0B71F]"></div>
          </div>
        ))}

      </div>
   </section>
  )
}

export default FAQ