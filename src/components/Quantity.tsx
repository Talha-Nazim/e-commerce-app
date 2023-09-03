"use client"
import React,{useState} from "react";

const Quantity = () => {
    
    const [num, setNum] = useState(1);

    return (<div className="center gap-x-2" >
         {/* MINUS */}
         <button className="border h-6 w-6 rounded-full center" onClick={() => {
            setNum(num <=1 ? 1: num - 1);
         }}>
            -
         </button>
         {/* NUMBER */}
          <span className="text-sm">{num}</span>
         {/* PLUS */}
         <button className="border h-6 w-6 rounded-full center" onClick={() => {
            setNum(num + 1);
         }}>
            +
         </button>
    </div>)
}
 export default Quantity

// const OperationButton = () => {
//     return (
//         <div className="border h-6 w-6 rounded-full center">

//         </div>
//     )
// }
//  export  {OperationButton, Quantity}