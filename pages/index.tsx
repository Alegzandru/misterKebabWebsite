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
import {MenuObject, Product} from '../src/types'

type Props = {
  products: Product[]
  categories: MenuObject[]
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
  const products = productsRaw.filter((product: any) =>
    product.image !== null &&
    product.price !== null &&
    product.weight !== null &&
    product.name !== null &&
    product.ingredients !== [])
    .map((product: any) => (
      {
        name: product.name,
        price: product.price,
        weight: product.weight,
        badges: product.ingredients.map((ingredient: any) => (ingredient.name)),
        image: product.image.formats.medium.url,
        subcategory: product.subcategory.name,
      }
    ))

  const categories_res = await fetch(`${API_URL}/big-categories`)
  const categoriesRaw = await categories_res.json()
  const categories = categoriesRaw.map((category: any) => (
    {
      categoryName : category.name,
      subCategories : category.subcategories.map((subcategory: any) => (
        {
          id: subcategory.name,
          name: subcategory.name,
          items: [],
        }
      )),
      order: category.order,
    }
  ))

  return {
    props : JSON.parse(JSON.stringify({
      products,
      categories,
    })),
    revalidate : 10,
  }
}


export default MainPage
