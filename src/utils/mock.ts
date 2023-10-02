import { product } from "./types";
import p1 from "/public/p1.png" 
import p2 from "/public/p2.webp";
import p3 from "/public/p3.png";
import p4 from "/public/p4.webp";
import p5 from "/public/p5.png";


export const Products:product[] = [
    {
        id:"1",
        name:"product 1",
        tagline:"Dress",
        category:"female",
        price:250,
        image:p1,
    },
    {
        id:"2",
        name:"product 2",
        tagline:"Dress",
        category:"female",
        price:20,
        image:p2,
    },
    {
        id:"3",
        name:"product 3",
        tagline:"Dress",
        category:"female",
        price:200,
        image:p3,
    },
    {
        id:"4",
        name:"product 4",
        tagline:"Dress",
        category:"female",
        price:120,
        image:p4,
    },
    {
        id:"5",
        name:"product 5",
        tagline:"Dress",
        category:"male",
        price:20,
        image:p1,
    },
    {
        id:"6",
        name:"product 6",
        tagline:"Dress",
        category:"kids",
        price:20,
        image:p1,
    },
    {
        id:"7",
        name:"product 7",
        tagline:"Dress",
        category:"kids",
        price:125,
        image:p1,
    },
];