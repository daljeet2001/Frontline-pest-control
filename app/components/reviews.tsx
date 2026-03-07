
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




];

    return(
        <div className="w-full p-16 flex flex-col items-center gap-4">
        
                       <div className="font-bold text-4xl text-gray-900">Frontline Pest Control Reviews
 </div>


 {reviews.map((review,index)=>(
    <div className="flex flex-col items-start gap-2 hover:shadow-xl  border border-gray-200 hover:border hover:border-emerald-400 rounded-lg p-8" key={index}>

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