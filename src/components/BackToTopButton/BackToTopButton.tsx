import classNames from 'classnames'
import { useEffect, useState } from 'react'

import styles from './BackToTopButton.module.scss'

const BackToTopButton = () => {
  const [show, setShow] = useState(false)

  const checkScrollTop = () => {
    if (!show && window.pageYOffset > 200) {
      setShow(true)
    } else if (show && window.pageYOffset <= 200) {
      setShow(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
  })

  const arrow = (className: string) => (
    <svg className={className} width="20" height="14" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.25 8.125L8 1.875L1.75 8.125" stroke="#cacaca" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <a href="#" className={classNames(
      styles.backToTopContainer,
      'overflow-hidden rounded-full fixed flex justify-center items-center transition-opacity',
      show ? 'opacity-100' : 'opacity-0'
    )}>
      <div className={classNames(styles.backToTopContainer__innerCircle, 'rounded-full z-10')} />
      {arrow(classNames(styles.backToTopContainer__arrowUp, 'absolute z-20'))}
      {arrow(classNames(styles.backToTopContainer__arrowDown, 'absolute z-20'))}
    </a>
  )
}

export default BackToTopButton
