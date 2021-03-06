import classNames from 'classnames'
import React, { useContext, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/router'

import { ActiveSectionContext } from '../../../store/ActiveSection/ActiveSection.context'
import ProductCard from '../../ProductCard/ProductCard'
import styles from './CategoryProducts.module.scss'
import {Toppings} from '../../../types'
import {Product} from '../../../types'

type Props = {
  id: string
  name: string
  nameru: string
  items: {
    name: string
    nameru: string
    price: number
    weight: number
    badges: string[]
    image: string
    ingredients?: string
    toppings: Toppings
    subcategory: string
  }[]
}

const SortProducts = (first: Product, second: Product) => {
  const router = useRouter()
  const ro = router.locale === 'ro'

  const getName = (product: Product) => product[ro ? 'name' : 'nameru']

  if (getName(first) < getName(second)) {
    return -1
  }
  if (getName(first) > getName(second)) {
    return 1
  }
  return 0
}

const CategoryProducts = ({ id, name, items, nameru }: Props) => {
  const { setSectionInView } = useContext(ActiveSectionContext)

  const { ref, inView } = useInView({ rootMargin: '0px 0px -50% 0px' })

  const router = useRouter()
  const ro = router.locale === 'ro'

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
      <h3 className={styles.categoryProductsContainer__heading}>{ro ? name : nameru}</h3>
      <hr className={styles.categoryProductsContainer__line} />
      <div className="grid grid-cols-2 gap-x-2 gap-y-4 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
        {items.sort(SortProducts).map((product, index) => <ProductCard key={index} {...product} />)}
      </div>
    </section>
  )
}

export default CategoryProducts
