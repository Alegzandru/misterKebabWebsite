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
import Modal from '../src/components/Modal/Modal'
import OpenCartButton from '../src/components/OpenCartButton/OpenCartButton'
import Slider from '../src/components/Slider/Slider'
import { API_URL } from '../src/constants/urls'
import { ActiveSectionContextProvider } from '../src/store/ActiveSection/ActiveSection.context'
import { CartContextProvider } from '../src/store/Cart/Cart.context'
import { ProductToppingsContextProvider } from '../src/store/ProductToppings/ProductToppings.context'
import { MenuList, Product } from '../src/types'
import { productFilter } from '../src/utils/products'

type Props = {
  products: Product[]
  menu: MenuList
}

const MainPage = ({ products, menu }: Props) => (
  <Layout>
    <CartContextProvider>
      <ProductToppingsContextProvider>
        <Hero />
        <Slider slides={[banner2, banner]} autoPlayInterval={4000} />
        <ActiveSectionContextProvider>
          <CategoriesNavbar />
          <Menu menu={menu} products={products} />
        </ActiveSectionContextProvider>
        <BackToTopButton />
        <OpenCartButton />
        <Modal />
      </ProductToppingsContextProvider>
    </CartContextProvider>
  </Layout>
)

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [subcategoriesRes, productsRes, menuRes] = await Promise.all([
    fetch(`${API_URL}/categories`),
    fetch(`${API_URL}/products`),
    fetch(`${API_URL}/big-categories`),
  ])

  const [subcategories, productsRaw, menuRaw] = await Promise.all([
    subcategoriesRes.json(),
    productsRes.json(),
    menuRes.json(),
  ])

  const products: Product[] = productsRaw.filter((product: any) =>
    product.image &&
    product.image.formats.medium &&
    product.price !== null &&
    product.name !== null
  )
    .map((product: any) => productFilter(product, subcategories))

  const menu = menuRaw
    .map((category: any) => (
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
            ).sort((first, second) => {
              if (first.name < second.name) {
                return -1
              }

              if (first.name > second.name) {
                return 1
              }

              return 0
            }),
            order: subcategory.order,
          }
        )),
        order: category.order,
      }
    ))

  return {
    props: {
      products,
      menu,
      ...(await serverSideTranslations(locale as string, ['header', 'hero', 'popup', 'common'])),
    },
    revalidate: 10,
  }
}


export default MainPage
