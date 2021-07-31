import classNames from 'classnames'
import Image from 'next/image'
import { useContext } from 'react'

import { SIZES } from '../../constants/common'
import { CartContext } from '../../store/Cart/Cart.context'
import { Additive, Drinks, Toppings } from '../../types'
import ProductCount from '../ProductCount/ProductCount'
import Close from '../Svgs/Close/Close'
import styles from './SelectedProduct.module.scss'

type Props = {
  name: string
  image: string
  toppings: Toppings
  price: number
  count: number
  index: number
}

const SelectedProduct = ({ name, image, price, count, toppings: { topping, without, drinks }, index }: Props) => {
  const { actions: { changeCount, removeProduct } } = useContext(CartContext)

  const toppingBlock = ({ text }: Additive, blockIndex: number) =>
    <span key={blockIndex} className={styles.selectedProductContainer__toppings}>{blockIndex !== 0 ? ', ' : ''}{text}</span>

  const description = (additive: Additive[], text: string) => additive.length ? (
    <p key={text} className={classNames(styles.selectedProductContainer__description)}>
      {text}: {additive.map(toppingBlock)}
    </p>
  ) : null

  return (
    <div className={classNames(styles.selectedProductContainer, 'w-full grid grid-flow-col gap-4 items-center mb-4')}>
      <div className="grid gap-2 grid-flow-col mr-auto">
        <div className="relative w-20 h-18">
          <Image className="rounded" src={image} alt="Product image" layout="fill" objectFit="cover" quality={80} />
        </div>
        <div className="self-center">
          <h3 className="font-bold">{name}</h3>
          <div className="mb-2">
            {description(topping, 'topping')}
            {description(without, 'fara')}
            {description(drinks as Drinks[], 'bautura')}
          </div>
          <ProductCount background="gray" size={SIZES.sm} value={count} onChange={(value) => changeCount(index, value)} />
        </div>
      </div>
      <p className={classNames(styles.selectedProductContainer__price, 'flex font-medium')}>{price} MDL</p>
      <button
        className={classNames(styles.selectedProductContainer__button, 'w-6 h-6 rounded-full flex justify-center items-center')}
        aria-label="Remove product"
        onClick={() => removeProduct(index)}
      >
        <Close className="w-2 h-2" fill="#08080B" />
      </button>
    </div>
  )
}

export default SelectedProduct
