"use client"
import { FaPhoneAlt } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { LuBuilding } from "react-icons/lu";
import { useState } from "react";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";




export default function ContactUs(){


const [ loading, setLoading ] = useState(false)
 

    const contactSchema = z.object({
        name:z.string().min(1,"Name is required"),
        phone:z.string().min(10, "Enter valid phone number"),
        email:z.string().email("Invalid email").or(z.literal("")),
        service:z.string().min(1,"Select a service"),
        message:z.string().max(500).optional(),
    })

    type FormData = z.infer<typeof contactSchema>;

        const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const sheet = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL
  const phone = process.env.NEXT_PUBLIC_PHONE


  const onSubmit = async(data:FormData)=>{

    const message = ` 
    New Pest Control Request
    Name:${data.name}
    Phone:${data.phone}
    Email:${data.email}
    Service:${data.service}
    Mesage:${data.message}
    `;
    setLoading(true)

    const res = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL!,{
      method:"POST",
      body:JSON.stringify({
        name:data.name,
        phone:data.phone,
        email:data.email,
        service:data.service,
        message:data.message
      })
    })
    setLoading(false);

      alert("Request submitted")

     return window.open(`https://wa.me/${process.env.NEXT_PUBLIC_PHONE!}?text=${encodeURIComponent(message)}`);

    

  }



    return(
        <div className=" w-full md:px-16 py-16 px-4 flex flex-col items-center gap-4 bg-[#E8FCF2]">
                  <div className="flex flex-col items-center gap-4 max-w-3xl">
                <div className="font-bold text-4xl text-gray-900">Contact Us</div>
                <div className="text-xl text-gray-600 text-center">Get in touch with us for a free consultation and quote
</div>
       </div>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mt-8">


<div className="flex flex-col gap-4 w-full max-w-[552px]">

    <div className="shadow-lg p-6 bg-white rounded-lg flex flex-col gap-6 ">
        <div className="text-gray-900 font-bold text-2xl ">Get In Touch</div>

        <div className="flex items-start gap-4">
            <div className="bg-emerald-100 rounded-lg p-3 flex items-center justify-center text-emerald-600"><FaPhoneAlt size={24}/></div>

            <div className="flex flex-col">
                <div className="text-gray-900 font-semibold">Call Us</div>
                <div className="text-lg text-emerald-700">+91 7973067521</div>
                     <div className="text-lg text-emerald-700">+91 7973067521</div>
            </div>
        </div>

          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 rounded-lg p-3 flex items-center justify-center text-emerald-600"><TbMessageCircleFilled size={24}/></div>

            <div className="flex flex-col">
                <div className="text-gray-900 font-semibold">WhatsApp

</div>
                <div className="text-lg text-green-700">+91 7973067521</div>
                     <div className="text-lg text-green-700">+91 7973067521</div>
            </div>
        </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-100 rounded-lg p-3 flex items-center justify-center text-blue-600"><MdEmail size={24}/></div>

            <div className="flex flex-col">
                <div className="text-gray-900 font-semibold">Email

</div>
                <div className="text-lg text-blue-700">singhdaljit25126@gmail.com</div>
                    
            </div>
        </div>

         <div className="flex items-start gap-4">
            <div className="bg-purple-100 rounded-lg p-3 flex items-center justify-center text-purple-600"><FaLocationDot size={24}/></div>

            <div className="flex flex-col">
                <div className="text-gray-900 font-semibold">Address

</div>
                <div className="text-lg text-gray-700">Sunny Enclave Sahibzada Ajit Singh Nagar</div>
                    
            </div>
        </div>

        <div className="flex gap-3 border-t border-gray-200 pt-4">
<a href={`tel:+${phone}`}>
     <button className="flex items-center gap-2 bg-[#006045] text-white px-4 py-2 rounded-xl hover:bg-[#004D38]"><FaPhoneAlt size={18}/>Call Now</button>
</a>
         <a href={`https://wa.me/${phone}?text=I%20need%20pest%20control%20service`} target="_blank">
                         <button className="flex items-center gap-2 bg-[#00A63D] text-white px-4 py-2 hover:bg-[#008A33] rounded-xl"><TbMessageCircleFilled size={18}/>WhatsApp</button></a>
            
        </div>

    </div>

    <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col gap-4">

        <div className="text-gray-900 font-bold text-xl">License & Registration
</div>

<div className="flex items-center justify-start gap-3">

   <div className="text-emerald-700"><FaRegFileAlt size={24} /></div> 
         <div className="flex flex-col">
                <div className="text-gray-900 font-semibold">License No.
</div>
                <div className=" text-gray-700">UK-AGRI/82631/92151

</div>
                    
            </div>

    
    
</div>

<div className="flex items-center justify-start gap-3">

   <div className="text-emerald-700"><LuBuilding size={24} /></div> 
         <div className="flex flex-col">
                <div className="text-gray-900 font-semibold">GSTIN
</div>
                <div className=" text-gray-700">O5CQOPK2258Q1Z5



</div>
                    
            </div>

    
    
</div>




    </div>

</div>

<div className="shadow-lg p-6 bg-white rounded-lg flex flex-col gap-6 w-full max-w-[552px] ">

        <div className="text-gray-900 font-bold text-2xl ">Request A Quote</div>

        <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Name *</label>
            <input {...register("name")} placeholder="Your Name" className="px-4 py-3 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"/>
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

           <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Phone *</label>
            <input {...register("phone")}  placeholder="Your Phone Number" className="px-4 py-3 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700"/>
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>

           <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Email</label>
            <input {...register("email")} placeholder="Your Email" className="px-4 py-3 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700" type="email"/>
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

           <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Service Required*</label>
    

            <select {...register("service")}  className="px-4 py-3 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700">
                  <option value="">Select a service</option>
                    <option value="Termite Control">Termite Control</option>
                      <option value="Rodent Control">Rodent Control</option>
                        <option value="Residential Pest Control">Residential Pest Control</option>
                          <option value="Commercial Pest Control">Commercial Pest Control</option>
                <option value="Industrial Pest Control">Industrial Pest Control</option>
                  <option value="General Pest Control">General Pest Control</option>
            </select>
              {errors.service && <p className="text-red-500">{errors.service.message}</p>}
        </div>

           <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Message</label>
            <textarea {...register("message")}  placeholder="Tell us about your pest control needs..." className=" w-80 h-28 px-4 py-3 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-700" rows={3}/>
        </div>


        <button  onClick={handleSubmit(onSubmit)} className="text-white font-semibold w-full bg-emerald-700 rounded-lg py-3 hover:bg-emerald-900">{!loading?"Submit Request":"Submitting..."}</button>

    


    </div>
    



   

</div>
     

        </div>
    )
}