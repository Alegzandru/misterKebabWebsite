import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useContext, useEffect, useRef, useState } from 'react'
import SwiperInterface from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CATEGORIES } from '../../constants'
import { LANGUAGES } from '../../constants/common'
import { ActiveSectionContext } from '../../store/ActiveSection/ActiveSection.context'
import { CategoryItem } from '../../types'
import styles from './CategoriesNavbar.module.scss'

const CategoriesNavbar = () => {
  const { sections } = useContext(ActiveSectionContext)

  const [fading, setFading] = useState({ left: false, right: true })

  const swiperRef = useRef<SwiperInterface>()

  const router = useRouter()
  const isRo = router.locale === LANGUAGES.ro


  useEffect(() => {
    if (!sections.length) {
      return
    }

    const [{ id }] = sections.slice(-1)

    const activeAnchorIndex = CATEGORIES.findIndex((category) => category.id === id)

    swiperRef.current?.slideTo(activeAnchorIndex)
  }, [sections])

  const anchor = ({ id, name, nameru }: CategoryItem) => {
    const [activeSection] = sections.slice(-1)

    return (
      <SwiperSlide key={id} className="max-w-max">
        <a
          href={`#${id}`}
          className={classNames(
            styles.categoriesNavbarContainer__item,
            { [styles.categoriesNavbarContainer__item_active]: activeSection && id === activeSection.id },
            'whitespace-nowrap flex items-center relative max-w-max px-4 h-full'
          )}
        >
          <span className={classNames(styles.categoriesNavbarContainer__itemText)}>{isRo ? name : nameru}</span>
        </a>
      </SwiperSlide>
    )
  }

  const onSwiperHandler = (swiper: SwiperInterface) => {
    swiperRef.current = swiper
  }

  const onSlideChangeTransitionEndHandler = ({ isBeginning, isEnd }: SwiperInterface) => {
    setFading({
      left: !isBeginning,
      right: !isEnd,
    })
  }

  const onReachHandler = (position: string) => () => {
    setFading({ ...fading, [position]: false })
  }

  return (
    <section id="categories" className={classNames(styles.categoriesNavbarContainer, 'overflow-hidden sticky top-16 bg-white z-10 md:-top-px')}>
      <nav
        className={classNames(
          styles.categoriesNavbarContainer__navbar,
          fading.left ? styles.categoriesNavbarContainer__navbar_fadingLeft : '',
          fading.right ? styles.categoriesNavbarContainer__navbar_fadingRight : '',
          'relative h-full justify-center'
        )}
      >
        <Swiper
          className="h-full max-w-screen"
          slidesPerView="auto"
          spaceBetween={0}
          centeredSlides={true}
          centeredSlidesBounds={true}
          onSwiper={onSwiperHandler}
          onSlideChangeTransitionEnd={onSlideChangeTransitionEndHandler}
          onReachBeginning={onReachHandler('left')}
          onReachEnd={onReachHandler('right')}
        >
          {CATEGORIES.map(anchor)}
        </Swiper>
      </nav>
    </section>
  )
}

export default CategoriesNavbar
