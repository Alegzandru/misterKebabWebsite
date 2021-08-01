import React, { PropsWithChildren, useEffect, useState } from 'react'

import { FONT } from '../../constants/common'
import { ModalContextProvider } from '../../store/Modal/Modal.context'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

type Props = PropsWithChildren<unknown>

const Layout = ({ children }: Props) => {
  const [currentMainLanguage] = useState(FONT.redHatDisplay)

  useEffect(() => {
    document.body.style.fontFamily = currentMainLanguage
  }, [])

  return (
    <ModalContextProvider>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </ModalContextProvider>
  )
}

export default Layout
