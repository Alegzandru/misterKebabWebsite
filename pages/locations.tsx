import React from 'react'
import GoogleMap from '../src/components/GoogleMap/GoogleMap'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '../src/components/Layout/Layout'
import LocationsContainer from '../src/components/LocationsContainer/LocationsContainer'
import LocationsLinks from '../src/components/LocationsLinks/LocationsLinks'
import { THEMES } from '../src/constants/common'

const LocationsPage = () => (
  <Layout>
    <div className="h-16 md:h-26" />
    <LocationsContainer>
      <LocationsLinks theme={THEMES.light} />
      <GoogleMap />
    </LocationsContainer>
  </Layout>
)

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['locations', 'header'])),
  },
})

export default LocationsPage
