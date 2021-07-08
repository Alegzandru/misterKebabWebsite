import '../public/fonts/fonts.css'
import '../public/styles/global.css'
import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ParallaxProvider>
    <Head>
      <title>Mister Kebab</title>
    </Head>
    <Component {...pageProps} />
  </ParallaxProvider>
)

export default MyApp
