import { PropsWithChildren } from 'react'

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
    </>
  )
}

export default Layout
