/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState, useRef } from 'react'
import lottie from 'lottie-web'

import { DRINKS, MODALS, WEIGHT_TYPE } from '../../../constants'
import { LANGUAGES, SIZES } from '../../../constants/common'
import { CartContext } from '../../../store/Cart/Cart.context'
import { ModalContext } from '../../../store/Modal/Modal.context'
import { ProductToppingsContext } from '../../../store/ProductToppings/ProductToppings.context'
import { Product, Response } from '../../../types'
import { cancelablePromise } from '../../../utils'
import { fetcher, sortToppings } from '../../../utils/products'
import Badges from '../../Badges/Badges'
import Button from '../../Button/Button'
import ProductCount from '../../ProductCount/ProductCount'
import Recommended from '../../Recommended/Recommended'
import Bag from '../../Svgs/Bag/Bag'
import HallalInsignia from '../../Svgs/HallalInsignia/HallalInsignia'
import styles from './ProductModal.module.scss'
import ToppingsManager from './ToppingsManager/ToppingsManager'

const ProductModal = () => {
  const { actions: { addProducts } } = useContext(CartContext)
  const {
    state: { count, toppings: currentToppings },
    actions: { setCurrentProduct, setCount },
  } = useContext(ProductToppingsContext)
  const {
    state: {
      show,
      product: { name, image, badges, weight, price, ingredients, toppings, nameru, ingredientsru, subcategory },
    },
    actions: { closeModal },
  } = useContext(ModalContext)

  const lottieRef = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const isRo = router.locale === LANGUAGES.ro

  const { t } = useTranslation('common')

  const [{ ok, data }, setData] = useState<Response<Product[]>>({ ok: true, data: [] })

  const withToppings = !!(toppings.topping.length || toppings.without.length)

  useEffect(() => {
    setData({ ok: true, data: [] })

    const { promise, cancel } = cancelablePromise<Response<Product[]>>(fetcher(`?name_eq=${subcategory}`))
    promise.then((recommendedData) => {
      setData(recommendedData)
    })

    return cancel
  }, [name])

  useEffect(() => {
    (
      async () => {
        const lottieJson = await import('../../../../public/lottie/loader2.json')

        lottie.loadAnimation({
          container: lottieRef.current as HTMLDivElement,
          animationData: lottieJson,
          renderer: 'svg',
          loop: true,
          autoplay: true,
        })

      }
    )()
  }, [])

  useEffect(() => {
    if (show === MODALS.product) {
      setCurrentProduct(name)
    }
  }, [show, name])

  const onClickHandler = () => {
    setCurrentProduct('')
    addProducts(name, nameru, count, withToppings ? currentToppings : [])

    closeModal()
  }

  return (
    <div className={classNames(styles.productModalContainer, 'w-full relative mx-auto')}>
      <div className="lg:flex">
        <div className="relative">
          <HallalInsignia className={classNames(styles.productModalContainer__insignia, 'absolute -left-4 -top-4 lg:-left-8 lg:-top-8')} />
          <img className={classNames(styles.productModalContainer__image, 'rounded w-full object-cover')} src={image} alt="Product image" />
        </div>
        <div className="mt-6 font-bold md:mt-13 lg:w-130 lg:min-w-130 lg:ml-10 lg:mt-0 xl:w-140 xl:min-w-140">
          <Badges className={styles.productModalContainer__badges} type="big" badges={badges} />
          <h1 className={classNames(styles.productModalContainer__name, 'mt-2 lg:mt-0')}>{isRo ? name : nameru}</h1>
          <h2 className={styles.productModalContainer__price}>{price} {t('MDL')}</h2>
          {!withToppings && (
            <ProductCount className="my-6" background="gray" size={SIZES.md} value={count} onChange={setCount} />
          )}
          <p className={classNames(styles.productModalContainer__description, 'font-normal mt-4')}>
            {
              weight ? <>
                <span className={styles.productModalContainer__weight}>
                  {weight}
                  {t(DRINKS.includes(subcategory) ? WEIGHT_TYPE.milliliters : WEIGHT_TYPE.grams)}
                </span>
                <br />
              </> : null
            }
            {isRo ? ingredients : ingredientsru}
          </p>
          {withToppings && <ToppingsManager toppings={{
            topping: toppings.topping.sort(sortToppings(router.locale || LANGUAGES.ro)),
            without: toppings.without.sort(sortToppings(router.locale || LANGUAGES.ro)),
            drinks: toppings.drinks ? toppings.drinks.sort(sortToppings(router.locale || LANGUAGES.ro)) : [],
          }} />}
          <Button className="mt-8 md:mt-14" onClick={onClickHandler}>
            <Bag className={classNames(styles.productCardContainer__bag, 'mr-2')} stroke="#ffffff" />
            {t('Adaugă la comandă')}
          </Button>
        </div>
      </div>
      {
        ok
          ? data.length ? <Recommended products={data as Product[]} /> : <div ref={lottieRef} id="lottie" className="mx-auto w-40 md:w-80"/>
          : null
      }
    </div>
  )
}

export default ProductModal
