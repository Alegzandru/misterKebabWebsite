import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import banner from '../public/images/banners/banner.png'
import banner2 from '../public/images/banners/banner2.png'
import BackToTopButton from '../src/components/BackToTopButton/BackToTopButton'
import CategoriesNavbar from '../src/components/CategoriesNavbar/CategoriesNavbar'
import Hero from '../src/components/Hero/Hero'
import Layout from '../src/components/Layout/Layout'
import Menu from '../src/components/Menu/Menu'
import { getTsProduct } from '../src/components/Modal/GetTsProduct'
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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

  const products: Product[] = productsRaw.filter((product: any) =>
    product.image &&
    product.image.formats.medium &&
    product.price !== null &&
    product.name !== null
  )
    .map((product: any) => getTsProduct(product, subcategories))

  const categories = categoriesRaw.map((category: any) => (
    {
      categoryName: category.name,
      categoryNameRu: category.nameru,
      subCategories: category.subcategories.map((subcategory: any) => (
        {
          id: subcategory.slug,
          name: subcategory.name,
          nameru: subcategory.nameru,
          items: products.filter((product: Product) => product.subcategory === subcategory.name),
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
      ...(await serverSideTranslations(locale as string, ['header', 'hero', 'popup', 'common'])),
    },
    revalidate: 10,
  }
}


export default MainPage
