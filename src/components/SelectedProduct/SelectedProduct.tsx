import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import { LANGUAGES, SIZES } from '../../constants/common'
import { CartContext } from '../../store/Cart/Cart.context'
import { Additive, Drinks, Toppings } from '../../types'
import ProductCount from '../ProductCount/ProductCount'
import Close from '../Svgs/Close/Close'
import styles from './SelectedProduct.module.scss'

type Props = {
  name: string
  nameru: string
  image: string
  toppings: Toppings
  price: number
  count: number
  index: number
}

const SelectedProduct = ({ name, nameru, image, price, count, toppings: { topping, without, drinks }, index }: Props) => {
  const router = useRouter()
  const isRo = router.locale === LANGUAGES.ro
  const { t } = useTranslation('cart')

  const { actions: { changeCount, removeProduct } } = useContext(CartContext)

  const toppingBlock = ({ text, textru }: Additive, blockIndex: number) =>
    <span key={blockIndex} className={styles.selectedProductContainer__toppings}>{blockIndex !== 0 ? ', ' : ''}{isRo ? text : textru}</span>

  const description = (additive: Additive[], text: string) => additive.length ? (
    <p key={text} className={classNames(styles.selectedProductContainer__description)}>
      {text}: {additive.map(toppingBlock)}
    </p>
  ) : null

  return (
    <div className={classNames(styles.selectedProductContainer, 'w-full grid grid-flow-col gap-4 items-center mb-4')}>
      <div className="grid gap-2 grid-flow-col mr-auto">
        <div className="relative w-20 h-18">
          <Image className="rounded" src={image} alt={name} layout="fill" objectFit="cover" quality={80} />
        </div>
        <div className="self-center">
          <h3 className="font-bold">{isRo? name : nameru}</h3>
          <div className="mb-2">
            {description(topping, t('topping'))}
            {description(without, t('fara'))}
            {description(drinks as Drinks[], t('bautura'))}
          </div>
          <ProductCount background="gray" size={SIZES.sm} value={count} onChange={(value) => changeCount(index, value)} />
        </div>
      </div>
      <p className={classNames(styles.selectedProductContainer__price, 'flex font-medium')}>{price} {t('MDL')}</p>
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
