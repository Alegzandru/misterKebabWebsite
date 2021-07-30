/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'

import { LANGUAGES } from '../../../../constants/common'
import { ProductToppingsContext } from '../../../../store/ProductToppings/ProductToppings.context'
import { Drinks, Topping, Toppings, Without } from '../../../../types'
import Checkbox from '../../../Checkbox/Checkbox'
import styles from './ToppingsManager.module.scss'

type Props = {
  toppings: Toppings
}

const ToppingsManager = ({ toppings }: Props) => {
  const {
    state: { count, toppings: currentToppings },
    actions: { setCount, setAdditive },
  } = useContext(ProductToppingsContext)

  const router = useRouter()
  const isRo = router.locale === LANGUAGES.ro

  const [activeTab, setActiveTab] = useState(0)

  const formRef = useRef<HTMLFormElement>(null)

  const { t } = useTranslation('common')

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

  const renderCheckbox = (type: string, label: string, topping: Topping | Without) => {
    const additive: Topping[] | Without[] = currentToppings[activeTab][type]

    const { text } = topping

    const additiveIndex = additive.findIndex((value) => value.text === text)
    const checked = additiveIndex !== -1

    const onChangeHandler = () => {
      setAdditive(
        checked
          ? additive.filter((value) => value.text !== text)
          : [...additive, topping],
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

  const toppingCheckbox = (topping: Topping) => {
    const { text, price } = topping

    const label = `${text}- ` + (price ? `${price} MDL` : 'gratis')

    return renderCheckbox('topping', label, topping)
  }

  const withoutToppingCheckbox = (without: Without) => renderCheckbox('without', without.text, without)

  const drinksRadioButton = ({ text, textru }: Drinks) => {
    const { drinks } = currentToppings[activeTab]

    if (!drinks) {
      return null as unknown as JSX.Element
    }

    const checked = !!drinks[0] && drinks[0].text === text

    const onChangeHandler = () => {
      if (!checked) {
        setAdditive([{ text, textru }], 'drinks', activeTab)
      }
    }

    return (
      <Checkbox
        key={text + activeTab}
        name="drink"
        asRadio={true}
        defaultChecked={checked}
        onChange={onChangeHandler}
      >
        {isRo ? text : textru}
      </Checkbox>
    )
  }

  const additiveBlock = <T extends unknown>(text: string, additive: T[], renderFunction: (value: T) => JSX.Element) =>
    additive.length ? (
      <div key={text + activeTab}>
        <h3>{t(text)}</h3>
        <div className="flex flex-col mt-4">
          {additive.map(renderFunction)}
        </div>
      </div>
    ) : null

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
      <form
        ref={formRef}
        className={classNames(
          styles.toppingsManagerContainer__additiveContainer,
          toppings.drinks ? 'md:grid-cols-3' : '',
          'w-full py-6 px-4 bg-white rounded grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-2'
        )}
      >
        {additiveBlock('Topping', toppings.topping, toppingCheckbox)}
        {/* {additiveBlock('Fără', toppings.without, withoutToppingCheckbox)} */}
        {additiveBlock('Fără', (toppings.without as unknown as string[]).map((value) => ({ text: value, textru: value })), withoutToppingCheckbox)}
        {toppings.drinks && additiveBlock('Băutura', toppings.drinks, drinksRadioButton)}
      </form>
    </div>
  )
}

export default ToppingsManager
