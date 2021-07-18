import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import textLogo from '../../../public/images/logos/logo-text.png'
import { PAGES, SIZES } from '../../constants/common'
import LanguageButton from '../LanguageButton/LanguageButton'
import styles from './Header.module.scss'

const Header = () => {
  const [showMobileHeader, setShowMobileHeader] = useState(false)
  const [transparent, setTransparent] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const checkScrollTop = () => {
      const { innerWidth, pageYOffset } = window

      setTransparent(innerWidth < SIZES.md ? pageYOffset < 200 : true)
    }

    const onResizeHandler = () => {
      if (window.innerWidth >= SIZES.md) {
        setShowMobileHeader(false)
      }
    }

    const numberSign = router.asPath[1]

    if (!numberSign || numberSign === '#') {
      checkScrollTop()

      window.addEventListener('scroll', checkScrollTop)
    } else {
      setTransparent(false)
    }

    window.addEventListener('resize', onResizeHandler)

    return () => {
      window.removeEventListener('scroll', checkScrollTop)
      window.removeEventListener('resize', onResizeHandler)
    }
  }, [])

  const link = ({ pathname, name }: typeof PAGES['home'], index: number) => (
    <li
      key={index}
      style={router.asPath === pathname ? {
        color: transparent ? '#fab729' : '#df2026',
        fontWeight: 700,
      } : undefined}
      className={classNames(styles.headerContainer__anchor, 'font-bold w-full md:font-normal md:mx-8')}
    >
      <Link href={pathname}>
        <a>{name}</a>
      </Link>
    </li>
  )

  const navbar = (
    <div className={classNames(
      styles.headerContainer__navbarMobile,
      showMobileHeader ? [styles.headerContainer__navbarMobile_height, 'pb-6'] : '',
      'absolute overflow-hidden bg-white px-4 transition-all h-0',
      'md:static md:h-full md:flex md:items-center md:pr-0',
      { 'md:bg-transparent': transparent }
    )}>
      <nav className="md:absolute md:inset-x-0 md:mx-auto md:w-max">
        <ul className="md:flex md:items-center">
          {Object.values(PAGES).map(link)}
        </ul>
      </nav>
      <LanguageButton className="hidden md:flex mr-6" color="#F9F9F9" backgroundColor={transparent ? '#611220' : '#FAB729'} />
      <a
        style={transparent && !showMobileHeader ? {
          backgroundColor: 'transparent',
          border: 'none',
        } : undefined}
        className={classNames(styles.headerContainer__callNumber, 'w-full flex justify-center items-center flex-col font-bold md:items-end')}
        href="tel:+37367559999"
      >
        <span className={styles.headerContainer__callNumberText}>Serviciu de Livrare</span>
        +373 (67) 559 999
      </a>
    </div>
  )

  const mobileButton = (
    <button
      className={classNames(
        styles.headerContainer__showHeaderButton,
        'flex items-center h-12 font-bold transition-all',
        showMobileHeader ? 'px-3' : 'px-4',
        { [styles.headerContainer__showHeaderButton_colors]: showMobileHeader || !transparent }
      )}
      onClick={() => setShowMobileHeader(!showMobileHeader)}
    >
      <span className={classNames('overflow-hidden transition-all', showMobileHeader ? 'w-0' : '')}>Meniu</span>
      <div className={classNames(
        styles.headerContainer__hamburgerBox,
        showMobileHeader ? styles.headerContainer__hamburgerBox_isActive : styles.headerContainer__hamburgerBox_margin,
        'flex justify-center relative h-6 w-6'
      )}>
        <div className={classNames(
          styles.headerContainer__hamburgerInner,
          { [styles.headerContainer__hamburgerInner_background]: showMobileHeader || !transparent }
        )} />
      </div>
    </button>
  )

  return (
    <header className={classNames(
      styles.headerContainer,
      'py-2 px-4 fixed flex items-center z-50 w-full h-16 transition-colors md:absolute md:inset-x-0 md:mx-auto max-w-screen',
      {
        [styles.headerContainer_boxShadow]: !transparent,
        [styles.headerContainer_transparent]: transparent,
        'bg-white': showMobileHeader || !transparent,
      }
    )}>
      <div className="relative flex mr-auto w-18 h-6 md:w-24 md:h-8">
        <Image src={textLogo} quality={100} alt="Logo" layout="fill" objectFit="contain" />
      </div>
      {navbar}
      <div className="flex md:hidden">
        <LanguageButton className={classNames('mr-6 transition-opacity opacity-0', { 'opacity-100': showMobileHeader })} />
        {mobileButton}
      </div>
    </header>
  )
}

export default Header
