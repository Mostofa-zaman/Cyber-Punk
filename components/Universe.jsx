import React from 'react'

const Universe = () => {
  return (
   <section className='bg-[#0B0B0B]  text-white  border-t-2 border-amber-600  pb-[150px]'>
    <div className="max-w-[1320px] mx-auto relative pt-20  ">

        <img className="absolute -left-34 -top-8" src="/grouptwo.png" alt="" />
                <img className="absolute -right-34 -top-8" src="/groupthree.png" alt="" />

                <div className="">
                   <div className="justify-center text-center">
                    
                    <h1 className='text-[55px] font-bold'>Dive into the Cybernetic <br /> <span className='bg-gradient-to-r from-[#E03609] to-[#F0B71F] bg-clip-text text-transparent'>Universe</span></h1>
                    <p className='text-[18px] font-medium pt-5'>A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe <br /> of neon lights, gritty streets, and cybernetic enhancements. </p>
                    </div>
                    <div className=" flex justify-between pt-15">
                        <div className="w-[429px] h-[156px] flex">
                         <div className="w-[81px] h-[81px] border-2 rounded-[20px] border-amber-600 p-4">
                               <img className='' src="/unione.png" alt="" />
                         </div>
                            <div className=" pl-10">
                                <h3 className=' text-[28px] font-medium pb-4'>Discover the Future</h3>
                                <p className='w-[250px] text-[18px] font-medium'>Explore the high-tech, low-life world where the lines between humanity </p>
                            </div>
                        </div>
                        <div className="w-[429px] h-[156px] flex">
                         <div className="w-[81px] h-[81px] border-2 rounded-[20px] border-amber-600 p-4">
                               <img className='' src="/unitwo.png" alt="" />
                         </div>
                            <div className=" pl-10">
                                <h3 className=' text-[28px] font-medium pb-4'>Explore Features</h3>
                                <p className='w-[250px] text-[18px] font-medium'>Explore the high-tech, low-life world where the lines between humanity </p>
                            </div>
                        </div>
                        <div className="w-[429px] h-[156px] flex">
                         <div className="w-[81px] h-[81px] border-2 rounded-[20px] border-amber-600 p-4">
                               <img className='' src="/unithree.png" alt="" />
                         </div>
                            <div className=" pl-10">
                                <h3 className=' text-[28px] font-medium pb-4'>Stay Connected</h3>
                                <p className='w-[250px] text-[18px] font-medium'>Explore the high-tech, low-life world where the lines between humanity </p>
                            </div>
                        </div>
                    </div>
                    

                </div>
    </div>
   </section>
  )
}

export default Universe