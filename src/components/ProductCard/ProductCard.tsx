import classNames from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'

import Badges from '../Badges/Badges'
import Bag from '../Svgs/Bag/Bag'
import styles from './ProductCard.module.scss'

type Props = {
  name: string
  price: number
  weight: number
  badges: string[]
  image: string
}

const ProductCard = ({ name, price, image, weight, badges }: Props) => {
  const [count, setCount] = useState(1)

  const changeCountButton = (sign: string, onClick: () => void) =>
    <button className={classNames(styles.productCardContainer__changeCountButton, 'transition-colors')} onClick={onClick}>{sign}</button>

  return (
    <div className={classNames(styles.productCardContainer, 'w-full relative rounded flex flex-col bg-white')}>
      <div className={classNames(styles.productCardContainer__imageContainer, 'relative w-full flex-1 transition-all duration-1000')}>
        <Image className="rounded-t" src={`/images/food/${image}.png`} alt="Product image" layout="fill" objectFit="cover" quality={80} />
      </div>
      <div className={classNames(styles.productCardContainer__description, 'w-full rounded transition-all duration-1000')}>
        <div className="flex">
          <h4 className={classNames(styles.productCardContainer__title)}>{name}</h4>
          <span className={classNames(styles.productCardContainer__price, 'flex items-center whitespace-nowrap ml-auto pl-2')}>{price} MDL</span>
        </div>
        <div className={classNames(styles.productCardContainer__badgesContainer, 'flex lg:mt-8 transition-opacity duration-700')}>
          <span className={classNames(
            styles.productCardContainer__weight,
            'hidden lg:flex items-center whitespace-nowrap mr-auto pr-2'
          )}
          >{weight}g</span>
          <Badges className={classNames(styles.productCardContainer__badges, 'absolute lg:static')} badges={badges} type="small" />
        </div>
        <div className={classNames(styles.productCardContainer__addToCart, 'flex w-full mt-5 lg:absolute lg:opacity-0 transition-all duration-1000')}>
          <div className="hidden lg:flex items-center mr-4">
            {changeCountButton('-', () => setCount(count > 1 ? count - 1 : count))}
            <span className={styles.productCardContainer__count}>{count}</span>
            {changeCountButton('+', () => setCount(count + 1))}
          </div>
          <button className={classNames(
            styles.productCardContainer__addToCartButton,
            'flex w-full justify-center items-center transition-colors duration-300'
          )}>
            în coș
            <Bag className={classNames(styles.productCardContainer__bag, 'ml-2 transition-all duration-300')} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
