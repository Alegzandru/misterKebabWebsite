/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import { ModalContext } from '../../../store/Modal/Modal.context'
import Badges from '../../Badges/Badges'
import Recommended from '../../Recommended/Recommended'
import HallalInsignia from '../../Svgs/HallalInsignia/HallalInsignia'
import styles from './ProductModal.module.scss'
import ToppingsManager from './ToppingsManager/ToppingsManager'

const ProductModal = () => {
  const router = useRouter()
  const ro = router.locale === 'ro'

  const {
    state: {
      product: { name, image, badges, weight, price, ingredients, toppings, nameru, ingredientsru },
    },
  } = useContext(ModalContext)

  return (
    <div className={classNames(styles.productPopupContainer, 'w-full relative mx-auto')}>
      <div className="lg:flex">
        <div>
          <HallalInsignia className={classNames(styles.productPopupContainer__insignia, 'absolute -left-4 -top-4 lg:-left-8 lg:-top-8')} />
          <img className="rounded w-full object-cover" src={image} alt="Product image" />
        </div>
        <div className="mt-6 font-bold md:mt-13 lg:w-130 lg:min-w-130 lg:ml-10 lg:mt-0 xl:w-140 xl:min-w-140">
          <Badges className={styles.productPopupContainer__badges} type="big" badges={badges} />
          <h1 className={classNames(styles.productPopupContainer__name, 'mt-2 lg:mt-0')}>{ro ? name : nameru}</h1>
          <h2 className={styles.productPopupContainer__price}>{price} {ro? 'MDL' : 'МДЛ'}</h2>
          <p className={classNames(styles.productPopupContainer__description, 'font-normal mt-4')}>
            <span className={styles.productPopupContainer__weight}>{weight} {ro? 'g' : 'г'}</span>
            <br />
            {ro ? ingredients : ingredientsru}
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
