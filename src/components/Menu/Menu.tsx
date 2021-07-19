import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'

import { MenuObject, Product } from '../../types'
import CategoryHeading from './CategoryHeading/CategoryHeading'
import CategoryProducts from './CategoryProducts/CategoryProducts'
import styles from './Menu.module.scss'

type Props = {
  products: Product[]
  categories: MenuObject[]
}

const Menu = ({ categories }: Props) => {
  categories.sort((first, second) => first.order - second.order)

  const [parallaxHeight, setParallaxHeight] = useState<string>()
  const sectionRef = useRef<HTMLElement>(null)

  const onResizeHandler = () => {
    if (sectionRef.current) {
      const { offsetTop } = sectionRef.current

      setParallaxHeight(`${offsetTop * 0.8}px`)
    }
  }

  useEffect(() => {
    onResizeHandler()
    window.addEventListener('resize', onResizeHandler)

    return () => window.removeEventListener('resize', onResizeHandler)
  }, [])

  const parallaxBackground = (position: string, height: string | undefined) => (
    <div
      className={classNames(
        styles.menuContainer__parallaxWrapper,
        styles[position],
        'hidden xl:block absolute pointer-events-none'
      )}
    >
      <Parallax y={[0, 20]}>
        <div
          style={{ height }}
          className={styles.menuContainer__parallax}
        />
      </Parallax>
    </div>
  )

  const mainParallaxElements = (
    <>
      {parallaxBackground('left', parallaxHeight)}
      {parallaxBackground('right', parallaxHeight)}
    </>
  )

  const bottomParallaxElements = (
    <>
      {parallaxBackground('bottomLeft', '750px')}
      {parallaxBackground('bottomRight', '750px')}
    </>
  )

  const category = ({ categoryName, subCategories }: MenuObject, index: number) => (
    <section
      key={index}
      ref={sectionRef}
      className={classNames(styles.menuContainer__section, 'flex flex-col items-center', categoryName === 'Băuturi' ? 'relative' : '')}
    >
      {parallaxHeight && categoryName === 'Băuturi' ? bottomParallaxElements : null}
      <hr className="invisible" />
      {categoryName ? <CategoryHeading name={categoryName} /> : null}
      {subCategories.map((subCategory, subCategoryIndex) => <CategoryProducts key={subCategoryIndex} {...subCategory} />)}
    </section>
  )

  return (
    <div className={classNames(styles.menuContainer, 'relative overflow-hidden')}>
      {parallaxHeight ? mainParallaxElements : null}
      {categories.map(({ categoryName, subCategories, order }: MenuObject, index: number) => category({
        categoryName: categoryName === 'Unfiltered' ? '' : categoryName,
        subCategories: subCategories.sort((first, second) => first.order - second.order),
        order,
      }, index))}
    </div>
  )
}

export default Menu
