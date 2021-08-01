import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

import textLogo from '../../../public/images/logos/logo-text.png'
import { CartContext } from '../../store/Cart/Cart.context'
import { ModalContext } from '../../store/Modal/Modal.context'
import styles from './OpenCartButton.module.scss'

const OpenCartButton = () => {
  const { actions: { showCartModal } } = useContext(ModalContext)
  const { state: { price, count } } = useContext(CartContext)

  const { t } = useTranslation('common')

  const [scale, setScale] = useState(false)

  useEffect(() => {
    setScale(true)
  }, [price, count])

  const onTransitionEndHandler = () => {
    setScale(false)
  }

  return count > 0 ? (
    <button
      aria-label="Open cart"
      className={classNames(
        styles.buttonContainer,
        scale ? 'scale-110' : '',
        'h-16 fixed flex items-center z-50 rounded px-4 transition-all transform animate-fadeIn bottom-8 md:bottom-14'
      )}
      onTransitionEnd={onTransitionEndHandler}
      onAnimationEnd={onTransitionEndHandler}
      onClick={showCartModal}
    >
      <span
        className={classNames(styles.buttonContainer__counter, 'absolute flex justify-center items-center font-bold rounded-full')}
      >
        {count}
      </span>
      <div className={classNames(styles.buttonContainer__logo, 'absolute')}>
        <Image src={textLogo} quality={100} alt="Logo" layout="fill" objectFit="contain" />
      </div>
      <p className="flex flex-col items-start">
        <span className={styles.buttonContainer__text}>{t('Coșul tău')}</span>
        <span className={styles.buttonContainer__price}>{price} {t('MDL')}</span>
      </p>
    </button>
  ) : null
}

export default OpenCartButton
