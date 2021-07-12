/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React, { useContext } from 'react'

import { ModalContext } from '../../../store/Modal/Modal.context'
import Badges from '../../Badges/Badges'
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
    <div className={classNames(styles.productPopupContainer, 'w-full relative')}>
      <HallalInsignia className={classNames(styles.productPopupContainer__insignia, 'absolute -left-4 -top-4')} />
      <img className="rounded w-full" src={`/images/food/${image}.png`} alt="Product image" />
      <div className="mt-6 font-bold">
        <Badges className={styles.productPopupContainer__badges} type={'big'} badges={badges} />
        <h1 className={classNames(styles.productPopupContainer__name, 'mt-2')}>{name}</h1>
        <h2 className={styles.productPopupContainer__price}>{price} MDL</h2>
        <p className={classNames(styles.productPopupContainer__description, 'font-normal mt-4')}>
          <span className={styles.productPopupContainer__weight}>{weight} g</span>
          <br />
          {/* {ingredients} */}
          carne pui, varză, morcov, castraveți, roșii, cartofi, sos de usturoi marca Mr Kebab, sos ketchup
        </p>
        {/* <ToppingsHandler toppings={toppings} /> */}
        <ToppingsManager
          toppings={{
            topping: [{
              text: 'Carne 60 g', price: 15,
            }, {
              text: 'Masline 30 g', price: 7,
            }, {
              text: 'Cascaval mozzarella 75 g', price: 12,
            }, {
              text: 'Morcov 50 g', price: 7,
            }, {
              text: 'Sos iute ', price: 0,
            }],
            without: ['Varza', 'Morcov', 'Castraveti', 'Rosii', 'Cartofi'],
          }}
          count={2}
        />
      </div>
    </div>
  )
}

export default ProductModal
