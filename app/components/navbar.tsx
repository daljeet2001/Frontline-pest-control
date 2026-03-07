import  Link  from "next/link"

export default function Navbar(){
    return(
        <div className="w-full px-16 py-8 flex items-center justify-between bg-white">

            <div className="flex items-center gap-2">

                <img className="w-16 h-16" src="../icon.png" alt="logo"></img>
                <div className="flex flex-col justify-center items-start">
                    <div className="text-[#007A55] text-3xl font-extrabold">Frontline Pest Control</div>
                    <div className="text-sm text-gray-600">Professional Management Services</div>
                </div>
      
            </div>

                 <ul className="flex gap-6">
                    <li>
                        <Link href="/" className="text-base text-gray-600 hover:text-[#00A63D]">Home</Link>
                    </li>

                       <li>
                        <Link href="/" className="text-base text-gray-600 hover:text-[#00A63D]">Services</Link>
                    </li>

                       <li>
                        <Link href="/" className="text-base text-gray-600 hover:text-[#00A63D]">Plans</Link>
                    </li>

                       <li>
                        <Link href="/" className="text-base text-gray-600 hover:text-[#00A63D]">About</Link>
                    </li>
                             <li>
                        <Link href="/" className="text-base text-gray-600 hover:text-[#00A63D]">Contact</Link>
                    </li>
                </ul>

    

        </div>
    )
}