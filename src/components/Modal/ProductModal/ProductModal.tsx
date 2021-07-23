/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React, { useContext } from 'react'

import { ModalContext } from '../../../store/Modal/Modal.context'
import Badges from '../../Badges/Badges'
import Recommended from '../../Recommended/Recommended'
import HallalInsignia from '../../Svgs/HallalInsignia/HallalInsignia'
import styles from './ProductModal.module.scss'
import ToppingsManager from './ToppingsManager/ToppingsManager'

const ProductModal = () => {
  const {
    state: {
      product: { name, image, badges, weight, price, ingredients, toppings },
    },
  } = useContext(ModalContext)

  return (
    <div className={classNames(styles.productModalContainer, 'w-full relative mx-auto')}>
      <div className="lg:flex">
        <div>
          <HallalInsignia className={classNames(styles.productModalContainer__insignia, 'absolute -left-4 -top-4 lg:-left-8 lg:-top-8')} />
          <img className="rounded w-full object-cover" src={image} alt="Product image" />
        </div>
        <div className="mt-6 font-bold md:mt-13 lg:w-130 lg:min-w-130 lg:ml-10 lg:mt-0 xl:w-140 xl:min-w-140">
          <Badges className={styles.productModalContainer__badges} type="big" badges={badges} />
          <h1 className={classNames(styles.productModalContainer__name, 'mt-2 lg:mt-0')}>{name}</h1>
          <h2 className={styles.productModalContainer__price}>{price} MDL</h2>
          <p className={classNames(styles.productModalContainer__description, 'font-normal mt-4')}>
            <span className={styles.productModalContainer__weight}>{weight} g</span>
            <br />
            {ingredients}
          </p>
          {
            toppings.topping.length === 0 && toppings.without.length === 0 ?
              <div></div>
              :
              <ToppingsManager
                toppings={toppings}
                count={2}
              ></ToppingsManager>
          }
        </div>
      </div>
      <Recommended currentProductName={name} />
    </div>
  )
}

export default ProductModal
