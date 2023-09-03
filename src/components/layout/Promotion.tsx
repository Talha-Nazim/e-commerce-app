import Image from "next/image"
import promotion  from "/public/promotion 1.webp"
import promotion2  from "/public/promotion 2.webp"
import promotion3  from "/public/promotion 3.webp"
 const Promotion = () => {
    return(
        <div>
         <div className="flex justify-around ">
            <div className="flex-col ">
               <Image src={promotion} alt="img" className="bg-gray-300 "></Image>
             <div className="w-64 h-32 bg-black text-white border border-gray-300 rounded-lg p-4 ">
                This is a box created with Tailwind CSS.
             </div>
            </div>
            <div className="flex gap-x-5">
             <div className="relative">

               <Image src={promotion2} alt="img" className="bg-red-100 w-full h-auto"></Image>
               <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 p-4 z-10">
                 <p className="text-white text-lg font-bold">Your Text Here</p>
               </div>
             </div>
             <Image src={promotion3} alt="img" className="bg-gray-300"></Image>
            </div>
         </div>
        </div>
    )
}
export default Promotion;