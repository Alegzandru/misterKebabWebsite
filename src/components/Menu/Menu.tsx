import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'

import { CartContext } from '../../store/Cart/Cart.context'
import { MenuList, Product } from '../../types'
import CategoryHeading from './CategoryHeading/CategoryHeading'
import CategoryProducts from './CategoryProducts/CategoryProducts'
import styles from './Menu.module.scss'

type Props = {
  products: Product[]
  menu: MenuList
}

const Menu = ({ menu: initialMenu, products }: Props) => {
  const { actions: { addMenuProducts } } = useContext(CartContext)

  const [parallaxHeight, setParallaxHeight] = useState<string>()
  const [menu, setMenu] = useState(initialMenu)

  const sectionRef = useRef<HTMLElement>(null)

  const router = useRouter()
  const ro = router.locale === 'ro'

  const onResizeHandler = () => {
    if (sectionRef.current) {
      const { offsetTop } = sectionRef.current

      setParallaxHeight(`${offsetTop * 0.8}px`)
    }
  }

  useEffect(() => {
    setMenu(menu.sort((first, second) => first.order - second.order))
  }, [menu, router.locale])

  useEffect(() => {
    onResizeHandler()
    window.addEventListener('resize', onResizeHandler)

    addMenuProducts(products)

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

  const category = ({ categoryName, subCategories, categoryNameRu }: MenuList[0], index: number) => (
    <section
      key={index}
      ref={sectionRef}
      className={classNames(styles.menuContainer__section, 'flex flex-col items-center', categoryName === 'Băuturi' ? 'relative' : '')}
    >
      {parallaxHeight && categoryName === 'Băuturi' ? bottomParallaxElements : null}
      <hr className="invisible" />
      {categoryName ? <CategoryHeading name={ro ? categoryName : categoryNameRu} /> : null}
      {subCategories.map((subCategory, subCategoryIndex) => <CategoryProducts key={subCategoryIndex} {...subCategory} />)}
    </section>
  )

  return (
    <div className={classNames(styles.menuContainer, 'relative overflow-hidden')}>
      {parallaxHeight ? mainParallaxElements : null}
      {menu.map(({ categoryNameRu, categoryName, subCategories, order }: MenuList[0], index: number) => category({
        categoryName: categoryName === 'Unfiltered' ? '' : categoryName,
        categoryNameRu,
        subCategories: subCategories.sort((first, second) => first.order - second.order),
        order,
      }, index))}
    </div>
  )
}

export default Menu
