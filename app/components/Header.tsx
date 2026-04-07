"use client"
import { TiTick } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";
import { motion, useScroll, useTransform } from 'framer-motion'


export default function Header(){

    const { scrollY } = useScroll();

    const textY = useTransform(scrollY,[0,500],[0,-80]);
    const imgY = useTransform(scrollY,[0,500],[0,-40]);
    const opacity = useTransform(scrollY,[0,300],[1,0.6]);

    return(

        <motion.div className=" w-full md:px-16  px-4 py-16 flex flex-col md:flex-row md:items-center justify-center gap-8 md:gap-4  bg-[#E8FCF2]">
            
            <motion.div style={{y:textY,opacity}} className="flex flex-col gap-2 justify-start">
                <div className="text-gray-900 font-extrabold text-4xl md:text-5xl">Frontline Pest Control Services</div>
                <div className="text-gray-900 font-extrabold text-4xl md:text-5xl mb-2"></div>
                <div className="text-xl text-gray-700">Protecting your home and business from unwanted pests with safe, effective, and eco-friendly solutions.</div>

                <ul className="flex flex-col gap-2 text-lg text-[#007A55]">
                    <li className="flex items-center font-semibold"><TiTick size={24}/>Licensed & Certified Professionals</li>
                     <li className="flex items-center font-semibold"><TiTick size={24}/>3 & 5 Year Warranty Available</li>
                      <li className="flex items-center font-semibold"><TiTick size={24}/>100% Safe & Eco-Friendly Solutions</li>
                       <li className="flex items-center font-semibold"><TiTick size={24}/>24/7 Emergency Services</li>
                </ul>

                <div className="flex items-center gap-4 mt-6">
                    <a href="tel:+917973065721">
                    <button className="flex items-center gap-2 bg-[#006045] text-white px-8 py-4 rounded-xl hover:bg-[#004D38]"><FaPhoneAlt size={28}/>Call Now</button>
                        </a>
                        <a href="https://wa.me/917973065721?text=I%20need%20pest%20control%20service" target="_blank">
                         <button className="flex items-center gap-2 bg-[#00A63D] text-white px-8 py-4 hover:bg-[#008A33] rounded-xl"><TbMessageCircleFilled size={28}/>WhatsApp</button></a>
                     
                </div>

            </motion.div>

            <motion.img style={{y:imgY}} src="/header.jpeg" alt="header_img" className="object-cover h-[616px] w-[616px] rounded-xl"/>




        </motion.div>
    )
}