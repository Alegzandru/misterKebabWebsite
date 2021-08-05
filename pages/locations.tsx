import React from 'react'
import GoogleMap from '../src/components/GoogleMap/GoogleMap'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '../src/components/Layout/Layout'
import LocationsContainer from '../src/components/LocationsContainer/LocationsContainer'
import LocationsLinks from '../src/components/LocationsLinks/LocationsLinks'
import { THEMES } from '../src/constants/common'
import Head from 'next/head'

const LocationsPage = () => (
  <Layout>
    <Head>
      <title>Locații | Mr. Kebab</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Mr Kebab are 4 locații la Malina Mică, Botanica și Râșcani.
      Alege pe cel mai apropiat ție și comandă! Sună la 0675 59 999 sau vino în unul dintre restaurantele noastre de tip fast-food"/>
      <meta name="robots" content="index, follow"/>

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Locații | Mr. Kebab" />
      <meta property="og:description" content="Mr Kebab are 4 locații la Malina Mică, Botanica și Râșcani.
      Alege pe cel mai apropiat ție și comandă! Sună la 0675 59 999 sau vino în unul dintre restaurantele noastre de tip fast-food" />
      <meta property="og:image" content="https://res.cloudinary.com/dbh1vgas3/image/upload/v1628077326/logo_ps0e0n.png" />
      <meta property="og:url" content="PERMALINK" />
      <meta property="og:site_name" content="Locații | Mr. Kebab" />

      <meta name="twitter:title" content="Locații | Mr. Kebab"/>
      <meta name="twitter:description" content="Mr Kebab are 4 locații la Malina Mică, Botanica și Râșcani.
      Alege pe cel mai apropiat ție și comandă! Sună la 0675 59 999 sau vino în unul dintre restaurantele noastre de tip fast-food"/>
      <meta name="twitter:image" content="https://res.cloudinary.com/dbh1vgas3/image/upload/v1628077326/logo_ps0e0n.png"/>
    </Head>
    <div className="h-16 md:h-26" />
    <LocationsContainer>
      <LocationsLinks theme={THEMES.light} />
      <GoogleMap />
    </LocationsContainer>
  </Layout>
)

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['locations', 'header', 'common'])),
  },
})

export default LocationsPage
