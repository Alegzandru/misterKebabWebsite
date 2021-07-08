import classNames from 'classnames'
import React, { useCallback, useContext, useEffect, useRef } from 'react'

import { CATEGORIES } from '../../constants'
import { ActiveSectionContext } from '../../store/ActiveSection/ActiveSection.context'
import { CategoryItem, TouchData } from '../../types'
import styles from './CategoriesNavbar.module.scss'

const CategoriesNavbar = () => {
  const { sections } = useContext(ActiveSectionContext)

  const touchData = useRef<TouchData>({ lastPosition: 0, position: 0, locked: false })
  const categoriesList = useRef<HTMLUListElement>(null)
  const movedRef = useRef<boolean>(false)

  const theEvent = (event: React.MouseEvent | React.TouchEvent | TouchEvent) => 'changedTouches' in event ? event.changedTouches[0] : event
  const moveList = (value: number) => categoriesList.current ? categoriesList.current.style.transform = `translateX(${value}px` : null
  const activateEvents = () => {
    if (!categoriesList.current?.clientWidth) {
      return false
    }

    return window.innerWidth < categoriesList.current.clientWidth
  }

  const touchStartHandler = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (!activateEvents()) {
      return
    }

    (categoriesList.current as HTMLUListElement).style.transition = ''

    touchData.current = {
      lastPosition: touchData.current.lastPosition,
      position: theEvent(event).clientX,
      locked: true,
    }
  }, [categoriesList.current, touchData.current])

  const touchMoveHandler = useCallback((event: React.MouseEvent | React.TouchEvent | TouchEvent) => {
    if (!activateEvents()) {
      return
    }

    event.preventDefault()

    const { clientX } = theEvent(event)
    const { lastPosition, position, locked } = touchData.current

    if (locked) {
      movedRef.current = true

      moveList(Math.round(clientX - position + lastPosition))
    }
  }, [touchData.current])

  const touchEndHandler = useCallback(() => {
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
  }, [categoriesList.current, touchData.current])

  const onCLickHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (movedRef.current) {
      event.preventDefault()
      movedRef.current = false
    }
  }

  useEffect(() => {
    const { parentElement, clientWidth } = categoriesList.current as HTMLUListElement

    const onResizeHandler = () => {
      const { innerWidth } = window

      if (innerWidth > clientWidth) {
        parentElement?.classList.add('flex')
        moveList(0)
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

  const anchor = ({ id, name }: CategoryItem) => {
    const [activeSection] = sections.slice(-1)

    return (
      <li key={id} className={classNames(styles.categoriesNavbarContainer__categoriesNavbarItemContainer, 'relative')}>
        <a
          href={`#${id}`}
          className={classNames(
            styles.categoriesNavbarContainer__categoriesNavbarItem,
            { [styles.categoriesNavbarContainer__categoriesNavbarItem_active]: id === activeSection },
            'whitespace-nowrap flex items-center'
          )}
          onClick={onCLickHandler}
        >
          <span className={classNames(styles.categoriesNavbarContainer__categoriesNavbarItemText)}>{name}</span>
        </a>
      </li>
    )
  }

  return (
    <section id="categories" className={classNames(styles.categoriesNavbarContainer, 'overflow-hidden sticky top-16 bg-white z-10 md:top-0')}>
      <nav className="h-full justify-center">
        <ul
          className="h-full flex list-none p-0 m-0 items-center w-max"
          ref={categoriesList}
          onTouchStart={touchStartHandler}
          onMouseDown={touchStartHandler}
          onMouseMove={touchMoveHandler}
          onMouseLeave={touchEndHandler}
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
