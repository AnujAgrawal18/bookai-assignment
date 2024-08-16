"use client";
import { useEffect, useState } from "react";


const Navbar = () => {

	const [toggle, setToggle] = useState(false);
	

	return (
        <div>
            <div className="bg-[#6366f1] text-white text-[40px] font-extrabold h-[144px] flex justify-center align-middle items-center text-center">
            <p>Book Generator API</p>
            </div>
            <div className="bg-[#1e293b] md:h-[74px] text-gray-300 text-[15px]">
                <ul className="flex flex-col md:justify-center list-none md:h-[42px] md:pt-[1rem] px-2 font-[500] md:flex-row items-center content-center h-[252px]">
                    <li className="p-[1.2rem] hover:text-blue-400 hover:cursor-pointer h-[42px]">OVERVIEW</li>
                    <li className="p-[1rem] hover:text-blue-400 hover:cursor-pointer h-[42px]">AUTHENTICATION</li>
                    <li className="p-[1rem] hover:text-blue-400 hover:cursor-pointer h-[42px]">ENDPOINTS</li>
                    <li className="p-[1rem] hover:text-blue-400 hover:cursor-pointer h-[42px]">TUTORIAL</li>
                    <li className="p-[1rem] hover:text-blue-400 hover:cursor-pointer h-[42px]">CODE EXAMPLES</li>
                    <li className="p-[1rem] hover:text-blue-400 hover:cursor-pointer h-[42px]">PRICING</li>
                </ul>
            </div>
        </div>
	);
};

export default Navbar;
