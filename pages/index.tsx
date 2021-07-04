import React from 'react'

import banner from '../public/images/temp/banner.png'
import BackToTopButton from '../src/components/BackToTopButton/BackToTopButton'
import CategoriesNavbar from '../src/components/CategoriesNavbar/CategoriesNavbar'
import Hero from '../src/components/Hero/Hero'
import Layout from '../src/components/Layout/Layout'
import Menu from '../src/components/Menu/Menu'
import Slider from '../src/components/Slider/Slider'

const MainPage = () => (
  <Layout>
    <Hero />
    <Slider slides={[banner, banner, banner]} autoPlayInterval={3500} />
    <CategoriesNavbar />
    <Menu />
    <BackToTopButton />
  </Layout>
)

export default MainPage
