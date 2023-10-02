
import Hero from '@/views/Hero'
import Promotion from '@/components/layout/Promotion'
import ProductList from "@/views/productlist"
import Subscribe from '@/components/layout/Subscribe'
import Content from '@/views/Content'



export default function Home() {
  return (
  // <div className = 'm-6'>
  //   <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
  //     Talha ibn e Nazim
  //   </h1>
  //   <p className="leading-7 [&:not(:first-child)]:mt-6">
  //     The king, seeing how much happier his subjects were, realized the error of
  //     his ways and repealed the joke tax.
  //   </p>
  //   <Button className = 'mt-4'>
  //   <Heart className="mr-2 h-4 w-4" />
  //     love you sir</Button>
  //   </div>
  <div>
    <Hero/>
    {/* products */}
    <Promotion/>
    <ProductList/>
    <Content/>
    <Subscribe/>
  </div>
    
  )
}
