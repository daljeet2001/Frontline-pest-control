
import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="w-full px-4 py-16 md:px-16 flex flex-col gap-8 md:gap-4  items-center bg-[#111828] text-gray-300">

            <div className="flex flex-col md:flex-row items-start gap-8 md:justify-between w-full
">

                <div className="flex flex-col gap-2 ">

                    <div className="flex items-start gap-2">
                           <img className="w-16 h-16" src="../icon.png" alt="logo"></img>
                           <div className='flex flex-col '>
                                <div className="text-white font-extrabold text-3xl">Frontline Pest Control</div>

                                                <div className="text-gray-400">Professional pest management services with <br></br>licensed experts and eco-friendly solutions.

</div>
                           </div>
                
                    </div>

        
                </div>

                    <div className="flex flex-col gap-2">

                    <div className="text-white font-bold text-xl">Quick Links</div>

                    <ul className="flex flex-col gap-2">
                        <li>
                              <a className="hover:text-emerald-400"  href="#header">Home</a>
                        </li>
                                 <li>
                              <a className="hover:text-emerald-400"  href="#services">Services</a>
                        </li>
                                 <li>
                              <a className="hover:text-emerald-400"  href="#about">About Us</a>
                        </li>
                                 <li>
                              <a className="hover:text-emerald-400"  href="#contact">Contact</a>
                        </li>
                                     <li>
                              <a className="hover:text-emerald-400"  href="#plans">Plans</a>
                        </li>
                      
                    </ul>
                 

        
                </div>


                <div className="flex flex-col gap-2">

                   
                    <div className="text-white font-bold text-xl">Contact Information</div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-emerald-400"/>
                            <div className="flex flex-col">
                                <div className='hover:text-emerald-400'> +91 7973065721</div>
                                   <div className='hover:text-emerald-400'>+91 7973065721</div>
                            </div>
                        </div>

                              <div className="flex items-center gap-2">
                            <TbMessageCircleFilled className="text-emerald-400"/>

                                <div className='hover:text-emerald-400'>WhatsApp: +91 7973065721</div>
                          
                        </div>

                                  <div className="flex items-center gap-2">
                            <MdEmail className="text-emerald-400"/>

                                <div className='hover:text-emerald-400'>singhdaljit25126@gmail.com</div>
                          
                        </div>

                                        <div className="flex items-center gap-2">
                            <FaLocationDot className="text-emerald-400"/>

                                <div className='hover:text-emerald-400'>Sunny Enclave Sahibzada Ajit Singh Nagar</div>
                          
                        </div>

                    </div>
                   

        
                </div>
                
            </div>

            <div className="flex flex-col items-center p-4 gap-2 mt-8 border-t border-gray-800 w-full">
                <div className='text-gray-400'>© 2026 Frontline Pest Control. All rights reserved.

</div>
<div>Serving Sunny Enclave, Sahibzada Ajit Singh Nagar</div>
            </div>

        </div>
    )
}