import Head from 'next/head'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<unknown>

const Layout = (props: Props) => {
  const { children } = props

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Red Hat Display/RedHatDisplay-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
