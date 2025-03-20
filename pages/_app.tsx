import '../public/fonts/fonts.css'
import '../public/styles/global.css'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/swiper.scss'
import 'tailwindcss/tailwind.css'

// comment for redeployment 2

import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import TagManager from 'react-gtm-module'
import { ParallaxProvider } from 'react-scroll-parallax'

import Loader from '../src/components/Loader/Loader'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loaded, setLoaded] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      setLoaded(false)
    }

    const handleComplete = () => {
      setLoaded(true)
    }

    setLoaded(true)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router.locale])

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PVZF6G8' })
  }, [])

  if (!loaded) {
    return <Loader />
  }

  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default appWithTranslation(MyApp)
