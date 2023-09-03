import Image, { StaticImageData } from "next/image"
import p1 from "/public/p1.png" 
import p2 from "/public/p2.webp" 
import p3 from "/public/p3.png" 
import ProductCard from "@/components/productcard"
import { Products } from "@/utils/mock"

const ProductList = () => {
    const productsChenks = Products.slice(0,3);
    
    return(
       <div className="flex justify-evenly mt-16 py-10">
       {/* <ProductCard title="Flex Sweartshirt" price={10} img={p1}/>
       <ProductCard title="Brushed" price={100} img={p2}/>
       <ProductCard title="Brushed Raglon Sweatshirt" price={1000} img={p3}/> */}

    {productsChenks.map((product) => (
        <ProductCard key={product.id}
         title={product.name}
          price={product.price}
           img={product.image as StaticImageData}
           category={product.category}
           id={product.id}
           />
    ))
    }
       </div>
    )
}
export default ProductList