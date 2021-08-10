import { DeepMap, FieldError, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { ORDER_PAYMENT_BUTTONS } from '../../../../constants/forms'
import { PropsForm } from '../../../../types'
import Input from '../../../Input/Input'
import RadioButton from '../../../RadioButton/RadioButton'
import FormBlock from '../FormBlock/FormBlock'

import styles from '../../../Input/Input.module.scss'

type PropsInput = {
  register: UseFormRegister<FieldValues>
  errors?: DeepMap<FieldValues, FieldError>
} & RegisterOptions

export const InRestaurantInput = ({register, errors, ...registerOptions}: PropsInput) => (
  <Input
    name="masa"
    label="Masa"
    placeholder="10"
    register={register}
    errors={errors}
    {...registerOptions}
  />
)

export const InRestaurantForm = ({orderPayment, setOrderPayment, register, setValue, errors, ...registerOptions}: PropsForm) => {
  const orderPaymentButton = ({text, type}: typeof ORDER_PAYMENT_BUTTONS[0], index: number) =>
    (<RadioButton
      key={index} text={text} selected={orderPayment === type}
      onChange={() => {
        setOrderPayment(type)
        setValue('orderPayment', type, { shouldValidate: true })
      }} />)

  const errorBlock = errors && errors['orderPayment'] && <p className={styles.inputContainer__error}>*{errors['orderPayment'].message}</p>

  return(
    <FormBlock heading="Achitare">
      {/* <RadioButton text="În numerar" selected={true} onChange={() => null} /> */}
      <div className="grid grid-flow-col gap-2">
        {ORDER_PAYMENT_BUTTONS.map(orderPaymentButton)}
      </div>
      <input
        type="text"
        hidden={true}
        value={orderPayment}
        {...register('orderPayment', registerOptions)}
      ></input>
      {errorBlock}
    </FormBlock>
  )
}
