import React from 'react'

import BackToTopButton from '../src/components/BackToTopButton/BackToTopButton'
import Hero from '../src/components/Hero/Hero'
import Layout from '../src/components/Layout/Layout'

const MainPage = () => (
  <Layout>
    <Hero />
    <BackToTopButton />
  </Layout>
)

export default MainPage
