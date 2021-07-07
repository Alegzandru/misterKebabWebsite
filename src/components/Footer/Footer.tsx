import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import textLogo from '../../../public/images/logo-text.png'
import { PAGES } from '../../constants'
import LanguageButton from '../LanguageButton/LanguageButton'
import LiraLogo from '../Svgs/LiraLogo/LiraLogo'
import Socials from '../Svgs/Socials/Socials'
import styles from './Footer.module.scss'

const Footer = () => {
  const link = ({ path, name }: typeof PAGES['home'], index: number) => (
    <li key={index} className={classNames(styles.footerContainer__anchor, 'my-10 md:my-0 md:mr-10 transition-all')}>
      <Link href={path}>
        <a>{name}</a>
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
          <div className="relative flex items-center w-38 h-14 md:absolute md:inset-x-0 md:mx-auto md:w-50 md:h-16 md:-mt-10">
            <Image src={textLogo} quality={100} alt="Logo" layout="fill" objectFit="contain" />
            <LanguageButton className="absolute -right-2/4 md:flex md:justify-center md:items-center md:inset-x-0 md:-bottom-10" />
          </div>
        </div>
        <Socials className="flex-half flex justify-end items-center md:flex-none" />
      </div>
      <div className="flex justify-center md:mt-22">
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
