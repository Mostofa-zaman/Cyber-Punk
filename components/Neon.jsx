import React from 'react'

const Neon = () => {
  return (
    <section className='bg-[#0B0B0B]  text-white  border-t-2 border-amber-600 pb-[100px]'>
        <div className="max-w-[1320px] mx-auto relative group">
            <img className="absolute -left-34 -top-8" src="/grouptwo.png" alt="" />
                <img className="absolute -right-34 -top-8" src="/groupthree.png" alt="" />

            <div className="flex">
                
                <div className="w-1/2 py-30">
                <h1 className='font-bold text-[57px]'>Where <span className='text-[57px] font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent'>Neon Dreams <br />  <span className='text-[#E03609]'> & Digital</span></span> Nightmares <br /> Converge.</h1>
                 <p className='py-20 font-medium text-[18px]'>A realm where advanced technology meets dystopian reality. Oubr website <br /> is your gateway to a universe of neon lights, gritty streets, and cybernetic <br /> enhancements. Explore the high-tech, low-life world where the lines <br /> between humanity and machinery blur.</p>
                <div className="flex gap-x-15">
                     <div className="">
                    <span className='text-[48px] font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent'>89,2K+</span>
                    <p className=''>Discover the Future</p>
                 </div>
                  <div className="">
                    <span className='text-[48px] font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent'>7001+</span>
                    <p className=''>Stories and Lore</p>
                 </div>
                  <div className="">
                    <span className='text-[48px] font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent'>3,124+</span>
                    <p className=''>Art and Design</p>
                 </div>
                </div>
                </div>
                <div className="w-1/2">
                <img className='py-20' src="/neonone.png" alt="" />
                </div>
                
            </div>
            <div className="flex">                                                                
                
                <div className="w-1/2 pr-10 ">
                <img className='w-[550px] h-full' src="/neontwo.png" alt="" />
               
                </div>
                <div className="w-1/2">
                 <h1 className='font-bold text-[57px]'> Unveil  <span className='text-[57px] font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent'> the Secrets <br />of the</span> Cybernetic Underworld</h1>
                 <p className='py-15 font-medium text-[18px]'>A realm where advanced technology meets dystopian reality. Our <br /> website  is your gateway to a universe of neon lights, gritty streets, <br /> and cybernetic  enhancements.</p>
                <div className="w-[636px] h-[263px] border-2 rounded-[20px] border-[#E03609] p-8">
                     <div className="flex">
                        <img src="neonthree.png" alt="" />
                       <div className=" px-15 py-5">
                             <h3 className='text-[28px] font-medium'>Join the Revolution</h3>
                             <p className='text-[18px] font-medium pt-[22px] '>Explore the high-tech, low-life <br /> world where the lines between <br /> humanity and machinery blur.</p>
                       </div>
                 </div>
                </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Neon