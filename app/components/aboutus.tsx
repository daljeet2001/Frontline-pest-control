"use client"

import { GiAchievement } from "react-icons/gi";
import { RiGroupLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { motion, Variants } from "framer-motion"



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


export default function AboutUs(){
    return(
        <motion.div variants= {container} initial="hidden" whileInView="show" viewport={{ once:true,margin:"-100px" }} className="flex flex-col items-center gap-8 md:gap-4 w-full px-16 md:px-4 py-16">

                 <motion.div variants = {item} className="flex flex-col items-center gap-4 max-w-3xl">
                <div className="font-bold text-4xl text-gray-900">About Us</div>
                <div className="text-xl text-gray-600 text-center">Leading pest control service provider in Uttarakhand with a commitment to delivering safe, effective, and environmentally responsible pest management solutions.
</div>
            </motion.div>

            <motion.div variants = {container} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-100px"}} className="flex flex-col gap-4  md:flex-row items-center justify-center md:justify-between mt-8 w-full ">
                <motion.img variants = {item} src="/aboutus.jpg" alt="aboutus_img" className="rounded-lg  w-full max-w-[616px] h-[762px] object-cover"/>

                <motion.div variants = {item} className="flex flex-col gap-4 w-full md:max-w-[50%]">
                    <div className="font-bold text-3xl text-gray-900">Why Choose Frontline Pest Control?

</div>
<div className="text-gray-700 text-lg">With years of experience in the pest control industry, we provide comprehensive solutions for residential, commercial, and industrial properties. Our team of certified professionals uses the latest techniques and eco-friendly products to ensure your property remains pest-free.

</div>


<div className="flex items-center justify-start gap-8 flex-wrap mt-4">

    <div className=" w-[296px] flex items-start justify-center gap-2">
        <div className="p-3 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center"><GiAchievement size={26}/></div>
        <div className="flex flex-col justify-start">
            <div className="text-gray-500 font-bold">Licensed & Certified
</div>
<div className="text-gray-600 text-sm">Fully licensed professionals with years of expertise
</div>
        </div>
    </div>

        <div className="w-[296px]  flex items-start justify-center gap-2">
        <div className="p-3 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center"><RiGroupLine size={26}/></div>
        <div className="flex flex-col justify-start ">
            <div className="text-gray-500 font-bold">Expert Team

</div>
<div className="text-gray-600 text-sm">Trained and experienced pest control specialists


</div>
        </div>
    </div>


        <div className="w-[296px]  flex items-start justify-center gap-2">
        <div className="p-3 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center"><IoTimeOutline size={26}/></div>
        <div className="flex flex-col justify-start ">
            <div className="text-gray-500 font-bold">24/7 Service

</div>
<div className="text-gray-600 text-sm">Round-the-clock emergency pest control services


</div>
        </div>
    </div>


        <div className="w-[296px] flex items-start justify-center gap-2">
        <div className="p-3 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center"><IoLocationOutline size={26}/></div>
        <div className="flex flex-col justify-start">
            <div className="text-gray-500 font-bold">Wide Coverage

</div>
<div className="text-gray-600 text-sm">Serving multiple cities across Uttarakhand


</div>
        </div>
    </div>

</div>
                </motion.div>

            </motion.div>


        </motion.div>
    )
}