import classNames from 'classnames'
import SwiperCore, { Navigation } from 'swiper'
import { useTranslation } from 'next-i18next'

import ProductCard from '../ProductCard/ProductCard'
import styles from './Recommended.module.scss'
import { Product } from '../../types'

SwiperCore.use([Navigation])

type Props = {
  products: Product[]
}

const Recommended = ({ products }: Props) => {
  const { t } = useTranslation('popup')

  return (
    <div className={classNames(styles.recommendedContainer, 'relative mt-16 md:mt-20 md:px-7 lg:px-0')}>
      <h3 className={classNames(styles.recommendedContainer__heading, 'font-bold mb-4 md:mb-8')}>{t('Mr. Kebab recomandă')}</h3>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-4 md:grid-cols-4 lg:gap-5">
        {products.map((product, index) => <ProductCard key={index} {...product} />)}
      </div>
    </div>
  )
}

export default Recommended
