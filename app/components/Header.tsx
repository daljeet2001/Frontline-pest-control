
import { TiTick } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";



export default function Header(){
    return(

        <div className=" w-full md:px-16  px-4 py-16 flex flex-col md:flex-row md:items-center justify-center gap-8 md:gap-4  bg-[#E8FCF2]">
            
            <div className="flex flex-col gap-2 justify-start">
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
                    <button className="flex items-center gap-2 bg-[#006045] text-white px-8 py-4 rounded-xl hover:bg-[#004D38]"><FaPhoneAlt size={28}/>Call Now</button>
                         <button className="flex items-center gap-2 bg-[#00A63D] text-white px-8 py-4 hover:bg-[#008A33] rounded-xl"><TbMessageCircleFilled size={28}/>WhatsApp</button>
                </div>

            </div>

            <img src="/header.jpeg" alt="header_img" className="object-cover h-[616px] w-[616px] rounded-xl"/>




        </div>
    )
}