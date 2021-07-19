import React from 'react'

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

const MainPage = () => (
  <Layout>
    <Hero />
    <Slider slides={[banner2, banner]} autoPlayInterval={3500} />
    <ActiveSectionContextProvider>
      <CategoriesNavbar />
      <Menu />
    </ActiveSectionContextProvider>
    <BackToTopButton />
    <OpenCartButton />
  </Layout>
)

export default MainPage
