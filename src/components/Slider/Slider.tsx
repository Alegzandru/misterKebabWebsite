import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

import Pagination from './Pagination/Pagination'
import styles from './Slider.module.scss'
import {BANNER_PLACEHOLDER} from '../../constants'

type Props = {
  slides: string[]
  autoPlayInterval?: number
}

const Slider = ({ slides, autoPlayInterval }: Props) => {
  // temp:
  // const [enableAutoPlay, setEnableAutoPlay] = useState(!!autoPlayInterval)
  const [enableAutoPlay] = useState(!!autoPlayInterval)
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
  })

  const { translate, activeSlide } = state

  const autoPlayRef = useRef<() => void>()
  const autoPlayIntervalRef = useRef<NodeJS.Timeout>()
  const sliderContainer = useRef<HTMLElement>(null)

  const getSliderContainerWidth = () => sliderContainer.current ? sliderContainer.current.getBoundingClientRect().width : 0

  const nextSlide = () => {
    const isLastSlide = activeSlide === slides.length - 1

    setState({
      activeSlide: isLastSlide ? 0 : activeSlide + 1,
      translate: isLastSlide
        ? 0
        : (activeSlide + 1) * getSliderContainerWidth(),
    })
  }

  const setAutoPlayInterval = () => {
    const play = () => {
      if (autoPlayRef.current) {
        autoPlayRef.current()
      }
    }

    autoPlayIntervalRef.current = setInterval(play, autoPlayInterval)
  }

  const resetAutoPlayInterval = () => {
    if (enableAutoPlay) {
      clearInterval(autoPlayIntervalRef.current as NodeJS.Timeout)
      setAutoPlayInterval()
    }
  }

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const onResizeHandler = () => {
      resetAutoPlayInterval()

      setState((prevState) => ({
        ...prevState,
        translate: prevState.activeSlide * getSliderContainerWidth(),
      }))
    }

    window.addEventListener('resize', onResizeHandler)

    if (enableAutoPlay) {
      setAutoPlayInterval()

      return () => {
        clearInterval(autoPlayIntervalRef.current as NodeJS.Timeout)
        window.removeEventListener('resize', onResizeHandler)
      }
    }

    return () => window.removeEventListener('resize', onResizeHandler)
  }, [])

  const onClickHandler = (index: number) => {
    resetAutoPlayInterval()

    setState({
      activeSlide: index,
      translate: index * getSliderContainerWidth(),
    })
  }

  const slide = (image: string, index: number) => (
    <div key={index} className="flex-1 relative">
      <Image
        src={image}
        placeholder="blur"
        blurDataURL={BANNER_PLACEHOLDER}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        quality={90}
      // temp:
      // onLoadingComplete={(() => index === 0 && setEnableAutoPlay(true))}
      />
    </div>
  )

  return (
    <section ref={sliderContainer} className={classNames(styles.sliderContainer, 'absolute overflow-hidden z-10')}>
      <div
        style={{
          transform: `translateX(-${translate}px)`,
          width: `${getSliderContainerWidth() * slides.length}px`,
        }}
        className="h-full flex transition-transform ease-out duration-500"
      >
        {slides.map(slide)}
      </div>
      <Pagination slides={slides} activeSlide={activeSlide} onClick={onClickHandler} />
    </section >
  )
}

export default Slider
