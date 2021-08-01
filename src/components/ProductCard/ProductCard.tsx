import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { memo, useContext, useState } from 'react'

import { DRINKS, WEIGHT_TYPE } from '../../constants'
import { LANGUAGES, SIZES } from '../../constants/common'
import { CartContext } from '../../store/Cart/Cart.context'
import { ModalContext } from '../../store/Modal/Modal.context'
import { Product } from '../../types'
import Badges from '../Badges/Badges'
import ProductCount from '../ProductCount/ProductCount'
import Bag from '../Svgs/Bag/Bag'
import styles from './ProductCard.module.scss'

type Props = Product

const ProductCard = memo((props: Props) => {
  const { name, nameru, price, image, weight, badges, subcategory } = props

  const { actions: { showProductModal } } = useContext(ModalContext)
  const { actions: { addProducts } } = useContext(CartContext)

  const [count, setCount] = useState(1)

  const { t } = useTranslation('common')

  const router = useRouter()
  const isRo = router.locale === LANGUAGES.ro

  const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()

    addProducts(name, count)
    setCount(1)
  }

  return (
    <div
      role="button"
      className={classNames(styles.productCardContainer, 'w-full relative rounded flex flex-col bg-white font-bold transition-all')}
      onClick={() => showProductModal(props)}
    >
      <div className={classNames(styles.productCardContainer__imageContainer, 'relative w-full flex-1 transition-all duration-500')}>
        <Image className="rounded-t" src={image} alt="Product image" layout="fill" objectFit="cover" quality={80} />
      </div>
      <div className={classNames(styles.productCardContainer__description, 'flex flex-col h-full w-full rounded transition-all duration-500')}>
        <div className="flex mb-5 lg:mb-2">
          <h4 className={classNames(styles.productCardContainer__title)}>
            {isRo ? name : nameru}
          </h4>
          <span className={classNames(styles.productCardContainer__price, 'flex items-center whitespace-nowrap ml-auto pl-2')}>
            {price} {t('MDL')}
          </span>
        </div>
        <div className={classNames(styles.productCardContainer__badgesContainerWrapper, 'transition-transform duration-500 lg:mt-auto')}>
          <div className={classNames(styles.productCardContainer__badgesContainer, 'flex transition-opacity duration-300')}>
            <span className={classNames(
              styles.productCardContainer__weight,
              'hidden lg:flex items-center whitespace-nowrap mr-auto pr-2'
            )}
            >
              {weight ? `${weight} ${t(DRINKS.includes(subcategory) ? WEIGHT_TYPE.milliliters : WEIGHT_TYPE.grams)}` : null}
            </span>
            <Badges className={classNames(styles.productCardContainer__badges, 'absolute lg:static')} badges={badges} type="small" />
          </div>
        </div>
        <div className={classNames(
          styles.productCardContainer__addToCart,
          'flex w-full mt-auto lg:absolute lg:opacity-0 transition-all duration-500')
        }>
          <ProductCount className="hidden lg:flex" background="white" size={SIZES.md} value={count} onChange={setCount} />
          <button
            className={classNames(
              styles.productCardContainer__addToCartButton,
              'flex w-full justify-center items-center font-bold transition-colors duration-300'
            )}
            onClick={addToCartHandler}
          >
            {t('în coș')}
            <Bag className={classNames(styles.productCardContainer__bag, 'ml-2 transition-all duration-300')} />
          </button>
        </div>
      </div>
    </div>
  )
})

ProductCard.displayName = 'ProductCard'

export default ProductCard
