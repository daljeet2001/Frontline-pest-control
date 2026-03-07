
import { IoBugSharp } from "react-icons/io5";
import { GiSeatedMouse } from "react-icons/gi";
import { LuHouse } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";
import { LuTrees } from "react-icons/lu";


export default function Services(){
    return(

        <div className="p-16 flex flex-col items-center gap-4 w-full">

            <div className="flex flex-col items-center gap-4">
                <div className="font-bold text-4xl text-gray-900">Our Services</div>
                <div className="text-xl text-gray-600">Comprehensive pest control solutions tailored to your specific needs</div>
            </div>

            <div className="flex items-center gap-8 space-between flex-wrap mt-8">
                    <div className=" hover:shadow-xl p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-[405.33px] h-[214px]">

                    <div className="bg-orange-100 text-orange-600 rounded-lg w-16 h-16 flex items-center justify-center"><IoBugSharp size={30}/></div>
                    <div className="font-bold text-xl text-gray-900">Termite Control</div>
                    <div className="text-gray-600">Complete termite inspection and treatment with advanced protection systems.</div>

                </div>

                 <div className=" hover:shadow-xl  p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-[405.33px] h-[214px]">

                    <div className="bg-purple-100 text-purple-600 rounded-lg w-16 h-16 flex items-center justify-center"><GiSeatedMouse size={30}/></div>
                    <div className="font-bold text-xl text-gray-900">Rodent Control
</div>
                    <div className="text-gray-600">Safe and effective rodent elimination and prevention strategies.

</div>

                </div>

                 <div className="hover:shadow-xl  p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-[405.33px] h-[214px]">

                    <div className="bg-blue-100 text-blue-600 rounded-lg w-16 h-16 flex items-center justify-center"><LuHouse size={30}/></div>
                    <div className="font-bold text-xl text-gray-900">Residential Pest Control
</div>
                    <div className="text-gray-600">Comprehensive pest management for homes and apartments.

</div>

                </div>

               <div className="hover:shadow-xl  p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-[405.33px] h-[214px]">

                    <div className="bg-green-100 text-green-600 rounded-lg w-16 h-16 flex items-center justify-center"><FaRegBuilding size={30}/></div>
                    <div className="font-bold text-xl text-gray-900">Commercial Pest Control
</div>
                    <div className="text-gray-600">Customized pest control solutions for businesses and offices.

</div>

                </div>

              <div className="hover:shadow-xl  p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-[405.33px] h-[214px]">

                    <div className="bg-red-100 text-red-600 rounded-lg w-16 h-16 flex items-center justify-center"><LiaIndustrySolid size={30}/></div>
                    <div className="font-bold text-xl text-gray-900">Industrial Pest Control
</div>
                    <div className="text-gray-600">Large-scale pest management for factories and warehouses.

</div>

                </div>

               <div className="hover:shadow-xl  p-6 bg-white border border-gray-200 rounded-lg flex flex-col gap-2 w-[405.33px] h-[214px]">

                    <div className="  bg-teal-100 text-teal-600 rounded-lg w-16 h-16 flex items-center justify-center"><LuTrees size={24}/></div>
                    <div className="font-bold text-xl text-gray-900">General Pest Control
</div>
                    <div className="text-gray-600">Control of cockroaches, ants, mosquitoes, and other common pests.

</div>

                </div>
            </div>

        </div>
    )

}