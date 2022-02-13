import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import React from 'react'

import GoogleMap from '../src/components/GoogleMap/GoogleMap'
import { HeadWithMeta } from '../src/components/Layout/HeadWithMeta'
import Layout from '../src/components/Layout/Layout'
import LocationsContainer from '../src/components/LocationsContainer/LocationsContainer'
import LocationsLinks from '../src/components/LocationsLinks/LocationsLinks'
import { metaData, THEMES } from '../src/constants/common'

const LocationsPage = () => {
  const router = useRouter()
  const locale = router.locale as string

  return(
    <Layout>
      <HeadWithMeta
        title={metaData.locations.title[locale]}
        description={metaData.locations.description[locale]}
        index={true}
        img={'https://res.cloudinary.com/dbh1vgas3/image/upload/v1628077326/logo_ps0e0n.png'}
      />
      <div className="h-16 md:h-26" />
      <LocationsContainer>
        <LocationsLinks theme={THEMES.light} />
        <GoogleMap />
      </LocationsContainer>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['locations', 'header', 'common'])),
  },
})

export default LocationsPage
