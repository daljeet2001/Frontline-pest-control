"use client"

import { useState, useEffect } from "react"
import  Link  from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";


export default function Navbar(){

    const [ smallScreen, setSmallScreen ] = useState(false);
    const [ menu, setMenu ] = useState(false) 


    useEffect(()=>{

        setSmallScreen(window.innerWidth<768)

    },[])

    return(
        <div className="w-full md:px-16  md:py-8 px-4 py-3   flex flex-row flex-wrap items-center justify-between gap-3 md:gap-0 bg-white">

            <div className="flex items-center gap-2">

                <img className=" w-12 h-12 md:w-16 md:h-16" src="../icon.png" alt="logo"></img>
                <div className="flex flex-col justify-center items-start">
                    <div className="text-[#007A55] text-2xl md:text-3xl font-extrabold">Frontline Pest Control</div>
                    <div className="text-sm text-gray-600">Professional Management Services</div>
                </div>
      
            </div>

  {   !smallScreen &&       <ul className="flex flex-col md:flex-row md:p-0 p-8 gap-6 md:border-none border-t border-gray-200">
                    <li>
                        <a href="#header" className="text-base text-gray-600 hover:text-[#00A63D]">Home</a>
                    </li>

                       <li>
                        <a href="#services" className="text-base text-gray-600 hover:text-[#00A63D]">Services</a>
                    </li>

                       <li>
                        <a href="#plans" className="text-base text-gray-600 hover:text-[#00A63D]">Plans</a>
                    </li>

                       <li>
                        <a href="#about" className="text-base text-gray-600 hover:text-[#00A63D]">About</a>
                    </li>
                             <li>
                        <a href="#contact" className="text-base text-gray-600 hover:text-[#00A63D]">Contact</a>
                    </li>
                </ul>
}

            {smallScreen && ( !menu? <RxHamburgerMenu size={24} onClick={()=>setMenu(true)}/>: <RxCross1 size={24} onClick={()=>setMenu(false)}/>)}



         {   menu &&     <ul className=" w-full flex flex-col md:flex-row md:p-0 p-8 gap-6 md:border-none border-t border-gray-200">
                    <li>
                        <a href="#header" className="text-base text-gray-600 hover:text-[#00A63D]">Home</a>
                    </li>

                       <li>
                        <a href="#services" className="text-base text-gray-600 hover:text-[#00A63D]">Services</a>
                    </li>

                       <li>
                        <a href="#plans" className="text-base text-gray-600 hover:text-[#00A63D]">Plans</a>
                    </li>

                       <li>
                        <a href="#about" className="text-base text-gray-600 hover:text-[#00A63D]">About</a>
                    </li>
                             <li>
                        <a href="#contact" className="text-base text-gray-600 hover:text-[#00A63D]">Contact</a>
                    </li>
                </ul>}

    

        </div>
    )
}