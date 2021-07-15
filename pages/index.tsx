import React from 'react'

import banner from '../public/images/banners/banner.png'
import BackToTopButton from '../src/components/BackToTopButton/BackToTopButton'
import CategoriesNavbar from '../src/components/CategoriesNavbar/CategoriesNavbar'
import Hero from '../src/components/Hero/Hero'
import Layout from '../src/components/Layout/Layout'
import Menu from '../src/components/Menu/Menu'
import OpenCartButton from '../src/components/OpenCartButton/OpenCartButton'
import Slider from '../src/components/Slider/Slider'
import { ActiveSectionContextProvider } from '../src/store/ActiveSection/ActiveSection.context'
import {API_URL} from '../src/utils/urls'
import {Category, Product} from '../src/types'

type Props = {
  products: Product
  categories: Category
}

const MainPage = ({products, categories}: Props) =>
// console.log(products)
// console.log(categories)

  (
    <Layout>
      <Hero />
      <Slider slides={[banner, banner, banner, banner]} autoPlayInterval={3500} />
      <ActiveSectionContextProvider>
        <CategoriesNavbar/>
        <Menu categories={categories} products={products}/>
      </ActiveSectionContextProvider>
      <BackToTopButton />
      <OpenCartButton />
    </Layout>
  )


export async function getStaticProps() {
  const products_res = await fetch(`${API_URL}/products`)
  const productsRaw = await products_res.json()
  // const products = productsRaw.map((product : any, index : number) => {
  //   return(
  //     {
  //       name : product.name,
  //       description: product.description
  //     }
  //   )
  // })

  const categories_res = await fetch(`${API_URL}/categories`)
  const categoriesRaw = await categories_res.json()
  // const categories = categoriesRaw.map((category: any) => (
  //   {
  //     name : category.name,
  //     products : category.products,
  //   }
  // ))

  return {
    props : {
      products : productsRaw,
      categories : categoriesRaw,
    },
    revalidate : 10,
  }
}


export default MainPage
