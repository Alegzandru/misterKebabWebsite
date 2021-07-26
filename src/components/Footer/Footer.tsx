import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'next-i18next'

import textLogo from '../../../public/images/logos/logo-text.png'
import { PAGES, THEMES } from '../../constants/common'
import LocationsLinks from '../LocationsLinks/LocationsLinks'
import LiraLogo from '../Svgs/LiraLogo/LiraLogo'
import Socials from '../Svgs/Socials/Socials'
import styles from './Footer.module.scss'

const Footer = () => {
  const router = useRouter()
  const { t } = useTranslation('header')

  const link = ({ pathname, name }: typeof PAGES['home'], index: number) => (
    <li key={index} className={classNames(styles.footerContainer__anchor, 'my-10 md:my-0 md:mr-10 transition-all')}>
      <Link href={pathname}>
        <a>{t(name)}</a>
      </Link>
    </li>
  )

  return (
    <footer className={classNames(styles.footerContainer, 'w-full pt-18 px-4 pb-6 flex flex-col md:pt-22 md:px-5')}>
      <div className="mx-auto max-w-screen flex flex-wrap w-full md:justify-between md:items-center">
        <nav className="order-last md:order-none">
          <ul className="md:flex">
            {Object.values(PAGES).map(link)}
          </ul>
        </nav>
        <div className="flex items-center flex-half md:flex-none md:h-16">
          <div className="relative flex items-center w-38 h-14 md:absolute md:inset-x-0 md:mx-auto md:w-50 md:h-16 md:-mt-5">
            <Link href="/">
              <a>
                <Image src={textLogo} quality={100} alt="Logo" layout="fill" objectFit="contain" />
              </a>
            </Link>
          </div>
        </div>
        <Socials className="flex-half flex justify-end items-center md:flex-none" />
      </div>
      {router.pathname !== PAGES.locations.pathname && <LocationsLinks theme={THEMES.dark} />}
      <div className="flex justify-center md:mt-22 lg:mt-18">
        <a href="#" className={classNames(styles.footerContainer__credits, 'relative flex')}>
          Crafted by
          <span className={classNames(styles.footerContainer__companyName, 'ml-2 flex items-center')}>
            <LiraLogo className="mr-1" /> Lira
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
