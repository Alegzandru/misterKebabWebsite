import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import React from 'react'

import Careers from '../src/components/Careers/Careers'
import { HeadWithMeta } from '../src/components/Layout/HeadWithMeta'
import Layout from '../src/components/Layout/Layout'
import Modal from '../src/components/Modal/Modal'
import { metaData } from '../src/constants/common'


const CareersPage = () => {
  const router = useRouter()
  const locale = router.locale as string

  return(
    <Layout>
      <HeadWithMeta
        title={metaData.careers.title[locale]}
        description={metaData.careers.description[locale]}
        index={true}
        img={'https://res.cloudinary.com/dbh1vgas3/image/upload/v1628077326/logo_ps0e0n.png'}
      />
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
