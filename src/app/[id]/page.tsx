import CustomProductSlider from "@/components/product/CustomProductSlider";
import ProductDescription from "@/components/product/components/ProductDescription";
import { productsArray } from '../../../data.js'

export default function Page({ params }: { params: { id: string } }) {
  const identificator = params.id
  const product = productsArray.find(product => product.id === identificator)

  return (
    <>
      <div className='max-w-[1024px] my-0 mx-auto p-[10px]'>
        <div className='  md:flex md:gap-4 md:justify-center lg:gap-7'>
          <CustomProductSlider id={identificator} />
          <div className="md:max-w-[300px] lg:max-w-[400px] p-[10px]">
            {product ? (
              <ProductDescription product={product} />
            ) : (
              <p>Товар не найден</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
