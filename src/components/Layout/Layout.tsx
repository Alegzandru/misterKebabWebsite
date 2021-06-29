import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<unknown>

const Layout = (props: Props) => {
  const { children } = props

  return (
    <main>
      {children}
    </main>
  )
}

export default Layout
