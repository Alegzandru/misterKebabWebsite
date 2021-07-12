import React, { PropsWithChildren } from 'react'
import { ModalContextProvider } from '../../store/Modal/Modal.context'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'

type Props = PropsWithChildren<unknown>

const Layout = (props: Props) => {
  const { children } = props

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
