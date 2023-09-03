import logo from "/public/logo.webp"
import Image from "next/image"
import React from "react"
import { Twitter } from "lucide-react"
import { Instagram } from "lucide-react"
import { Facebook } from "lucide-react"

const FooterContent = () => {
    return (
        <div className="mb-8">
        <div className="flex justify-between items-center mr-10 lg:mr-0   bg-white-400 mt-10 ">
            <div className="flex-1 pb-9 text-center lg:text-left flex flex-col justify-center lg:justify-normal">
          <Image className="w-40" src={logo} alt="logo"></Image>
          <p className=" text-gray-600 mt-10 lg:w-96"> Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made</p>
           <button className="flex gap-5 mt-6">
            <Twitter className="bg-gray-200  h-20 w-20 rounded-md  text-black flex justify-center items-center"/>
            <Facebook className="bg-gray-200  h-20 w-20 rounded-md  text-black flex justify-center items-center"/>
            <Instagram className="bg-gray-200  h-20 w-20 rounded-md  text-black flex justify-center items-center"/>
           </button>
            </div>
            <div className="flex justify-evenly gap-x-8">
             <ul>
                <li className="font-bold text-2xl text-gray-600">Company</li>
                <li className="text-gray-600 mt-2">About</li>
                <li className="text-gray-600 mt-2">Terms of Use</li>
                <li className="text-gray-600 mt-2">Privacy Policy</li>
                <li className="text-gray-600 mt-2">How it Works</li>
                <li className="text-gray-600 mt-2">Contact Us</li>
             </ul>
             <ul>
             <li className="font-bold text-2xl text-gray-600">Support</li>
             <li className="text-gray-600 mt-2">Support Carrer</li>
             <li className="text-gray-600 mt-2">24h Service</li>
             <li className="text-gray-600 mt-2">Quick Chat</li>
             </ul>
             <ul>
             <li className="font-bold text-2xl text-gray-600">Contact</li>
             <li className="text-gray-600 mt-2">Whatsapp</li>
             <li className="text-gray-600 mt-2">Support 24h</li>
             </ul>
             </div>    
        </div>
        <hr className="h-px my-8  bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <section className=" ">
           <div>
            <div className="flex justify-between mt-10   ">
                <div>
                    <p>Copyright © 2022 Dine Market</p>
                </div>
                <div>
                    <span>Design by.</span>
                    <p>Talha Nazim</p>
                </div>
                <div>
                    <span>Code by. </span>
                    <p></p>
                </div>
            </div>
            </div>
        </section>
        </div>
        
    )
}
export default FooterContent