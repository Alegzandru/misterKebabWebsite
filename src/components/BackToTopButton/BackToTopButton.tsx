import classNames from 'classnames'
import { useEffect, useState } from 'react'

import ArrowUp from '../Svgs/ArrowUp/ArrowUp'
import styles from './BackToTopButton.module.scss'

const BackToTopButton = () => {
  const [show, setShow] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)

  const scrollDirectionHandler = () => {
    if (isScrollingUp) {
      setShow(true)
    } else if (!isScrollingUp) {
      setShow(false)
    }
  }

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if(window.pageYOffset < 200){
        setIsScrollingUp(false)
        ticking = false
        return
      } else if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      setIsScrollingUp(!(scrollY > lastScrollY))
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    scrollDirectionHandler()

    window.addEventListener('scroll', onScrollHandler)

    return () => window.removeEventListener('scroll', onScrollHandler)
  }, [isScrollingUp])

  return (
    <a
      href="#"
      className={classNames(
        styles.backToTopContainer,
        'overflow-hidden rounded-full fixed justify-center items-center transition-opacity hidden md:flex z-50',
        show ? 'opacity-100' : 'opacity-0'
      )}
      aria-label="Back to top button"
    >
      <div className={classNames(styles.backToTopContainer__innerCircle, 'rounded-full z-10')} />
      <ArrowUp key="up" className={classNames(styles.backToTopContainer__arrowUp, 'absolute z-20')} stroke="#fab72a" />
      <ArrowUp key="down" className={classNames(styles.backToTopContainer__arrowDown, 'absolute z-20')} stroke="#ffffff" />
    </a>
  )
}

export default BackToTopButton
