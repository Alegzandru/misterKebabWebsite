import classNames from 'classnames'
import { useEffect, useState } from 'react'

import ArrowUp from '../Svgs/ArrowUp/ArrowUp'
import styles from './BackToTopButton.module.scss'

const BackToTopButton = () => {

  const [show, setShow] = useState(false)

  const checkScrollTop = () => {
    setShow(window.pageYOffset > 200)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)

    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [])

  return (
    <a href="#" className={classNames(
      styles.backToTopContainer,
      'overflow-hidden rounded-full fixed justify-center items-center transition-opacity hidden md:flex z-50',
      show ? 'opacity-100' : 'opacity-0'
    )}>
      <div className={classNames(styles.backToTopContainer__innerCircle, 'rounded-full z-10')} />
      <ArrowUp className={classNames(styles.backToTopContainer__arrowUp, 'absolute z-20')} />
      <ArrowUp className={classNames(styles.backToTopContainer__arrowDown, 'absolute z-20')} />
    </a>
  )
}

export default BackToTopButton
