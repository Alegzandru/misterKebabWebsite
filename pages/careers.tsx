import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Careers from '../src/components/Careers/Careers'
import Layout from '../src/components/Layout/Layout'


const CareersPage = () => (
  <Layout>
    <Careers />
  </Layout>
)

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['careers', 'header', 'common'])),
  },
})

export default CareersPage
