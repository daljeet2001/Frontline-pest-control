
import { FaStar } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";


export default function Reviews(){

 const reviews = [
  {
    name:"Daljeet Singh",
    rating:4,
    date:"8 Mar 2026",
    comment:"Contacted Frontline Pest Control for pest control in my house. They offered effective treatment and there were no pests in my house. I am impressed that they also called back after a few days to know whether the problem was solved or not. They are the best pest control professionals."
  },
  {
    name:"Honey",
    rating:5,
    date:"19 Jan 2026",
    comment:"I took services from Frontline Pest Control to get rid of mosquitoes and cockroaches in my shop. They came and inspected the area and applied some chemicals and sprays for some time. Now there are no mosquitoes and cockroaches in my shop. Very satisfactory service."
  },

  {
    name:"Amanpreet Kaur",
    rating:5,
    date:"2 Feb 2026",
    comment:"Very professional team. We had a serious ant problem in our kitchen and balcony. The technician explained the whole process before starting the treatment. Within a few days the ants were completely gone. Highly recommend their service."
  },

  {
    name:"Rajiv Sharma",
    rating:4,
    date:"14 Dec 2025",
    comment:"Booked them for cockroach control in my 3BHK. The staff arrived on time and completed the work quickly. I noticed a big difference within a week. Good service and reasonable pricing compared to other pest control companies."
  },


];

    return(
        <div className="w-full md:px-16 py-16 px-4  flex flex-col items-center gap-8 md:gap-4 mb-8">
        
                       <div className="font-bold text-4xl text-gray-900 text-center mb-8">Frontline Pest Control Reviews
 </div>


 {reviews.map((review,index)=>(
    <div className="flex flex-col items-start gap-8 hover:shadow-xl  border border-gray-200 hover:border hover:border-emerald-400 rounded-lg p-8" key={index}>

<div className="flex flex-col gap-2">
      <div className="text-base font-semibold">
            {review.name}
        </div>
        <div className="flex gap-1 items-center text-gray-400">Rated {review.rating} <TiStarFullOutline size={18} color={"black"}/> on {review.date} </div>
     </div>

     <div className="text-sm text-gray-400">
        {review.comment}

     </div>


      

    </div>

 ))}
        </div>
    )
}