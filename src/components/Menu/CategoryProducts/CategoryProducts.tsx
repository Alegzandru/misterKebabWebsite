import classNames from 'classnames'
import React, { useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { ActiveSectionContext } from '../../../store/ActiveSection/ActiveSection.context'
import ProductCard from '../../ProductCard/ProductCard'
import styles from './CategoryProducts.module.scss'

type Props = {
  id: string
  name: string
  items: {
    name: string
    price: number
    weight: number
    badges: string[]
    image: string
  }[]
}

const CategoryProducts = ({ id, name, items }: Props) => {
  const { setSectionInView } = useContext(ActiveSectionContext)

  const { ref, inView } = useInView({ rootMargin: '0px 0px -50% 0px' })

  useEffect(() => {
    const scrollPosition = window.pageYOffset

    setSectionInView({ id, inView, scrollPosition })
  }, [inView])

  return (
    <section
      ref={ref}
      id={id}
      className={classNames(styles.categoryProductsContainer, 'w-full max-w-screen')}
    >
      <h3 className={styles.categoryProductsContainer__heading}>{name}</h3>
      <hr className={styles.categoryProductsContainer__line} />
      <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
        {items.map((product, index) => <ProductCard key={index} {...product} />)}
      </div>
    </section>
  )
}

export default CategoryProducts
