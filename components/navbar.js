"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


const Navbar = () => {
	// const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	// const [scrolled, setScrolled] = useState(false);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const scrollTop = window.scrollY;
	// 		if (scrollTop > 100) {
	// 			setScrolled(true);
	// 		} else {
	// 			setScrolled(false);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => window.removeEventListener("scroll", handleScroll);
	// }, []);

	return (
        <div>
            <div className="bg-purple-400 text-white text-[30px] font-extrabold h-[90px] flex justify-center align-middle items-center">
            <p>Book Generator API</p>
            </div>
            <div className="bg-[#1e293b] h-[74px] text-gray-300 text-[15px]">
                <ul className="flex flex-col justify-center list-none md:h-[42px] py-[0.6rem] px-2 font-[500] md:flex-row h-[200px]">
                    <li className="p-[1rem] hover:text-blue-400 hover:cursor-pointer">OVERVIEW</li>
                    <li className="p-[1rem] hover:text-blue-400 hover:cursor-pointer">AUTHENTICATION</li>
                    <li className="p-[1rem] hover:text-blue-400 hover:cursor-pointer">ENDPOINTS</li>
                    <li className="p-[1rem] hover:text-blue-400 hover:cursor-pointer">TUTORIAL</li>
                    <li className="p-[1rem] hover:text-blue-400 hover:cursor-pointer">CODE EXAMPLES</li>
                    <li className="p-[1rem] hover:text-blue-400 hover:cursor-pointer">PRICING</li>
                </ul>
            </div>
        </div>
	);
};

export default Navbar;
