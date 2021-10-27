import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'

import textLogo from '../../../public/images/logos/logo-text.png'
import { PAGES, PHONE_NUMBERS, SIZES } from '../../constants/common'
import LanguageButton from '../LanguageButton/LanguageButton'
import styles from './Header.module.scss'
import { VALID_LOCALS } from '../../constants'

const Header = () => {
  const [showMobileHeader, setShowMobileHeader] = useState(false)
  const [transparent, setTransparent] = useState(true)

  const { t } = useTranslation('header')

  const router = useRouter()

  const localName = window.location.host.split('.')[0]
  const isValidLocal = localName === VALID_LOCALS.botanica || localName === VALID_LOCALS.rascanovca || localName === VALID_LOCALS.malinamica

  const phoneNumberText = isValidLocal ? PHONE_NUMBERS[localName].text : PHONE_NUMBERS['general'].text
  const phoneNumberLink = isValidLocal ? PHONE_NUMBERS[localName].link : PHONE_NUMBERS['general'].link

  useEffect(() => {
    const checkScrollTop = () => {
      const { pageYOffset } = window

      setTransparent(pageYOffset < 200)
    }

    const onResizeHandler = () => {
      checkScrollTop()

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
        color: transparent || showMobileHeader ? '#fab729' : '#df2026',
        fontWeight: 700,
      } : { color: !transparent ? '#58606E' : undefined }}
      className={classNames(styles.headerContainer__anchor, 'font-bold w-full md:font-medium md:mx-8')}
    >
      <Link href={pathname}>
        <a>{t(name)}</a>
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
      <LanguageButton className="hidden md:flex mr-6" transparent={transparent}/>
      <a
        style={transparent && !showMobileHeader ? {
          backgroundColor: 'transparent',
          border: 'none',
        } : undefined}
        className={classNames(styles.headerContainer__callNumber,
          'w-full flex justify-center items-center flex-col font-bold md:items-end md:px-2 group')}
        href={`tel:${phoneNumberLink}`}
      >
        <span className={styles.headerContainer__callNumberText}>{t('Serviciu de Livrare')}</span>
        <span className={transparent && !showMobileHeader ? 'group-hover:text-yellow transition duration-300' : ''}>{phoneNumberText}</span>
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
      <span className={classNames('overflow-hidden transition-all', showMobileHeader ? 'w-0' : '')}>{t('Meniu')}</span>
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
    <header
      className={classNames(
        'fixed w-full z-50 transition-colors top-0',
        {
          [styles.headerContainer_boxShadow]: !transparent,
          [styles.headerContainer_transparent]: transparent,
          'bg-white': showMobileHeader || !transparent,
        }
      )}
    >
      <div className={classNames(
        styles.headerContainer,
        'py-2 md:py-0 px-4 flex items-center w-full h-16 md:inset-x-0 md:mx-auto max-w-screen',
        styles.headerContainer__navbarHeight ,
        router.asPath[1] && router.asPath[1] !== '#' ? styles.headerContainer__navbarHeight__wide
          :
          !transparent ? styles.headerContainer__navbarHeight__narrow : styles.headerContainer__navbarHeight__wide
      )}>
        <div className="relative flex mr-auto w-18 h-6 md:w-24 md:h-8">
          <Link href="/">
            <a>
              <Image src={textLogo} quality={100} alt="Logo header Mr. Kebab" layout="fill" objectFit="contain" />
            </a>
          </Link>
        </div>
        {navbar}
        <div className="flex md:hidden">
          <LanguageButton className={classNames('mr-6 transition-opacity opacity-0', { 'opacity-100': showMobileHeader })} transparent={transparent}/>
          {mobileButton}
        </div>
      </div>
    </header>
  )
}

export default Header
