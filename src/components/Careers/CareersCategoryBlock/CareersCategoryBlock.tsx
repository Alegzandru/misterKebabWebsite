import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import styles from './CareersCategoryBlock.module.scss'

type CategoryBlockProps = PropsWithChildren<{
  heading?: string
}>

const CareersCategoryBlock = ({ heading, children }: CategoryBlockProps) => (
  <div className={classNames(
    styles.categoryContainer,
    'relative rounded bg-white z-10 -mt-5 mx-5 pt-14 pb-16 px-6',
    'sm:-mt-12 sm:pt-14 sm:pb-12 sm:px-12'
  )}>
    {heading && <h2 className={classNames(styles.categoryContainer__heading, 'font-bold')}>{heading}</h2>}
    {children}
  </div>
)

export default CareersCategoryBlock
