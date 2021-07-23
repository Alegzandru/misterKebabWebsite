/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { ModalContext } from '../../../store/Modal/Modal.context'
import Badges from '../../Badges/Badges'
import Recommended from '../../Recommended/Recommended'
import HallalInsignia from '../../Svgs/HallalInsignia/HallalInsignia'
import styles from './ProductModal.module.scss'
import ToppingsManager from './ToppingsManager/ToppingsManager'
import { API_URL } from '../../../../src/utils/urls'
import { getTsProduct } from '../GetTsProduct'

const fetcher = async (url: string) => {
  const resCategory = await fetch(url)
  const category = await resCategory.json()

  const resCategories = await fetch('https://mr-kebab-admin.herokuapp.com/categories')
  const subcategories = await resCategories.json()

  const resProducts = await fetch('https://mr-kebab-admin.herokuapp.com/products')
  const productsFetch = await resProducts.json()

  if(category.length === 0 || subcategories.length === 0 || productsFetch.length === 0 || category[0].recomended_subcategories.length === 0) {
    return ['no products']
  }else{
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


  useEffect(() => {
    (async () => {
      const dataEffect = await fetcher(`${API_URL}/categories?name_eq=${subcategory}`)
      setData(dataEffect)
    })()
  }, [name])

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
          <h2 className={styles.productPopupContainer__price}>{price} {t('MDL')}</h2>
          <p className={classNames(styles.productPopupContainer__description, 'font-normal mt-4')}>
            <span className={styles.productPopupContainer__weight}>
              {weight} {weight?subcategory==='Cold Drinks'||subcategory==='Băuturi Dulci'||subcategory==='Hot Drinks'? t('ml'):t('g'):''}</span>
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
      {
        data[0] === 'no products'?
          ''
          :
          data.length === 0 ?
            'Loading...'
            :
            <Recommended products={data}/>
      }
    </div>
  )
}

export default ProductModal
