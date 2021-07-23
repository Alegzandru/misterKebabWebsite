import classNames from 'classnames'
import Image from 'next/image'
import React, { memo, useContext } from 'react'
import { ModalContext } from '../../store/Modal/Modal.context'
import { Product } from '../../types'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import Badges from '../Badges/Badges'
import Bag from '../Svgs/Bag/Bag'
import styles from './ProductCard.module.scss'
import ProductCardCount from './ProductCardCount/ProductCardCount'

type Props = Product

const ProductCard = memo((props: Props) => {
  const { name, nameru, price, image, weight, badges, subcategory } = props

  const router = useRouter()
  const ro = router.locale === 'ro'
  const { t } = useTranslation('common')

  const { actions: { showProductModal } } = useContext(ModalContext)

  return (
    <div
      role="button"
      className={classNames(styles.productCardContainer, 'w-full relative rounded flex flex-col bg-white font-bold transition-all')}
      onClick={() => showProductModal(props)}
    >
      <div className={classNames(styles.productCardContainer__imageContainer, 'relative w-full flex-1 transition-all duration-500')}>
        <Image className="rounded-t" src={image} alt="Product image" layout="fill" objectFit="cover" quality={80} />
      </div>
      <div className={classNames(styles.productCardContainer__description, 'w-full rounded transition-all duration-500')}>
        <div className="flex">
          <h4 className={classNames(styles.productCardContainer__title)}>
            {ro ? name : nameru}
          </h4>
          <span className={classNames(styles.productCardContainer__price, 'flex items-center whitespace-nowrap ml-auto pl-2')}>
            {price} {t('MDL')}
          </span>
        </div>
        <div className={classNames(styles.productCardContainer__badgesContainer, 'flex lg:mt-8 transition-opacity duration-300')}>
          <span className={classNames(
            styles.productCardContainer__weight,
            'hidden lg:flex items-center whitespace-nowrap mr-auto pr-2'
          )}
          >{weight}{weight?subcategory==='Cold Drinks'||subcategory==='Băuturi Dulci'||subcategory==='Hot Drinks'?t('ml'):t('g'):''}</span>
          <Badges className={classNames(styles.productCardContainer__badges, 'absolute lg:static')} badges={badges} type="small" />
        </div>
        <div className={classNames(styles.productCardContainer__addToCart, 'flex w-full mt-5 lg:absolute lg:opacity-0 transition-all duration-500')}>
          <ProductCardCount styles={styles} />
          <button
            className={classNames(
              styles.productCardContainer__addToCartButton,
              'flex w-full justify-center items-center font-bold transition-colors duration-300'
            )}
            onClick={(event) => event.stopPropagation()}
          >
            {ro ? 'în coș' : 'в корзину'}
            <Bag className={classNames(styles.productCardContainer__bag, 'ml-2 transition-all duration-300')} />
          </button>
        </div>
      </div>
    </div>
  )
})

ProductCard.displayName = 'ProductCard'

export default ProductCard
