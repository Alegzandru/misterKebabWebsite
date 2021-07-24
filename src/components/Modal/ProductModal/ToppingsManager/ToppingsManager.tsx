/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'next-i18next'

import { Toppings, ToppingsManagerState } from '../../../../types'
import Button from '../../../Button/Button'
import Checkbox from '../../../Checkbox/Checkbox'
import Bag from '../../../Svgs/Bag/Bag'
import styles from './ToppingsManager.module.scss'

type Props = {
  toppings: Toppings
  count: number
}

const ToppingsManager = ({ toppings, count }: Props) => {
  const [activeTab, setActiveTab] = useState(0)

  const formRef = useRef<HTMLFormElement>(null)

  const currentToppingsRef = useRef<ToppingsManagerState[]>([...new Array(count)].map(() => ({ topping: new Map(), without: new Set() })))
  const { current: currentToppings } = currentToppingsRef

  const { t } = useTranslation('popup')

  useEffect(() => {
    formRef.current?.reset()
  }, [activeTab])

  const addTabHandler = () => {
    if (currentToppings.length >= 10) {
      return
    }

    currentToppingsRef.current = [...currentToppings, { topping: new Map(), without: new Set() }]

    setActiveTab(currentToppings.length)
  }

  const onClickHandler = () => undefined

  const tab = (index: number) => (
    <button
      key={index}
      className={classNames(
        styles.toppingsManagerContainer__tab,
        activeTab === index ? styles.toppingsManagerContainer__tab_active : '',
        'bg-white transition-all'
      )}
      onClick={() => setActiveTab(index)}
    >{index + 1}</button>
  )

  const toppingCheckbox = ({ text, price }: Toppings['topping'][0]) => {
    const label = `${text}- ` + (price ? `${price} MDL` : 'gratis')
    const { topping } = currentToppings[activeTab]

    return (
      <Checkbox
        key={text}
        defaultChecked={topping.has(label)}
        onChange={({ target: { checked } }) => checked
          ? topping.set(label, { text, price })
          : topping.delete(label)}
      >
        {label}
      </Checkbox>
    )
  }

  const withoutToppingCheckbox = (value: string) => {
    const { without } = currentToppings[activeTab]

    return (
      <Checkbox
        key={value}
        defaultChecked={without.has(value)}
        onChange={({ target: { checked } }) => checked
          ? without.add(value)
          : without.delete(value)}
      >
        {value}
      </Checkbox>
    )
  }

  return (
    <div className={classNames(styles.toppingsManagerContainer, 'w-full mt-8 md:mt-14')}>
      <div className={classNames(styles.toppingsManagerContainer__tabContainer, 'flex items-end')}>
        {currentToppings.map((_, index) => tab(index))}
        <button
          key="+"
          className={classNames(
            styles.toppingsManagerContainer__tab,
            'bg-white transition-all',
            currentToppings.length >= 10 ? 'hidden' : 'block'
          )}
          onClick={addTabHandler}
        >+</button>
      </div>
      <form ref={formRef} className={classNames(styles.toppingsManagerContainer__toppingsContainer, 'w-full py-6 px-4 bg-white rounded md:flex')}>
        <div className="flex-1 lg:pr-4">
          <h3>{t('Topping')}</h3>
          <div className="flex flex-col mt-4 mb-10 md:mb-0">
            {toppings.topping.map(toppingCheckbox)}
          </div>
        </div>
        <div className="flex-1">
          <h3>{t('Fără')}</h3>
          <div className="flex flex-col mt-4">
            {toppings.without.map(withoutToppingCheckbox)}
          </div>
        </div>
      </form>
      <Button className="mt-8 md:mt-14" onClick={onClickHandler}>
        <Bag className={classNames(styles.productCardContainer__bag, 'mr-2')} stroke="#ffffff" />
        {t('Adaugă la comandă')}
      </Button>
    </div>
  )
}

export default ToppingsManager
