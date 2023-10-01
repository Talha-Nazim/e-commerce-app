import { Products } from "@/utils/mock";
import ProductCard from "@/components/productcard";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Quantity from "@/components/Quantity";

const getProductsDetail = (id: string | number) => {
  return Products.filter((product) => product.id == id);
};

const sizes = ["xs", "sm", "md", "lg", "xl"];

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);

  return (
    <div className="flex mt-16 py-10 flex-wrap">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          <div>
            <h1 className="text-2xl">{product.name}</h1>
            <h2 className="text-base text-gray-400 font-semibold">
              {product.tagline}
            </h2>
            {/* <p>Name {product.name}</p>
            <p>Price {product.price}</p>
            <p>Category {product.category}</p> */}
            <div>
              <h3 className="text-xs mt-6 font-semi-bold">SELECT SIZE</h3>
              <div className="flex gap-x-2">
                {sizes.map((item, i) => {
                  return (
                    <div key={i} className="h-6 w-6  rounded-full border hover:shadow-xl mt-2 center">
                      {/* // VARIANTS */}
                      <span className="text-[10px] font-semibold text-center text-gray-500">
                        {" "}
                        {item}{" "}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* QUANTITY */}
              <div className="flex gap-x-3 mt-6 items-center">
                <h3 className="text-[10px] font-semibold">Quantity:</h3>
                <Quantity />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
