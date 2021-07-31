import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import { CART_FORM_COMPONENTS, ORDER_TYPE, ORDER_TYPE_BUTTONS, VALIDATIONS } from '../../../constants/forms'
import { CartContext } from '../../../store/Cart/Cart.context'
import { OrderType } from '../../../types'
import { sendProductsToCMS } from '../../../utils/products'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import RadioButton from '../../RadioButton/RadioButton'
import SelectedProduct from '../../SelectedProduct/SelectedProduct'
import Bag from '../../Svgs/Bag/Bag'
import styles from './CartModal.module.scss'
import FormBlock from './FormBlock/FormBlock'
import { CartState } from '../../../types/state'

const sendMailOrder = async (data: Record<string, string | boolean>, products: CartState['groupedByToppingsProducts'] ) => {
  try {
    await fetch('/api/order', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        data,
        products,
      }),
    })
  } catch(error){
    return 0
  }
}

const CartModal = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { state: { price, groupedByToppingsProducts } } = useContext(CartContext)

  const [orderType, setOrderType] = useState<OrderType>('')

  const { t } = useTranslation('cart')

  const onSubmit = (data: Record<string, string | boolean>) => {

    sendProductsToCMS(groupedByToppingsProducts, data)

    sendMailOrder(data, groupedByToppingsProducts)
  }

  const isThroughDelivery = orderType === ORDER_TYPE.delivery

  const CurrentShowedBlock = orderType ? CART_FORM_COMPONENTS[orderType] : null

  const orderTypeRadio = ({ text, type }: typeof ORDER_TYPE_BUTTONS[0], index: number) =>
    <RadioButton key={index} text={text} selected={orderType === type} onChange={() => setOrderType(type)} />

  return (
    <div className={classNames(styles.cartModalContainer, 'w-full relative mx-auto')}>
      <h1 className={classNames(styles.cartModalContainer__heading, 'font-bold')}>{t('Comanda dvs.')}</h1>
      <div className="mt-10">
        {groupedByToppingsProducts.map((product, index) => <SelectedProduct key={index} {...product} />)}
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
          <Input
            name="email"
            label="E-mail"
            placeholder="exemplu@mail.com"
            register={register}
            errors={errors}
            {...VALIDATIONS.email}
          />
        </FormBlock>
        <FormBlock heading="Primirea comenzii">
          <div className="grid grid-flow-col gap-2">
            {ORDER_TYPE_BUTTONS.map(orderTypeRadio)}
          </div>
        </FormBlock>
        {CurrentShowedBlock && <CurrentShowedBlock register={register} />}
        <div className="flex flex-col items-end">
          <p>{t('Subtotal')}: {price} {t('MDL')}</p>
          {orderType === ORDER_TYPE.delivery && <p>{t('Livrare')}: {35} {t('MDL')}</p>}
          <h4>{t('Total')}: {price + (isThroughDelivery ? 35 : 0)} {t('MDL')}</h4>
        </div>
        <Button className={classNames(styles.careersHeroContainer__button, 'mt-24 mx-auto sm:mt-18')} type="submit">
          <Bag className="mr-2" stroke="#ffffff" />
          {t('Plasează comanda')}
        </Button>
      </form>
    </div>
  )
}

export default CartModal
