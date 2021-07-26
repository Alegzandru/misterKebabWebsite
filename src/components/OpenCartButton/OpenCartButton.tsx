import classNames from 'classnames'
import Image from 'next/image'
import React, { useContext } from 'react'

import textLogo from '../../../public/images/logos/logo-text.png'
import { ModalContext } from '../../store/Modal/Modal.context'
import styles from './OpenCartButton.module.scss'

const OpenCartButton = () => {
  const { actions: { showCartModal } } = useContext(ModalContext)

  return (
    <button
      aria-label="Open cart"
      className={classNames(styles.buttonContainer, 'fixed flex items-center z-50 rounded px-4')}
      onClick={showCartModal}
    >
      <span
        className={classNames(styles.buttonContainer__counter, 'absolute flex justify-center items-center font-bold rounded-full')}
      >
        {4}
      </span>
      <div className={classNames(styles.buttonContainer__logo, 'absolute')}>
        <Image src={textLogo} quality={100} alt="Logo" layout="fill" objectFit="contain" />
      </div>
      <p className="flex flex-col items-start">
        <span className={styles.buttonContainer__text}>Coşul tău</span>
        <span className={styles.buttonContainer__price}>{382} MDL</span>
      </p>
    </button>
  )
}

export default OpenCartButton
