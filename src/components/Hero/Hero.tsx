/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

import { HERO_BUTTONS } from '../../constants'
import { SCREEN_TYPE, SIZES } from '../../constants/common'
import { HeroButton } from '../../types'
import HallalInsignia from '../Svgs/HallalInsignia/HallalInsignia'
import styles from './Hero.module.scss'

const Hero = () => {
  const [currentBackgroundImageType, setCurrentBackgroundImageType] = useState(SCREEN_TYPE.mobile)

  useEffect(() => {
    const onResizeHandler = () => {
      const { innerWidth } = window

      if (innerWidth < SIZES.md) {
        setCurrentBackgroundImageType(SCREEN_TYPE.mobile)
      }
      if (innerWidth >= SIZES.md && innerWidth < SIZES.lg) {
        setCurrentBackgroundImageType(SCREEN_TYPE.tablet)
      }
      if (innerWidth >= SIZES.lg) {
        setCurrentBackgroundImageType(SCREEN_TYPE.desktop)
      }
    }

    onResizeHandler()
    window.addEventListener('resize', onResizeHandler)

    return () => window.removeEventListener('resize', onResizeHandler)
  }, [])

  const heroButton = ({ name, id }: HeroButton) => (
    <a
      key={id}
      href={`#${id}`}
      className={classNames(
        styles.heroContainer__button,
        styles[id],
        'h-full flex-1 overflow-hidden relative rounded bg-no-repeat transition-transform'
      )}
    >
      <span className={classNames(styles.heroContainer__buttonText, 'absolute transition-colors font-bold')}>{name}</span>
    </a>
  )

  return (
    <section className={classNames(styles.heroContainer, 'flex items-center justify-center lg:justify-end xl:justify-center h-screen relative')}>
      <div className={classNames(
        styles.heroContainer__background,
        styles[currentBackgroundImageType],
        'absolute mix-blend-darken inset-0 bg-no-repeat')}
      />
      <img className={classNames(styles.heroContainer__logo, 'absolute top-0 z-10 hidden lg:block')} src="/images/logos/logo.png" alt="Logo" />
      <div
        className={classNames(
          styles.heroContainer__contentContainer,
          'flex flex-col items-center z-30 text-center -mt-24 px-3 md:px-2 md:w-full md:-mt-1 lg:mt-0 lg:w-auto lg:absolute lg:top-48'
        )}
      >
        <HallalInsignia className={styles.heroContainer__insignia} />
        <h1 className={classNames(styles.heroContainer__heading, 'font-bold my-0 mx-1')}>Ce vei comanda astăzi?</h1>
        <div className={classNames(styles.heroContainer__buttonsContainer, 'flex flex-nowrap w-full')}>
          {HERO_BUTTONS.map(heroButton)}
        </div>
        <a
          href="#categories"
          className={classNames(styles.heroContainer__chooseButton, 'flex items-center justify-center rounded font-bold transition-all')}
        >
          alege altceva
        </a>
      </div>
      <img
        className={classNames(
          styles.heroContainer__arrow,
          'hidden lg:block absolute z-20 inset-x-0 mx-auto animate-bounce'
        )}
        src="/images/scroll-arrow.png"
        alt="Scroll down arrow"
      />
    </section>
  )
}

export default Hero
