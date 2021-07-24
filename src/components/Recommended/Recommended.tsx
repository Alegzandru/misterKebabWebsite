import classNames from 'classnames'
import { useRef } from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from 'next-i18next'

import { RECOMMENDED_SLIDER_BREAKPOINTS } from '../../constants'
import ProductCard from '../ProductCard/ProductCard'
import styles from './Recommended.module.scss'
import { Product } from '../../types'

SwiperCore.use([Navigation])

type Props = {
  products: Product[]
}

const Recommended = ({ products }: Props) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)

  const arrowClassName = 'hidden md:flex top-auto bottom-0 h-full'

  const { t } = useTranslation('popup')

  return (
    <div className={classNames(styles.recommendedContainer, 'relative mt-16 md:mt-20 md:px-7 lg:px-0')}>
      <h3 className={classNames(styles.recommendedContainer__heading, 'font-bold mb-4 md:mb-8')}>{t('Mr. Kebab recomandă')}</h3>
      <div className="relative">
        <Swiper
          spaceBetween={8}
          slidesPerView={2}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          breakpoints={RECOMMENDED_SLIDER_BREAKPOINTS}
        >
          {products.map((product, index) => <SwiperSlide key={index}><ProductCard {...product} /></SwiperSlide>)}
        </Swiper>
        <div
          ref={navigationPrevRef}
          className={classNames(
            styles.recommendedContainer__arrow,
            'swiper-button-prev -left-8',
            arrowClassName
          )}></div>
        <div
          ref={navigationNextRef}
          className={classNames(
            styles.recommendedContainer__arrow,
            'swiper-button-next -right-8',
            arrowClassName
          )}></div>
      </div>
    </div>
  )
}

export default Recommended
