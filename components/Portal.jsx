import React from 'react'

const Portal = () => {
  return (
     <section className=" bg-[#0B0B0B]  text-white  border-t-2 border-amber-600 pb-[100px]">
      <div className="max-w-[1320px]  m-auto relative">
                <div>
          <img className="absolute -left-34 -top-8" src="/grouptwo.png" alt="" />
                <img className="absolute -right-34 -top-8" src="/groupthree.png" alt="" />
        </div>
        <div className="flex">
          <div className="w-[50%] p-4 pt-20">
            <img src="/portal.png" alt="" />
          </div>
          <div className="w-[50%]">
            <div className="pl-20 pt-30">
              <h3 className="font-bold text-[55px]">
                Your<span className="text-[#e05409]"> Portal to a Gritty,</span>
                Tech-Driven Future.
              </h3>
              <p className="pt-[63px] w-[480px]">
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements.{" "}
              </p>
              <div className="pt-15 flex gap-8">
                <button className="text-white hover:bg-[#ffffff57] border rounded-lg py-2 px-10 font-medium bg-linear-to-r from-[#F0B71F] to-[#E03609]
                cursor-pointer ">
                  Read More
                </button>
                 <button className="text-white bg-[#ffffff57] border rounded-lg  py-2 px-10 font-medium hover:bg-linear-to-r from-[#F0B71F] to-[#E03609]
                cursor-pointer ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Portal