import classNames from 'classnames'
import React, { useEffect, useRef } from 'react'

import { CATEGORIES } from '../../constants'
import { CategoryItem, TouchData } from '../../types'
import styles from './CategoriesNavbar.module.scss'

const CategoriesNavbar = () => {
  const touchData = useRef<TouchData>({ lastPosition: 0, position: 0, locked: false })
  const categoriesList = useRef<HTMLUListElement>(null)

  const theEvent = (event: React.MouseEvent | React.TouchEvent | TouchEvent) => 'changedTouches' in event ? event.changedTouches[0] : event
  const moveList = (value: number) => categoriesList.current ? categoriesList.current.style.transform = `translateX(${value}px` : null
  const activateEvents = () => {
    if (!categoriesList.current?.clientWidth) {
      return false
    }

    return window.innerWidth < categoriesList.current.clientWidth
  }

  const touchStartHandler = (event: React.MouseEvent | React.TouchEvent) => {
    if (!activateEvents()) {
      return
    }

    (categoriesList.current as HTMLUListElement).style.transition = ''

    touchData.current = {
      lastPosition: touchData.current.lastPosition,
      position: theEvent(event).clientX,
      locked: true,
    }
  }

  const touchMoveHandler = (event: React.MouseEvent | React.TouchEvent | TouchEvent) => {
    if (!activateEvents()) {
      return
    }

    event.preventDefault()

    const { clientX } = theEvent(event)
    const { lastPosition, position, locked } = touchData.current

    if (locked) {
      moveList(Math.round(clientX - position + lastPosition))
    }
  }

  const touchEndHandler = () => {
    if (!activateEvents()) {
      return
    }

    const { locked } = touchData.current
    const { innerWidth } = window

    if (locked) {
      const categoriesListElement = categoriesList.current as HTMLUListElement

      const { left, right, width } = categoriesListElement.getBoundingClientRect()

      categoriesListElement.style.transition = 'transform 0.3s'

      if (left > 0) {
        moveList(0)
      }

      if (right < innerWidth) {
        moveList(innerWidth - width)
      }

      touchData.current = {
        lastPosition: parseInt(categoriesListElement.style.transform.slice(11, -3), 10),
        position: 0,
        locked: false,
      }
    }
  }

  useEffect(() => {
    const { parentElement, clientWidth } = categoriesList.current as HTMLUListElement

    const onResizeHandler = () => {
      const { innerWidth } = window

      if (innerWidth > clientWidth) {
        parentElement?.classList.add('flex')
      } else {
        parentElement?.classList.remove('flex')
      }
    }

    onResizeHandler()
    window.addEventListener('resize', onResizeHandler)
    categoriesList.current?.addEventListener('touchmove', touchMoveHandler, { passive: false })

    return () => {
      categoriesList.current?.removeEventListener('touchmove', touchMoveHandler)
      window.removeEventListener('resize', onResizeHandler)
    }
  }, [])

  const anchor = ({ id, name }: CategoryItem) => (
    <li key={id} className={classNames(styles.categoriesNavbarContainer__categoriesNavbarItemContainer, 'relative')}>
      <a
        href={`#${id}`}
        className={classNames(styles.categoriesNavbarContainer__categoriesNavbarItem, 'whitespace-nowrap flex items-center')}
      >
        <span className={classNames(styles.categoriesNavbarContainer__categoriesNavbarItemText)}>{name}</span>
      </a>
    </li>
  )

  return (
    <section id="categories" className={classNames(styles.categoriesNavbarContainer, 'overflow-hidden')}>
      <nav className="h-full justify-center">
        <ul
          className="h-full flex list-none p-0 m-0 items-center w-max"
          ref={categoriesList}
          onTouchStart={touchStartHandler}
          onMouseDown={touchStartHandler}
          onMouseMove={touchMoveHandler}
          onTouchEnd={touchEndHandler}
          onMouseUp={touchEndHandler}
        >
          {CATEGORIES.map(anchor)}
        </ul>
      </nav>
    </section>
  )
}

export default CategoriesNavbar
