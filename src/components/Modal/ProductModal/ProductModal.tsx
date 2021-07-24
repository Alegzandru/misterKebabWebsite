/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

import { SIZES } from '../../../constants/common'
import { ModalContext } from '../../../store/Modal/Modal.context'
import { API_URL } from '../../../utils/urls'
import Badges from '../../Badges/Badges'
import ProductCount from '../../ProductCount/ProductCount'
import Recommended from '../../Recommended/Recommended'
import HallalInsignia from '../../Svgs/HallalInsignia/HallalInsignia'
import { getTsProduct } from '../GetTsProduct'
import styles from './ProductModal.module.scss'
import ToppingsManager from './ToppingsManager/ToppingsManager'

const fetcher = async (url: string) => {
  const resCategory = await fetch(url)
  const category = await resCategory.json()

  const resCategories = await fetch('https://mr-kebab-admin.herokuapp.com/categories')
  const subcategories = await resCategories.json()

  const resProducts = await fetch('https://mr-kebab-admin.herokuapp.com/products')
  const productsFetch = await resProducts.json()

  if (category.length === 0 || subcategories.length === 0 || productsFetch.length === 0 || category[0].recomended_subcategories.length === 0) {
    return ['no products']
  } else {
    const filteredProducts = category[0].recomended_subcategories.map((recommendedSub: any) => {
      const subcategoryProducts = productsFetch.filter((productFilter: any) =>
        productFilter.subcategory.name === recommendedSub.name &&
        productFilter.image &&
        productFilter.price !== null &&
        productFilter.name !== null
      )
      const random = Math.floor(Math.random() * subcategoryProducts.length)
      const product = subcategoryProducts[random]

      return getTsProduct(product, subcategories)
    })

    return filteredProducts
  }
}

const ProductModal = () => {
  const router = useRouter()
  const ro = router.locale === 'ro'
  const { t } = useTranslation('common')

  const [data, setData] = useState([])

  const {
    state: {
      product: { name, image, badges, weight, price, ingredients, toppings, nameru, ingredientsru, subcategory },
    },
  } = useContext(ModalContext)

  const noToppings = toppings.topping.length === 0 && toppings.without.length === 0

  useEffect(() => {
    (async () => {
      const dataEffect = await fetcher(`${API_URL}/categories?name_eq=${subcategory}`)
      setData(dataEffect)
    })()
  }, [name])

  return (
    <div className={classNames(styles.productModalContainer, 'w-full relative mx-auto')}>
      <div className="lg:flex">
        <div>
          <HallalInsignia className={classNames(styles.productModalContainer__insignia, 'absolute -left-4 -top-4 lg:-left-8 lg:-top-8')} />
          <img className="rounded w-full object-cover" src={image} alt="Product image" />
        </div>
        <div className="mt-6 font-bold md:mt-13 lg:w-130 lg:min-w-130 lg:ml-10 lg:mt-0 xl:w-140 xl:min-w-140">
          <Badges className={styles.productModalContainer__badges} type="big" badges={badges} />
          <h1 className={classNames(styles.productModalContainer__name, 'mt-2 lg:mt-0')}>{ro ? name : nameru}</h1>
          <h2 className={styles.productModalContainer__price}>{price} {t('MDL')}</h2>
          {noToppings && <ProductCount className="my-6" background="gray" size={SIZES.md} />}
          <p className={classNames(styles.productModalContainer__description, 'font-normal mt-4')}>
            <span className={styles.productModalContainer__weight}>
              {weight}
              {weight ? subcategory === 'Cold Drinks' || subcategory === 'Băuturi Dulci' || subcategory === 'Hot Drinks' ? t('ml') : t('g') : ''}
            </span>
            <br />
            {ro ? ingredients : ingredientsru}
          </p>
          {!noToppings && <ToppingsManager toppings={toppings} count={2} />}
        </div>
      </div>
      {
        data[0] === 'no products' ?
          ''
          :
          data.length === 0 ?
            'Loading...'
            :
            <Recommended products={data} />
      }
    </div>
  )
}

export default ProductModal
