import React, { PropsWithChildren } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

type Props = PropsWithChildren<unknown>

const Layout = (props: Props) => {
  const { children } = props

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
