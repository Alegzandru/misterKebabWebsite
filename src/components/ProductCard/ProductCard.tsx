import classNames from 'classnames'
import Image from 'next/image'
import Bag from '../Svgs/Bag/Bag'
import styles from './ProductCard.module.scss'

type Props = {
  name: string
  price: number
  weight: number
  badges: string[]
  image: string
}

const ProductCard = ({ name, price, image }: Props) => (
  <div className={classNames(styles.productCardContainer, 'w-full relative rounded flex flex-col bg-white')}>
    <div className="relative w-full flex-1">
      <Image className="rounded-t" src={`/images/food/${image}.png`} alt="Product image" layout="fill" objectFit="cover" quality={80} />
    </div>
    <div className={classNames(styles.productCardContainer__description, 'w-full relative rounded')}>
      <div className="flex">
        <h4 className={classNames(styles.productCardContainer__title, 'truncate')}>{name}</h4>
        <span className={classNames(styles.productCardContainer__price, 'whitespace-nowrap ml-auto')}>{price} MDL</span>
      </div>
      <div>
        <button className={classNames(styles.productCardContainer__addToCart, 'w-full flex justify-center items-center')}>
          în coș
          <Bag className="ml-2" />
        </button>
      </div>
    </div>
  </div>
)

export default ProductCard
