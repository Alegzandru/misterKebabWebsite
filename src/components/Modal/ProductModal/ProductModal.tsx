/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React, { useContext } from 'react'

import { TOPPINGS } from '../../../constants'
import { ModalContext } from '../../../store/Modal/Modal.context'
import Badges from '../../Badges/Badges'
import Recommended from '../../Recommended/Recommended'
import HallalInsignia from '../../Svgs/HallalInsignia/HallalInsignia'
import styles from './ProductModal.module.scss'
import ToppingsManager from './ToppingsManager/ToppingsManager'

const ProductModal = () => {
  const {
    state: {
      product: { name, image, badges, weight, price }, // ingredients, toppings },
    },
  } = useContext(ModalContext)

  return (
    <div className={classNames(styles.productPopupContainer, 'w-full relative mx-auto')}>
      <div className="flex">
        <div>
          <HallalInsignia className={classNames(styles.productPopupContainer__insignia, 'absolute -left-4 -top-4 lg:-left-8 lg:-top-8')} />
          <img className="rounded w-full object-cover lg:min-h-150" src={`/images/food/${image}.png`} alt="Product image" />
        </div>
        <div className="mt-6 font-bold md:mt-13 lg:w-130 lg:min-w-130 lg:ml-10 lg:mt-0 xl:w-140 xl:min-w-140">
          <Badges className={styles.productPopupContainer__badges} type="big" badges={badges} />
          <h1 className={classNames(styles.productPopupContainer__name, 'mt-2 lg:mt-0')}>{name}</h1>
          <h2 className={styles.productPopupContainer__price}>{price} MDL</h2>
          <p className={classNames(styles.productPopupContainer__description, 'font-normal mt-4')}>
            <span className={styles.productPopupContainer__weight}>{weight} g</span>
            <br />
            {/* {ingredients} */}
            carne pui, varză, morcov, castraveți, roșii, cartofi, sos de usturoi marca Mr Kebab, sos ketchup
          </p>
          {/* <ToppingsHandler toppings={toppings} /> */}
          <ToppingsManager
            toppings={TOPPINGS}
            count={2}
          />
        </div>
      </div>
      <Recommended currentProductName={name} />
    </div>
  )
}

export default ProductModal
