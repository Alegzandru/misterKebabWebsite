import classNames from 'classnames'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  heading: string
}>

const FormBlock = ({ heading, children }: Props) => (
  <div className="">
    <h2>{heading}</h2>
    {children}
  </div>
)

export default FormBlock
