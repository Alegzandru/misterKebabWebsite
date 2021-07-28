import classNames from 'classnames'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { CART_FORM_COMPONENTS, ORDER_TYPE, ORDER_TYPE_BUTTONS, VALIDATIONS } from '../../../constants/forms'
import { OrderType } from '../../../types'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import RadioButton from '../../RadioButton/RadioButton'
import SelectedProduct from '../../SelectedProduct/SelectedProduct'
import Bag from '../../Svgs/Bag/Bag'
import styles from './CartModal.module.scss'
import FormBlock from './FormBlock/FormBlock'

const CartModal = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [orderType, setOrderType] = useState<OrderType>('')

  const onSubmit = (data: Record<string, string | boolean>) => {
    // eslint-disable-next-line no-console
    console.table(data)
  }

  const isThroughDelivery = orderType === ORDER_TYPE.delivery

  const CurrentShowedBlock = orderType ? CART_FORM_COMPONENTS[orderType] : null

  const orderTypeRadio = ({ text, type }: typeof ORDER_TYPE_BUTTONS[0], index: number) =>
    <RadioButton key={index} text={text} selected={orderType === type} onChange={() => setOrderType(type)} />

  return (
    <div className={classNames(styles.cartModalContainer, 'w-full relative mx-auto')}>
      <h1 className={classNames(styles.cartModalContainer__heading, 'font-bold')}>Comanda dvs.</h1>
      <div className="mt-10">
        <SelectedProduct
          name="Pita de Vita"
          price={90}
          toppings={{ topping: [{ text: 'vita', textru: 'говядина', price: 0 }], without: [{text:'sos', textru: 'соус'}] }}
          image="https://res.cloudinary.com/dbh1vgas3/image/upload/v1626611878/large_pita_Vita_1_6112919154.jpg"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormBlock heading="Date de contact" >
          <Input
            className="mb-4"
            name="name"
            label="Nume Prenume"
            placeholder="Numele dvs."
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
          <p>Subtotal: {247} MDL</p>
          {orderType === ORDER_TYPE.delivery && <p>Livrare: {35} MDL</p>}
          <h4>Total: {247 + (isThroughDelivery ? 35 : 0)}</h4>
        </div>
        <Button className={classNames(styles.careersHeroContainer__button, 'mt-24 mx-auto sm:mt-18')} type="submit">
          <Bag className="mr-2" stroke="#ffffff" />
          Plasează comanda
        </Button>
      </form>
    </div>
  )
}

export default CartModal
