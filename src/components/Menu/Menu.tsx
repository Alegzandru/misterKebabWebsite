import React from 'react'

import { MENU } from '../../constants'
import { MenuObject } from '../../types'
import CategoryHeading from './CategoryHeading/CategoryHeading'
import CategoryProducts from './CategoryProducts/CategoryProducts'
import styles from './Menu.module.scss'

const Menu = () => {
  const category = ({ categoryName, subCategories }: MenuObject, index: number) => (
    <section key={index} className={styles.menuContainer__section}>
      <hr className="invisible" />
      {categoryName ? <CategoryHeading name={categoryName} /> : null}
      {subCategories.map((subCategory) => <CategoryProducts key={subCategory.id} {...subCategory} />)}
    </section>
  )

  return <div className={styles.menuContainer}>{MENU.map(category)}</div>
}

export default Menu
