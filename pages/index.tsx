import { GetStaticProps } from 'next'
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
import { MenuObject, Product } from '../src/types'
import { API_URL } from '../src/utils/urls'

type Props = {
  products: Product[]
  categories: MenuObject[]
}

const MainPage = ({ products, categories }: Props) => (
  <Layout>
    <Hero />
    <Slider slides={[banner, banner, banner, banner]} autoPlayInterval={3500} />
    <ActiveSectionContextProvider>
      <CategoriesNavbar />
      <Menu categories={categories} products={products} />
    </ActiveSectionContextProvider>
    <BackToTopButton />
    <OpenCartButton />
  </Layout>
)


export const getStaticProps: GetStaticProps = async () => {
  const subcategoriesRes = await fetch(`${API_URL}/categories`)
  const subcategories = await subcategoriesRes.json()

  const productsRes = await fetch(`${API_URL}/products`)
  const productsRaw = await productsRes.json()
  const products = productsRaw.filter((product: any) =>
    product.image.formats.medium !== undefined &&
    product.price !== null &&
    product.weight !== null &&
    product.name !== null &&
    product.ingredients !== [])
    .map((product: any) => {
      const topping = product.toppings.length !== 0
        ? product.toppings.map((toppingSing: any) => ({
          text: toppingSing.name, price: toppingSing.price,
        }))
        : []

      const without = product.excludings.length !== 0
        ? product.excludings.map((excluding: any) => excluding.name)
        : subcategories.filter((category: any) => category.name === product.subcategory.name)[0].excludings.map((excluding: any) => excluding.name)

      const toppingsObj = { topping, without }

      return (
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

  const categoriesRes = await fetch(`${API_URL}/big-categories`)
  const categoriesRaw = await categoriesRes.json()

  const categories = categoriesRaw.map((category: any) => (
    {
      categoryName: category.name,
      subCategories: category.subcategories.map((subcategory: any) => (
        {
          id: subcategory.slug,
          name: subcategory.name,
          items: products.filter(
            (product: any) => product.subcategory === subcategory.name
          ),
          order: subcategory.order,
        }
      )),
      order: category.order,
    }
  ))

  return {
    props: { products, categories },
    revalidate: 10,
  }
}


export default MainPage
