import { GetStaticProps } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import banner from '../public/images/banners/banner.png'
import banner2 from '../public/images/banners/banner2.png'
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
    <Slider slides={[banner2, banner]} autoPlayInterval={4000} />
    <ActiveSectionContextProvider>
      <CategoriesNavbar />
      <Menu categories={categories} products={products} />
    </ActiveSectionContextProvider>
    <BackToTopButton />
    <OpenCartButton />
  </Layout>
)

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const [subcategoriesRes, productsRes, categoriesRes] = await Promise.all([
    fetch(`${API_URL}/categories`),
    fetch(`${API_URL}/products`),
    fetch(`${API_URL}/big-categories`),
  ])

  const [subcategories, productsRaw, categoriesRaw] = await Promise.all([
    subcategoriesRes.json(),
    productsRes.json(),
    categoriesRes.json(),
  ])

  const products = productsRaw.filter((product: any) =>
    product.image !== null &&
    product.image !== undefined &&
    product.image.formats.medium !== undefined &&
    product.price !== null &&
    product.weight !== null &&
    product.name !== null
  )
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
          nameru: product.nameru,
          price: product.price,
          weight: product.weight,
          badges: product.ingredients.map((ingredient: any) => (ingredient.name)),
          image: product.image.formats.medium === undefined ? '/images/food/product-image.png' : product.image.formats.medium.url,
          subcategory: product.subcategory.name,
          ingredients: product.description,
          ingredientsru: product.descriptionru,
          toppings: toppingsObj,
        }
      )
    })

  const categories = categoriesRaw.map((category: any) => (
    {
      categoryName: category.name,
      categoryNameRu: category.nameru,
      subCategories: category.subcategories.map((subcategory: any) => (
        {
          id: subcategory.slug,
          name: subcategory.name,
          nameru: subcategory.nameru,
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
    props: {
      products,
      categories,
      ...(await serverSideTranslations(locale as string, ['header', 'hero', 'popup'])),
    },
    revalidate: 10,
  }
}


export default MainPage
