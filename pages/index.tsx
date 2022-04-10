import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import BackToTopButton from '../src/components/BackToTopButton/BackToTopButton'
import CategoriesNavbar from '../src/components/CategoriesNavbar/CategoriesNavbar'
import Hero from '../src/components/Hero/Hero'
import { HeadWithMeta } from '../src/components/Layout/HeadWithMeta'
import Layout from '../src/components/Layout/Layout'
import Menu from '../src/components/Menu/Menu'
import Modal from '../src/components/Modal/Modal'
import OpenCartButton from '../src/components/OpenCartButton/OpenCartButton'
import Slider from '../src/components/Slider/Slider'
// import { VALID_LOCALS } from '../src/constants'
import { metaData, SIZES } from '../src/constants/common'
import { API_URL } from '../src/constants/urls'
import { ActiveSectionContextProvider } from '../src/store/ActiveSection/ActiveSection.context'
import { CartContextProvider } from '../src/store/Cart/Cart.context'
import { ProductToppingsContextProvider } from '../src/store/ProductToppings/ProductToppings.context'
import { MenuList, Product } from '../src/types'
import { productFilter } from '../src/utils/products'

type Props = {
  products: Product[]
  menu: MenuList
  sliders: {
    name: string
    images: string[]
  }[]
}

const MainPage = ({ products, menu, sliders }: Props) => {

  const [showBanner, setShowBanner] = useState('Mobile')

  const router = useRouter()
  const locale = router.locale as string

  useEffect(() => {
    const onResizeHandler = () => {
      setShowBanner(window.innerWidth >= SIZES.md ? 'Desktop' : 'Mobile')
    }

    onResizeHandler()
    window.addEventListener('resize', onResizeHandler)
    return () => {
      window.removeEventListener('resize', onResizeHandler)
    }
  }, [])

  // const localName = window.location.host.split('.')[0]
  // const isValidLocal = localName === VALID_LOCALS.botanica || localName === VALID_LOCALS.rascanovca || localName === VALID_LOCALS.malinamica

  return(
    <Layout>
      <HeadWithMeta
        title={metaData.index.title[locale]}
        description={metaData.index.description[locale]}
        index={true}
        img={'https://res.cloudinary.com/dbh1vgas3/image/upload/v1628077326/logo_ps0e0n.png'}
      />
      <CartContextProvider>
        <ProductToppingsContextProvider>
          <Hero />
          <Slider
            slides={sliders.filter((slider) => slider.name === showBanner)[0].images}
            autoPlayInterval={4000}
          />
          <ActiveSectionContextProvider>
            <CategoriesNavbar />
            <Menu menu={menu} products={products} />
          </ActiveSectionContextProvider>
          <BackToTopButton />
          {/* temp */}
          {0 && <OpenCartButton />}
          <Modal />
        </ProductToppingsContextProvider>
      </CartContextProvider>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [subcategoriesRes, productsRes, menuRes, slidersRes] = await Promise.all([
    fetch(`${API_URL}/categories`),
    fetch(`${API_URL}/products`),
    fetch(`${API_URL}/big-categories`),
    fetch(`${API_URL}/banners`),
  ])

  const [subcategories, productsRaw, slidersRaw, menuRaw] = await Promise.all([
    subcategoriesRes.json(),
    productsRes.json(),
    slidersRes.json(),
    menuRes.json(),
  ])

  const products: Product[] = productsRaw.filter((product: any) =>
    product.image &&
    product.price &&
    product.name
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
            items: products.filter((product: Product) => product.subcategory === subcategory.name),
            order: subcategory.order,
          }
        )),
        order: category.order,
      }
    ))

  const sliders = slidersRaw.map((slidesSingular: any) => ({
    name : slidesSingular.name,
    images: slidesSingular.images.map((image: any) => image.url),
  }))

  return {
    props: {
      products,
      menu,
      sliders,
      ...(await serverSideTranslations(locale as string, ['header', 'hero', 'popup', 'common', 'cart', 'careers'])),
    },
    revalidate: 10,
  }
}


export default MainPage
