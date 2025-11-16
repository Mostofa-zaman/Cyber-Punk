import React from 'react'

const Footer = () => {
    return (
        <section className=" bg-[#0B0B0B]  text-white  border-t-2 border-amber-600 pb-[100px]">
            <div className="max-w-[1320px] pt-20 relative m-auto">
                <div>
                    <img className="absolute -left-34 -top-8" src="/grouptwo.png" alt="" />
                    <img className="absolute -right-34 -top-8" src="/groupthree.png" alt="" />
                </div>
                <div>
                    <div className="grid grid-cols-5 grid-rows-5 gap-4">
                        <div className="col-span-2 row-span-5">
                            <div>
                                <h2 className="text-[22px] font-semibold pb-[30px]">
                                    Cyber.AI - Cyber Punk Website
                                </h2>
                                <p className="text-[18px] font-medium w-[420px] leading-8 text-[#CBCBCB]">
                                    Explore the high-tech, low-life world where the lines between
                                    humanity{" "}
                                </p>
                            </div>
                        </div>
                        <div className="row-span-5 col-start-3">
                            <div>
                                <h3 className="text-[18px] font-medium pb-[9px]">
                                    Information
                                </h3>
                                <ul className="flex flex-col gap-1">
                                    <li className="text-[15px] font-normal text-[#CBCBCB]">
                                        Press Centre
                                    </li>
                                    <li className="text-[15px] font-normal text-[#CBCBCB]">
                                        Our Blog
                                    </li>
                                    <li className="text-[15px] font-normal text-[#CBCBCB]">
                                        Term and Condition
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row-span-5 col-start-4">
                            <div>
                                <h3 className="text-[18px] font-medium pb-[9px]">Menu</h3>
                                <ul className="flex flex-col gap-1">
                                    <li className="text-[15px] font-normal text-[#CBCBCB]">
                                        About
                                    </li>
                                    <li className="text-[15px] font-normal text-[#CBCBCB]">
                                        Services{" "}
                                    </li>
                                    <li className="text-[15px] font-normal text-[#CBCBCB]">
                                        Blog
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row-span-5 col-start-5">
                            <div>
                                <h3 className="text-[18px] font-medium pb-[9px] ">Contact</h3>
                                <ul className="flex flex-col gap-1">
                                    <li className="text-[15px] font-normal text-[#CBCBCB]">
                                        Phone : +123 456 789
                                    </li>
                                    <li className="text-[15px] font-normal text-[#CBCBCB]">
                                        Email : @example.com
                                    </li>
                                    <li className="text-[15px] font-normal text-[#CBCBCB]">
                                        Address Line 01
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className=" pt-20">
                    <div className="max-w-[1320px] mx-auto flex items-center justify-between text-white">
                        <p className="text-[14px] text-gray-300">
                            © Cyber.AI – Cyber Punk 2024. All rights reserved.
                        </p>

                        <div className="flex items-center gap-8">
                            <a
                                href="#"
                                className="text-gray-300 hover:text-[#e06609] transition"
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-[#e06609] transition"
                            >
                                Privacy
                            </a>
                            <a className="text-gray-300 hover:text-[#e06609] transition" href="#">
                                Cookies
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <div
                                className="
            w-10 h-10 rounded-full border border-gray-600 
            flex items-center justify-center text-gray-300
            hover:border-[#e06609] hover:text-[#e06609] 
            hover:shadow-[0_0_10px_#e06609] 
            transition duration-300 cursor-pointer
          "
                            >
                                {/* <FaLinkedinIn size={16} /> */}
                            </div>

                            <div
                                className="
            w-10 h-10 rounded-full border border-gray-600 
            flex items-center justify-center text-gray-300
            hover:border-[#e06609] hover:text-[#e06609] 
            hover:shadow-[0_0_10px_#e06609] 
            transition duration-300 cursor-pointer
          "
                            >
                                {/* <FaFacebookF size={16} /> */}
                            </div>

                            <div
                                className="
            w-10 h-10 rounded-full border border-gray-600 
            flex items-center justify-center text-gray-300
            hover:border-[#e06609] hover:text-[#e06609] 
            hover:shadow-[0_0_10px_#e06609] 
            transition duration-300 cursor-pointer
          "
                            >
                                {/* <FaTwitter size={16} /> */}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Footer