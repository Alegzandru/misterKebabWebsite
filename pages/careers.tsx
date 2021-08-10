import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Careers from '../src/components/Careers/Careers'
import Layout from '../src/components/Layout/Layout'
import Head from 'next/head'
import Modal from '../src/components/Modal/Modal'


const CareersPage = () => (
  <Layout>
    <Head>
      <title>Cariere | Mr. Kebab</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Mr Kebab angajează personal care adoră kebabul! Devino și tu parte a
      echipei noastre: chelneri, bucătari, casieri. O rețea de fast-food prietenoasă!"/>
      <meta name="robots" content="index, follow"/>

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cariere | Mr. Kebab" />
      <meta property="og:description" content="Mr Kebab angajează personal care adoră kebabul! Devino și tu parte a
      echipei noastre: chelneri, bucătari, casieri. O rețea de fast-food prietenoasă!" />
      <meta property="og:image" content="https://res.cloudinary.com/dbh1vgas3/image/upload/v1628077326/logo_ps0e0n.png" />
      <meta property="og:url" content="PERMALINK" />
      <meta property="og:site_name" content="Cariere | Mr. Kebab" />

      <meta name="twitter:title" content="Cariere | Mr. Kebab"/>
      <meta name="twitter:description" content="Mr Kebab angajează personal care adoră kebabul! Devino și tu parte a
      echipei noastre: chelneri, bucătari, casieri. O rețea de fast-food prietenoasă!"/>
      <meta name="twitter:image" content="https://res.cloudinary.com/dbh1vgas3/image/upload/v1628077326/logo_ps0e0n.png"/>
    </Head>
    <Careers />
    <Modal/>
  </Layout>
)

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['careers', 'header', 'common'])),
  },
})

export default CareersPage
