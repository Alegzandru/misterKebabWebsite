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

  const subcategories_res = await fetch(`${API_URL}/categories`)
  const subcategories = await subcategories_res.json()

  const products_res = await fetch(`${API_URL}/products`)
  const productsRaw = await products_res.json()
  const products = productsRaw.filter((product: any) =>
    product.image.formats.medium !== undefined &&
    product.price !== null &&
    product.weight !== null &&
    product.name !== null &&
    product.ingredients !== [])
    .map((product: any) => {
      const topping = product.toppings.length !== 0 ?
        product.toppings.map((toppingSing: any) => ({
          text : toppingSing.name, price: toppingSing.price,
        }))
        :
        []

      const excludings = product.excludings.length !== 0 ?
        product.excludings.map((excluding: any) => excluding.name)
        :
        subcategories.filter((category: any) => category.name === product.subcategory.name)[0].excludings.map((excluding: any) => excluding.name)

      const toppingsObj = {
        topping,
        without: excludings,
      }

      return(
        {
          name: product.name,
          price: product.price,
          weight: product.weight,
          badges: product.ingredients.map((ingredient: any) => (ingredient.name)),
          image: product.image.formats.medium.url,
          subcategory: product.subcategory.name,
          ingredients: product.description,
          toppings: toppingsObj,
        }
      )
    })

  const categories_res = await fetch(`${API_URL}/big-categories`)
  const categoriesRaw = await categories_res.json()
  const categories = categoriesRaw.map((category: any) => (
    {
      categoryName : category.name,
      subCategories : category.subcategories.map((subcategory: any) => (
        {
          id: subcategory.slug,
          name: subcategory.name,
          items: products.filter(
            (product: Product) => product.subcategory === subcategory.name
          ),
          order: subcategory.order,
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
