import { StaticImageData } from "next/image";

export type product = {
    id:string;
    tagline:string;
    name:string;
    price:number;
    category:string;
    image:string | StaticImageData;
    // image: StaticImageData;
}