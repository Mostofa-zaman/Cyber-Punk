
import React from 'react'


const Banner = () => {
    return (

        <section className=' bg-[#0B0B0B]  text-white  border-t-2 border-amber-600 pb-[100px] '>

            <div className='max-w-[1320px] mx-auto relative group '>
                <img className="absolute -left-34 -top-8" src="/grouptwo.png" alt="" />
                <img className="absolute -right-34 -top-8" src="/groupthree.png" alt="" />
                <div className=" pt-20 absolute">
                    <img src="/bannerimg.png" alt="Cyberpunk Banner" className="mx-auto max-w-fit  w-[862px] h-[811px] ml-50" />
                </div>

                <div className=' '>
                    <div className=" pt-5">
                        <h1 className='text-[196px] text-white font-bold leading-none text-center ' >Cyber Punk</h1>
                    </div>

                    <div className="flex justify-between">
                        <div className="pt-[300px] flex">
                            <div className="">
                                <h4 className='font-semibold text-[24px] pb-[18px]'>. Stories & Lore</h4>
                                <p className='font-medium text-[16px] text-[#DDDDDD] w-[250px] pl-3'>Dive into compelling narratives set in a dystopian future.</p>
                            </div>
                            <div className="">
                                <img src='/groupone.png' alt='group' className='absolute pt-5 ' />
                            </div>
                        </div>

                        <div className="pt-[300px]">
                            <h4 className='font-semibold text-[36px]  text-end text-[#feffffdb]'>Events and <br />Updates</h4>

                            <p className='w-[263px] text-end pt-11 pb-[58px]'> Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
                            <button className='bg-[#E03609] hover:bg-[#F0B71F]  rounded-[5px] px-5  py-2 text-end items-end ml-35'>
                                <a className='font-semibold text-[17px] text-end items-end ' href="">Read More</a>
                            </button>

                        </div>
                    </div>

                </div>
                <div className="">

                    <div className="">
                        <div className=" flex  bg-[#00000084] absolute w-[655px] h-[328px] p-[33px] border-2 border-[#E03609] rounded-[20px] ">
                            <img src="/bannercard.png" alt="" />
                            <div className=" px-11 py-5  ">
                                <span className='text-[57px] font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent'>76,285K+</span>
                                <h3 className='text-[28px] font-medium pt-[22px] pb-[22px]'> Experience the Future</h3>
                                <p className='text-[18px] text-[#ddddddc2] font-medium'>Explore the high-tech, low-life world </p>
                                <p className='text-[18px] text-[#dddddda9] font-medium'>where the lines between</p>
                            </div>

                        </div>
                      
                        <div className=" flex ">
                              <div className="pl-[800px]  pt-[100px]">
                            <h2 className='text-white text-[36px] font-semibold pb-[44px]'>Art and <br /> Design</h2>
                            <p className='text-white font-medium text-[18px]'>Feast your eyes on stunning <br /> visuals and concept art that <br /> bring the cyberpunk</p>
                        </div>
 


                              
                            <div className=" ml-[1065px] mt-20 absolute px-9 py-2.5  justify-end w-[258px] h-[251px] border-2 border-[#E03609] rounded-[20px] ">
                            <span className='bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent text-[83px] font-semibold '>17+</span>
                            <p className='text-[28px] font-medium'>Years of <br /> Experiences</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        //  <section className='bg-[#0B0B0B] text-white border-t-2 border-amber-600 pb-[100px]'>

        //     <div className='max-w-[1320px] mx-auto relative group'>

        //         {/* SIDE DECOR */}
        //         <img className="absolute -left-34 -top-8 hidden lg:block" src="/grouptwo.png" alt="" />
        //         <img className="absolute -right-34 -top-8 hidden lg:block" src="/groupthree.png" alt="" />

        //         {/* ⭐ MAIN BANNER IMAGE — ALWAYS BEHIND EVERYTHING */}
        //         <div className="absolute left-1/2 -translate-x-1/2 top-10 md:top-20 ">
        //             <img
        //                 src="/bannerimg.png"
        //                 alt="Cyberpunk Banner"
        //                 className="mx-auto w-[300px] sm:w-[450px] md:w-[650px] lg:w-[862px] h-auto lg:h-[850px] "
        //             />
        //         </div>

        //         {/* TITLE */}
        //         <div className='pt-[320px] md:pt-[450px] lg:pt-20'>
        //             <h1 className='text-[60px] sm:text-[100px] md:text-[150px] lg:text-[196px] font-bold leading-none text-center'>
        //                 Cyber Punk
        //             </h1>
        //         </div>

        //         <div className="flex flex-col lg:flex-row justify-between">

        //             {/* LEFT BLOCK */}
        //             <div className="pt-[150px] md:pt-[250px] lg:pt-[200px] flex relative">
        //                 <div>
        //                     <h4 className='font-semibold text-[24px] pb-[18px]'>. Stories & Lore</h4>
        //                     <p className='font-medium text-[16px] text-[#DDDDDD] w-[250px] pl-3'>
        //                         Dive into compelling narratives set in a dystopian future.
        //                     </p>
        //                 </div>
        //                 <img src='/groupone.png' alt='group' className='absolute pt-5 hidden md:block ml-50' />
        //             </div>

        //             {/* RIGHT BLOCK */}
        //             <div className="pt-[150px] md:pt-[250px] lg:pt-[300px] text-center lg:text-right">
        //                 <h4 className='font-semibold text-[36px] text-[#feffffdb]'>
        //                     Events and <br /> Updates
        //                 </h4>

        //                 <p className='w-[263px] mx-auto lg:mx-0 pt-11 pb-[58px]'>
        //                     Explore the high-tech, low-life world where the lines between humanity and machinery blur.
        //                 </p>

        //                 <button className='bg-[#E03609] hover:bg-[#F0B71F] rounded-[5px] px-5 py-2'>
        //                     <a className='font-semibold text-[17px]' href="">Read More</a>
        //                 </button>
        //             </div>
        //         </div>

        //         {/* MAIN CARD */}
        //         <div className="flex ">
        //             <div className="flex bg-[#00000084] absolute w-[655px] h-[328px] p-[33px] border-2 border-[#E03609] rounded-[20px]">
        //                 <img src="/bannercard.png" alt="" />
        //                 <div className="px-11 py-5">
        //                     <span className='text-[57px] font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent'>76,285K+</span>
        //                     <h3 className='text-[28px] font-medium pt-[22px] pb-[22px]'> Experience the Future</h3>
        //                     <p className='text-[18px] text-[#ddddddc2] font-medium'>Explore the high-tech, low-life world </p>
        //                     <p className='text-[18px] text-[#dddddda9] font-medium'>where the lines between</p>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* BOTTOM RIGHT SECTION */}
        //         <div className="flex">

        //             <div className="pl-[800px] pt-[100px]">
        //                 <h2 className='text-white text-[36px] font-semibold pb-[44px]'>
        //                     Art and <br /> Design
        //                 </h2>
        //                 <p className='text-white font-medium text-[18px]'>
        //                     Feast your eyes on stunning <br /> visuals and concept art that <br /> bring the cyberpunk
        //                 </p>
        //             </div>

        //             <div className="ml-[1065px] mt-20 absolute px-9 py-2.5 w-[258px] h-[251px] border-2 border-[#E03609] rounded-[20px]">
        //                 <span className='bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent text-[83px] font-semibold'>17+</span>
        //                 <p className='text-[28px] font-medium'>Years of <br /> Experiences</p>
        //             </div>
        //         </div>

        //     </div>
        // </section>
    )
}

export default Banner