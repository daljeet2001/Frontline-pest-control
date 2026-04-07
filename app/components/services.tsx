"use client"
import { IoBugSharp } from "react-icons/io5";
import { GiSeatedMouse } from "react-icons/gi";
import { LuHouse } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";
import { LuTrees } from "react-icons/lu";
import { useState } from "react";
import { motion, Variants } from 'framer-motion'


const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren:0.2
        }
    }
}

const item: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale:0.95
    },
    show: {
        opacity: 1,
        y: 0,
        scale:1,
        transition: {
            ease: "easeOut",
            duration: 0.5
        }
    }
}


export default function Services() {


    return (

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} id="services" className="md:px-16 px-4 py-16  flex flex-col items-center md:gap-4 gap-8  w-full">

            <motion.div variants={item} className="flex flex-col items-center gap-4">
                <div className="font-bold text-4xl text-gray-900">Our Services</div>
                <div className="text-xl text-center text-gray-600">Comprehensive pest control solutions tailored to your specific needs</div>
            </motion.div>

            <motion.div variants={container} viewport={{ once:true, margin:"-100px"}}  initial="hidden" whileInView="show" className="flex items-center gap-8 space-between flex-wrap mt-8">

                <motion.div whileHover={{y:-6, scale:1.02}}  variants= {item} className=" hover:shadow-xl p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-full  max-w-[405.33px] h-[214px]">

                    <div className="bg-orange-100 text-orange-600 rounded-lg w-16 h-16 flex items-center justify-center"><IoBugSharp size={30} /></div>
                    <div className="font-bold text-xl text-gray-900">Termite Control</div>
                    <div className="text-gray-600">Complete termite inspection and treatment with advanced protection systems.</div>

                </motion.div>

                <motion.div whileHover={{y:-6, scale:1.02}} variants= {item} className=" hover:shadow-xl  p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-full max-w-[405.33px] h-[214px]">

                    <div className="bg-purple-100 text-purple-600 rounded-lg w-16 h-16 flex items-center justify-center"><GiSeatedMouse size={30} /></div>
                    <div className="font-bold text-xl text-gray-900">Rodent Control
                    </div>
                    <div className="text-gray-600">Safe and effective rodent elimination and prevention strategies.

                    </div>

                </motion.div>

                <motion.div whileHover={{y:-6, scale:1.02}} variants= {item} className="hover:shadow-xl  p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-full max-w-[405.33px] h-[214px]">

                    <div className="bg-blue-100 text-blue-600 rounded-lg w-16 h-16 flex items-center justify-center"><LuHouse size={30} /></div>
                    <div className="font-bold text-xl text-gray-900">Residential Pest Control
                    </div>
                    <div className="text-gray-600">Comprehensive pest management for homes and apartments.

                    </div>

                </motion.div>

                <motion.div whileHover={{y:-6,scale:1.02}} variants= {item} className="hover:shadow-xl  p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-full max-w-[405.33px] h-[214px]">

                    <div className="bg-green-100 text-green-600 rounded-lg w-16 h-16 flex items-center justify-center"><FaRegBuilding size={30} /></div>
                    <div className="font-bold text-xl text-gray-900">Commercial Pest Control
                    </div>
                    <div className="text-gray-600">Customized pest control solutions for businesses and offices.

                    </div>

                </motion.div>

                <motion.div whileHover={{scale:1.02, y:-6}} variants= {item} className="hover:shadow-xl  p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-full max-w-[405.33px] h-[214px]">

                    <div className="bg-red-100 text-red-600 rounded-lg w-16 h-16 flex items-center justify-center"><LiaIndustrySolid size={30} /></div>
                    <div className="font-bold text-xl text-gray-900">Industrial Pest Control
                    </div>
                    <div className="text-gray-600">Large-scale pest management for factories and warehouses.

                    </div>

                </motion.div>

                <motion.div whileHover={{scale:1.02, y:-6}} variants = {item} className="hover:shadow-xl  p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-full max-w-[405.33px] h-[214px]">

                    <div className="  bg-teal-100 text-teal-600 rounded-lg w-16 h-16 flex items-center justify-center"><LuTrees size={24} /></div>
                    <div className="font-bold text-xl text-gray-900">General Pest Control
                    </div>
                    <div className="text-gray-600">Control of cockroaches, ants, mosquitoes, and other common pests.

                    </div>

                </motion.div>

            </motion.div>

        </motion.div>
    )

}