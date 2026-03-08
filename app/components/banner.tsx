
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default function Banner(){
    return(
        <div className="w-full px-4 py-3 md:px-12 md:py-4 flex flex-col  md:flex-row items-center justify-between bg-[#007A55] text-white text-sm md:text-base">

            <div className="flex flex-wrap md:gap-4 md:justify-start justify-center items-center md:gap-3">
                <div className="flex items-center gap-1  hover:text-[#CFFFE8] mr-2 md:mr-0"><FaPhoneAlt size={14}/>7973065721</div>
                  <div className="flex items-center gap-1 hover:text-[#CFFFE8]"><FaPhoneAlt size={14}/>7837929208</div>
                  <div className="flex items-center gap-1 hover:text-[#CFFFE8]"><MdEmail size={20}/>frontlinepestcontrol@gmail.com</div>
    </div>

    <div className="flex items-center  justify-start gap-1 text-center "><FaLocationDot size={14}/>Serving Sunny Enclave, Sahibzada Ajit Singh Nagar</div>


        </div>
    )
}