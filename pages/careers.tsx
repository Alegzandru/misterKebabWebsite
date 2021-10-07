import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Careers from '../src/components/Careers/Careers'
import Layout from '../src/components/Layout/Layout'
import Head from 'next/head'
import Modal from '../src/components/Modal/Modal'
import { useRouter } from 'next/router'
import { LANGUAGES, metaData } from '../src/constants/common'
import { useTranslation } from 'react-i18next'


const CareersPage = () => {
  const router = useRouter()
  const isRo = router.locale === LANGUAGES.ro

  const {t} = useTranslation('common')

  return(
    <Layout>
      <Head>
        <title>{t('Cariere | Mr. Kebab')}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* eslint-disable-next-line max-len*/}
        <meta name="description" content="Mr Kebab angajeaza personal care adora kebabul! Devino si tu parte a echipei noastre: chelneri, bucatari, casieri. O retea de fast-food prietenoasa!"/>
        <meta name="robots" content="index, follow"/>

        <meta property="og:type" content="website" />
        {/* eslint-disable-next-line max-len*/}
        <meta property="og:title" content="Mr Kebab angajeaza personal care adora kebabul! Devino si tu parte a echipei noastre: chelneri, bucatari, casieri. O retea de fast-food prietenoasa!"/>
        <meta property="og:description" content={isRo ? metaData.careers.description.ro : metaData.careers.description.ru} />
        <meta property="og:image" content="https://res.cloudinary.com/dbh1vgas3/image/upload/v1628077326/logo_ps0e0n.png" />
        <meta property="og:url" content="PERMALINK" />
        <meta property="og:site_name" content="Mr. Kebab" />

        {/* eslint-disable-next-line max-len*/}
        <meta name="twitter:title" content="Mr Kebab angajeaza personal care adora kebabul! Devino si tu parte a echipei noastre: chelneri, bucatari, casieri. O retea de fast-food prietenoasa!"/>
        <meta name="twitter:description" content={isRo ? metaData.careers.description.ro : metaData.careers.description.ru}/>
        <meta name="twitter:image" content="https://res.cloudinary.com/dbh1vgas3/image/upload/v1628077326/logo_ps0e0n.png"/>
      </Head>
      <Careers />
      <Modal/>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['careers', 'header', 'common'])),
  },
})

export default CareersPage
