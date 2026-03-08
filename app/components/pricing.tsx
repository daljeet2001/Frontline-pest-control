

export default function Pricing(){

      const data = [
    { service: "General Pest Control", prices: [800, 1100, 1300, 1500, 2000] },
    { service: "Bedbug Control", prices: [1500, 2200, 3000, 3500, 4000] },
    { service: "Cockroach Control", prices: [799, 899, 1099, 1399, 1599] },
    { service: "Rodents/Rats Control", prices: [749, 849, 949, 1199, 1399] },
    { service: "Ant Control", prices: [749, 849, 949, 1199, 1399] },
    { service: "Mosquito Control", prices: [1700, 1900, 2300, 2500, 2800] },
    { service: "Bees Control", prices: [1000, 1300, 1500, 1800, 2000] },
    { service: "Lizard Control", prices: [700, 1200, 1500, 1800, 2000] },
    { service: "Silverfish Control", prices: [700, 1100, 1300, 1500, 1700] },
    { service: "Tick Control", prices: [700, 1100, 1300, 1500, 1700] },
    { service: "Bird Netting", prices: [1000, 2000, 3000, 4000, 5000] },
    { service: "Termite Control", prices: [5200, 6200, 7200, 8200, 9200] },
  ];
    return(
        <div className=" w-full md:px-16 px-4 py-16 flex flex-col items-center gap-8 md:gap-4 bg-[#E8FCF2] ">
           <div className="font-bold text-4xl text-gray-900 text-center">Standard Pest Control Rates
 </div>
<div className="w-full overflow-x-auto mt-8">
     <table className="min-w-[700px] w-full border border-gray-400 text-left">
    <thead className="bg-white-100">
        <tr>
                <th className="px-6 py-4 border border-gray-400">Treatment Type</th>
            <th className="px-6 py-4 font-bold border border-gray-400">1 BHK</th>
                <th className="px-6 py-4 font-bold border border-gray-400">2 BHK</th>
                    <th className="px-6 py-4 font-bold border border-gray-400">3 BHK</th>
                        <th className="px-6 py-4 font-bold border border-gray-400">4 BHK</th>
                            <th className="px-6 py-4 font-bold border border-gray-400">5 BHK</th>
                            
                                 
        </tr>
    </thead>

    <tbody>

        {data.map((d,index)=>(
            <tr className="hover:bg-white-50" key={index}>
                <td className="border border-gray-400 px-6 py-4 font-medium">{d.service}</td>

                {d.prices.map((p,index)=>(
                    <td className="border border-gray-400 px-6 py-4" key={index}>₹{p}</td>
                ))}

            </tr>
        ))}
       
    </tbody>

 </table>

</div>




        </div>
    )
}