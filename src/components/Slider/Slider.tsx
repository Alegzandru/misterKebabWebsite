import classNames from 'classnames'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import styles from './Slider.module.scss'

type Props = {
  slides: StaticImageData[]
  autoPlayInterval?: number
}

const Slider = ({ slides, autoPlayInterval }: Props) => {
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  })
  const { translate, transition, activeSlide } = state

  const autoPlayRef = useRef<() => void>()
  const sliderContainer = useRef<HTMLElement>(null)

  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0,
      })
    }

    const { current } = sliderContainer

    setState({
      ...state,
      activeSlide: activeSlide + 1,
      translate: (activeSlide + 1) * (current ? current.getBoundingClientRect().width : 0),
    })
  }

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) {
        autoPlayRef.current()
      }
    }

    if (autoPlayInterval) {
      const interval = setInterval(play, autoPlayInterval)

      return () => clearInterval(interval)
    }
  }, [])

  const slide = (image: StaticImageData, index: number) => (
    <Image
      key={index}
      className="flex-1"
      src={image}
      alt="Banner"
      objectFit="cover"
    />
  )

  return (
    <section ref={sliderContainer} className={classNames(styles.sliderContainer, 'absolute overflow-hidden z-10')}>
      <div
        style={{
          transform: `translateX(-${translate}px)`,
          transition: `transform ease-out ${transition}s`,
          width: `${(sliderContainer.current ? sliderContainer.current.getBoundingClientRect().width : 0) * slides.length}px`,
        }}
        className="h-full flex"
      >
        {slides.map(slide)}
      </div>
    </section >
  )
}

export default Slider
