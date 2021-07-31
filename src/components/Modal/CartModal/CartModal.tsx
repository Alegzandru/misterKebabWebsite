import classNames from 'classnames'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { DELIVERY_PRICE, MODALS } from '../../../constants'
import { CART_FORM_COMPONENTS, ORDER_TYPE, ORDER_TYPE_BUTTONS, VALIDATIONS } from '../../../constants/forms'
import { CartContext } from '../../../store/Cart/Cart.context'
import { ModalContext } from '../../../store/Modal/Modal.context'
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

  const { state: { show }, actions: { closeModal } } = useContext(ModalContext)
  const { state: { price, groupedByToppingsProducts } } = useContext(CartContext)

  const [orderType, setOrderType] = useState<OrderType>('')

  const onSubmit = (data: Record<string, string | boolean>) => {
    // eslint-disable-next-line no-console
    console.table(data)
  }

  const isThroughDelivery = orderType === ORDER_TYPE.delivery

  const CurrentShowedBlock = orderType ? CART_FORM_COMPONENTS[orderType] : null

  const orderTypeRadio = ({ text, type }: typeof ORDER_TYPE_BUTTONS[0], index: number) =>
    <RadioButton key={index} text={text} selected={orderType === type} onChange={() => setOrderType(type)} />

  useEffect(() => {
    if (show === MODALS.cart && !groupedByToppingsProducts.length) {
      closeModal()
    }
  }, [groupedByToppingsProducts])

  return (
    <div className={classNames(styles.cartModalContainer, 'w-full relative mx-auto')}>
      <h1 className={classNames(styles.cartModalContainer__heading, 'font-bold')}>Comanda dvs.</h1>
      <div className="mt-10">
        {groupedByToppingsProducts.map((product, index) => <SelectedProduct key={index} index={index} {...product} />)}
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
        <div className="flex flex-col items-end mt-18">
          <p className={styles.cartModalContainer__subtotal}>Subtotal: {price} MDL</p>
          {orderType === ORDER_TYPE.delivery && <p className={styles.cartModalContainer__subtotal}>Livrare: {DELIVERY_PRICE} MDL</p>}
          <h4
            className={classNames(styles.cartModalContainer__totalHeading, 'font-bold mt-2')}
          >
            Total: {price + (isThroughDelivery ? DELIVERY_PRICE : 0)} MDL
          </h4>
        </div>
        <Button className={classNames(styles.careersHeroContainer__button, 'mt-8')} type="submit">
          <Bag className="mr-2" stroke="#ffffff" />
          Plasează comanda
        </Button>
      </form>
    </div>
  )
}

export default CartModal
