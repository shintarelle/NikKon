'use client'
import MainSlider from "@/components/mainSlider/MainSlider";
import NewCollection from "@/components/newCollection/NewCollection";
import Products from "@/components/products/Products";

import getData from "./utilits";

//запрос со всеми связанными данными
//http://localhost:1337/api/products?populate=*
//запрос картинок со всеми связанными данными
//http://localhost:1337/api/images?populate=*

export default async function Home() {
  const products = await getData('products?populate=*')
  console.log('product', products[0].attributes)
  console.log('images', getData('images?populate=*'))

  return (
    <>
      <MainSlider />
      <NewCollection />
      <Products title="новинки" type="new" />
      <Products title="топ продаж" type="top" />
      <Products title="распродажа" type="sale" />
      <div>
        </div>
    </>
  )
}
