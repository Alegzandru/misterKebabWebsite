/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'

import { LANGUAGES } from '../../../../constants/common'
import { ProductToppingsContext } from '../../../../store/ProductToppings/ProductToppings.context'
import { Toppings } from '../../../../types'
import Checkbox from '../../../Checkbox/Checkbox'
import styles from './ToppingsManager.module.scss'

type Props = {
  toppings: Toppings
}

const ToppingsManager = ({ toppings }: Props) => {
  const {
    state: { count, toppings: currentToppings },
    actions: { setCount, setToppings },
  } = useContext(ProductToppingsContext)

  const [activeTab, setActiveTab] = useState(0)

  const formRef = useRef<HTMLFormElement>(null)

  const { t } = useTranslation('common')
  const router = useRouter()
  const isRo = router.locale === LANGUAGES.ro

  useEffect(() => {
    formRef.current?.reset()
  }, [activeTab])

  const addTabHandler = () => {
    if (currentToppings.length >= 20) {
      return
    }

    setCount(count + 1)

    setActiveTab(currentToppings.length)
  }

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

  const toppingCheckbox = ({ text, textru, price }: Toppings['topping'][0]) => {
    const label = `${isRo ? text : textru}- ` + (price ? `${price} ${t('MDL')}` : t('gratis'))
    const { topping } = currentToppings[activeTab]

    const toppingIndex = topping.findIndex((value) => value.text === text)
    const checked = toppingIndex !== -1

    const onChangeHandler = () => {
      setToppings(
        checked
          ? topping.filter((value) => value.text !== text)
          : [...topping, { text, textru, price }],
        'topping',
        activeTab
      )
    }

    return (
      <Checkbox
        key={label + activeTab}
        checked={checked}
        onChange={onChangeHandler}
      >
        {label}
      </Checkbox>
    )
  }

  const withoutToppingCheckbox = (text: string, textru: string) => {
    const { without } = currentToppings[activeTab]

    const withoutIndex = without.findIndex((value) => value.text === text)
    const checked = withoutIndex !== -1

    const onChangeHandler = () => {
      setToppings(
        checked
          ? without.filter((value) => value.text !== text)
          : [...without, { text, textru }],
        'without',
        activeTab
      )
    }

    return (
      <Checkbox
        key={text + activeTab}
        checked={checked}
        onChange={onChangeHandler}
      >
        {isRo ? text : textru}
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
            {toppings.without.map((withoutSing) => withoutToppingCheckbox(withoutSing.text, withoutSing.textru))}
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToppingsManager
