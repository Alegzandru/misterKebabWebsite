import classNames from 'classnames'
import { useRef } from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { RECOMMENDED_SLIDER_BREAKPOINTS, RECOMMENDED_SLIDER_PRODUCTS } from '../../constants'
import ProductCard from '../ProductCard/ProductCard'
import styles from './Recommended.module.scss'

SwiperCore.use([Navigation])

const [leftArrowClassName, rightArrowClassName] = [['prev', 'left'], ['next', 'right']]
  .map(([name, position]) => `swiper-button-${name} -${position}-8 hidden md:flex top-auto bottom-0 h-full`)

type Props = {
  currentProductName: string
}

const Recommended = ({ currentProductName }: Props) => {
  const navigationPrevRef = useRef<HTMLDivElement>(null)
  const navigationNextRef = useRef<HTMLDivElement>(null)

  const products = RECOMMENDED_SLIDER_PRODUCTS.filter((product) => product.name !== currentProductName)

  return (
    <div className={classNames(styles.recommendedContainer, 'relative mt-16 md:mt-20 md:px-7 lg:px-0')}>
      <h3 className={classNames(styles.recommendedContainer__heading, 'font-bold mb-4 md:mb-8')}>Mr. Kebab recomandă</h3>
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
            leftArrowClassName
          )}></div>
        <div
          ref={navigationNextRef}
          className={classNames(
            styles.recommendedContainer__arrow,
            rightArrowClassName
          )}></div>
      </div>
    </div>
  )
}

export default Recommended
