import classNames from 'classnames'
import { useEffect, useState } from 'react'

import ArrowUp from '../Svgs/ArrowUp/ArrowUp'
import styles from './BackToTopButton.module.scss'

const BackToTopButton = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScrollHandler = () => {
      setShow(window.pageYOffset > 200)
    }

    onScrollHandler()
    window.addEventListener('scroll', onScrollHandler)

    return () => window.removeEventListener('scroll', onScrollHandler)
  }, [])

  return (
    <a href="#" className={classNames(
      styles.backToTopContainer,
      'overflow-hidden rounded-full fixed justify-center items-center transition-opacity hidden md:flex z-50',
      show ? 'opacity-100' : 'opacity-0'
    )}>
      <div className={classNames(styles.backToTopContainer__innerCircle, 'rounded-full z-10')} />
      <ArrowUp key="up" className={classNames(styles.backToTopContainer__arrowUp, 'absolute z-20')} stroke="#fab72a" />
      <ArrowUp key="down" className={classNames(styles.backToTopContainer__arrowDown, 'absolute z-20')} stroke="#ffffff" />
    </a>
  )
}

export default BackToTopButton
