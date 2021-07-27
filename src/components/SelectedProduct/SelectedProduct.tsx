import classNames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'

import { SIZES } from '../../constants/common'
import { Toppings } from '../../types'
import ProductCount from '../ProductCount/ProductCount'
import Close from '../Svgs/Close/Close'
import styles from './SelectedProduct.module.scss'

type Props = {
  name: string
  image: string
  toppings: Toppings
  price: number
}

const SelectedProduct = ({ name, image, price, toppings: { topping, without } }: Props) => {
  const [count, setCount] = useState(1)

  const toppingBlock = (text: string, index: number) =>
    <span key={index} className={styles.selectedProductContainer__toppings}>{index !== 0 ? ', ' : ''}{text}</span>

  return (
    <div className={classNames(styles.selectedProductContainer, 'w-full grid grid-flow-col gap-4 items-center mb-4')}>
      <div className="grid gap-2 grid-flow-col">
        <div className="relative w-20 h-18">
          <Image className="rounded" src={image} alt="Product image" layout="fill" objectFit="cover" quality={80} />
        </div>
        <div className="self-center">
          <h3 className="font-bold">{name}</h3>
          <div className="mb-2">
            {topping.length && <p className={classNames(styles.selectedProductContainer__description)}>
              topping: {topping.map(({ text }, index) => toppingBlock(text, index))}
            </p>}
            {without.length && <p className={classNames(styles.selectedProductContainer__description)}>
              fara: {without.map(toppingBlock)}
            </p>}
          </div>
          <ProductCount background="gray" size={SIZES.sm} value={count} onChange={setCount} />
        </div>
      </div>
      <p className={classNames(styles.selectedProductContainer__price, 'flex font-medium')}>{price} MDL</p>
      <button className={classNames(styles.selectedProductContainer__button, 'w-6 h-6 rounded-full flex justify-center items-center')}>
        <Close className="w-2 h-2" fill="#08080B" />
      </button>
    </div>
  )
}

export default SelectedProduct
