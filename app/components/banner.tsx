
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default function Banner(){
    return(
        <div className="w-full px-12 py-4 flex items-center justify-between bg-[#007A55] text-white">

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1  hover:text-[#CFFFE8]"><FaPhoneAlt size={14}/>7973065721</div>
                  <div className="flex items-center gap-1 hover:text-[#CFFFE8]"><FaPhoneAlt size={14}/>7837929208</div>
                  <div className="flex items-center gap-1 hover:text-[#CFFFE8]"><MdEmail size={20}/>frontlinepestcontrol@gmail.com</div>
    </div>

    <div className="flex items-center gap-1"><FaLocationDot size={14}/>Serving Sunny Enclave, Sahibzada Ajit Singh Nagar</div>


        </div>
    )
}