import '../public/fonts/fonts.css'
import '../public/styles/global.css'
import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Mister Kebab</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
