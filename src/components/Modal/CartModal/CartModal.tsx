import classNames from 'classnames'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CART_FORM_BLOCKS } from '../../../constants'
import { VALIDATIONS } from '../../../constants/forms'
import { OrderType } from '../../../types'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import styles from './CartModal.module.scss'
import FormBlock from './FormBlock/FormBlock'

const CartModal = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [orderType] = useState<OrderType>('')

  const onSubmit = (data: Record<string, string | boolean>) => {
    // eslint-disable-next-line no-console
    console.table(data)
  }

  const CurrentShowedBlock = orderType ? CART_FORM_BLOCKS[orderType].component : null

  return (
    <div className={classNames(styles.cartModalContainer, 'w-full relative mx-auto')}>
      <h1>Comanda dvs.</h1>
      <div>

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

        </FormBlock>
        <FormBlock heading="Achitare">

        </FormBlock>
        {CurrentShowedBlock && <CurrentShowedBlock />}
        <Button className={classNames(styles.careersHeroContainer__button, 'mt-24 mx-auto sm:mt-18')} type="submit">
          Trimite
        </Button>
      </form>
    </div>
  )
}

export default CartModal
