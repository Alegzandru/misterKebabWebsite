import React, { PropsWithChildren, useEffect, useState } from 'react'
import { LANGUAGES } from '../../constants'
import { ModalContextProvider } from '../../store/Modal/Modal.context'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'

type Props = PropsWithChildren<unknown>

const Layout = ({ children }: Props) => {
  const [currentMainLanguage] = useState(LANGUAGES.redHatDisplay)

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
      <Modal />
    </ModalContextProvider>
  )
}

export default Layout
