import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { DELIVERY_PRICE, MODALS, VALID_LOCALS } from '../../../constants'
import {
  CART_FORM_COMPONENTS,
  ORDER_FROM,
  ORDER_FROM_FORMS,
  ORDER_FROM_INPUTS,
  ORDER_TYPE,
  VALIDATIONS,
} from '../../../constants/forms'
import { CartContext } from '../../../store/Cart/Cart.context'
import { ModalContext } from '../../../store/Modal/Modal.context'
import { OrderPayment, OrderType } from '../../../types'
import { sendProductsToCMS } from '../../../utils/products'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import SelectedProduct from '../../SelectedProduct/SelectedProduct'
import Bag from '../../Svgs/Bag/Bag'
import styles from './CartModal.module.scss'
import FormBlock from './FormBlock/FormBlock'
import { CartState } from '../../../types/state'

const sendMailOrder = async (
  data: Record<string, string | boolean>,
  products: CartState['groupedByToppingsProducts'],
  price: number,
  submitLocal: string,
  isValidLocal: boolean
) => {
  try {
    await fetch('/api/order', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        data: {...data, price},
        products,
        submitLocal,
        isValidLocal,
      }),
    })
  } catch(error){
    return 0
  }
}

const CartModal = () => {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  const { state: { show }, actions: { closeModal } } = useContext(ModalContext)
  const { state: { price, groupedByToppingsProducts } } = useContext(CartContext)

  const local = window.location.host.split('.')[0]
  const isValidLocal = local === VALID_LOCALS.botanica || local === VALID_LOCALS.rascanovca
  const inputValidations = isValidLocal ? VALIDATIONS.masa : VALIDATIONS.email

  const [orderType, setOrderType] = useState<OrderType>('takeaway')
  const [orderPayment, setOrderPayment] = useState<OrderPayment>('')

  const { t } = useTranslation('cart')

  const onSubmit = (data: Record<string, string | boolean>) => {

    const getTakeawayLocation = (location: string) => {
      switch (location){
        case 'Telecentru' :
          return 'manager.mister.'
        case 'Malina Mică' :
          return 'manager.mister.'
        case 'Râșcani' :
          return 'rascanovca.mr.'
        case 'Botanica' :
          return 'botanica.mr.'
        default :
          return 'manager.mister.'
      }
    }

    sendProductsToCMS(groupedByToppingsProducts, data, price)

    const submitLocal = isValidLocal ? `${local}.mr.` : getTakeawayLocation(data.takeawayLocation as string)

    sendMailOrder(data, groupedByToppingsProducts, price, submitLocal, isValidLocal)
  }

  const isThroughDelivery = orderType === ORDER_TYPE.delivery

  const CurrentShowedBlock = isValidLocal ? null : orderType ? CART_FORM_COMPONENTS[orderType] : null
  const CurrentShowedInput = isValidLocal ? ORDER_FROM_INPUTS[ORDER_FROM.local] : ORDER_FROM_INPUTS[ORDER_FROM.in_afara_localului]
  const CurrentShowedForm = isValidLocal ? ORDER_FROM_FORMS[ORDER_FROM.local] : ORDER_FROM_FORMS[ORDER_FROM.in_afara_localului]

  useEffect(() => {
    if (show === MODALS.cart && !groupedByToppingsProducts.length) {
      closeModal()
    }
  }, [groupedByToppingsProducts])

  return (
    <div className={classNames(styles.cartModalContainer, 'w-full relative mx-auto')}>
      <h1 className={classNames(styles.cartModalContainer__heading, 'font-bold')}>{t('Comanda dvs.')}</h1>
      <div className="mt-10">
        {groupedByToppingsProducts.map((product, index) => <SelectedProduct key={index} index={index} {...product} />)}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormBlock heading="Date de contact" >
          <Input
            className="mb-4"
            name="name"
            label="Nume Prenume"
            placeholder="Numele dvs"
            register={register}
            errors={errors}
            {...VALIDATIONS.name}
          />
          <Input
            className="mb-4"
            name="tel"
            label="Numar de telefon"
            placeholder="+373 (__) ___ ___"
            register={register}
            errors={errors}
            {...VALIDATIONS.tel}
          />
          <CurrentShowedInput register={register} errors={errors} {...inputValidations}/>
        </FormBlock>
        {CurrentShowedForm &&
        <CurrentShowedForm
          orderType={orderType}
          setOrderType={setOrderType}
          orderPayment={orderPayment}
          setOrderPayment={setOrderPayment}
          register={register}
          errors={errors}
          {...VALIDATIONS.payment}
          setValue={setValue}
        />}
        {CurrentShowedBlock &&
        <CurrentShowedBlock register={register} errors={errors} setValue={setValue} {...VALIDATIONS.takeawayLocation}/>}
        <div className="flex flex-col items-end mt-18">
          <p className={styles.cartModalContainer__subtotal}>{t('Subtotal')}: {price} {t('MDL')}</p>
          {orderType === ORDER_TYPE.delivery && <p className={styles.cartModalContainer__subtotal}>{t('Livrare')}: {DELIVERY_PRICE} {t('MDL')}</p>}
          <h4
            className={classNames(styles.cartModalContainer__totalHeading, 'font-bold mt-2')}
          >
            {t('Total')}: {price + (isThroughDelivery ? DELIVERY_PRICE : 0)} {t('MDL')}
          </h4>
        </div>
        <Button className={classNames(styles.careersHeroContainer__button, 'mt-8')} type="submit">
          <Bag className="mr-2" stroke="#ffffff" />
          {t('Plasează comanda')}
        </Button>
      </form>
    </div>
  )
}

export default CartModal
