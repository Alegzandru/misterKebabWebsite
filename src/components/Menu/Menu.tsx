/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'

// import { MENU } from '../../constants'
import { Category, MenuObject } from '../../types'
import CategoryHeading from './CategoryHeading/CategoryHeading'
import CategoryProducts from './CategoryProducts/CategoryProducts'
import styles from './Menu.module.scss'

// import {API_URL} from "../../utils/urls"

type Props = {
  products: any
  categories: Category
}

const Menu = ({categories, products}: Props) => {

  // console.log(categories)
  // console.log(products)

  const [parallaxHeight, setParallaxHeight] = useState<string>()
  const sectionRef = useRef<HTMLElement>(null)

  const itemsRaw = products.filter((product: any) => product.subcategory.name === categories[9].name)
  const items = itemsRaw.map((product: any) => {
    const badges = product.ingredients.map((ingredient: any) => ingredient.name)
    return(
      {
        name: product.name,
        price: product.price,
        weight: product.weight,
        badges,
        image: product.image.formats.medium.url,
      }
    )
  }
  )

  const localCategory = {
    categoryName: '',
    subCategories: [
      {
        id: 'kebab',
        name: categories[9].name,
        items,
      },
    ],
  }

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
      {/* {
        MENU.map(category)
      } */}
      {
        category(localCategory, 0)
      }
    </div>
  )
}

export default Menu
