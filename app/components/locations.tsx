import { FaLocationDot } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";


export default function Locations(){
    return(
        <div className="w-full md:px-16 py-16 px-4 flex flex-col justify-center gap-8 md:gap-4 bg-[#E8FCF2]">
            <div className="text-gray-900 font-bold text-3xl text-center">Our Service Locations</div>

            <div className="flex flex-wrap items-center justify-center md:gap-8 gap-4 mt-4">

                <div className=" shadow-md w-[189.33px] p-4 rounded-lg bg-white flex flex-col gap-2 items-center justify-center text-emerald-600">
                    <IoLocationOutline size={24}/>
                    <div className="text-gray-800 font-semibold">Kharar</div>
                </div>

                    <div className="shadow-md w-[189.33px] p-4 rounded-lg bg-white flex flex-col gap-2 items-center justify-center text-emerald-600">
                    <IoLocationOutline size={24}/>
                    <div className="text-gray-800 font-semibold">Mohali</div>
                </div>

                    <div className="shadow-md w-[189.33px] p-4 rounded-lg bg-white flex flex-col gap-2 items-center justify-center text-emerald-600">
                    <IoLocationOutline size={24}/>
                    <div className="text-gray-800 font-semibold">Chandigarh</div>
                </div>

                    <div className="shadow-md w-[189.33px] p-4 rounded-lg bg-white flex flex-col gap-2 items-center justify-center text-emerald-600">
                    <IoLocationOutline size={24}/>
                    <div className="text-gray-800 font-semibold">New Chandigarh</div>
                </div>

                    <div className="shadow-md w-[189.33px] p-4 rounded-lg bg-white flex flex-col gap-2 items-center justify-center text-emerald-600">
                    <IoLocationOutline size={24}/>
                    <div className="text-gray-800 font-semibold">Kurali</div>
                </div>

                    <div className="shadow-md w-[189.33px] p-4 rounded-lg bg-white flex flex-col gap-2 items-center justify-center text-emerald-600">
                    <IoLocationOutline size={24}/>
                    <div className="text-gray-800 font-semibold">Sunny Enclave</div>
                </div>

            </div>

            <div className="italic text-gray-600 text-center">...and many more locations across Punjab

</div>
        </div>
    )
}