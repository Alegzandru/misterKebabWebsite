import React from 'react'

import banner from '../public/images/temp/banner.png'
import BackToTopButton from '../src/components/BackToTopButton/BackToTopButton'
import Hero from '../src/components/Hero/Hero'
import Layout from '../src/components/Layout/Layout'
import Slider from '../src/components/Slider/Slider'

const MainPage = () => (
  <Layout>
    <Hero />
    <Slider slides={[banner, banner, banner]} autoPlayInterval={3500} />
    <BackToTopButton />
  </Layout>
)

export default MainPage
