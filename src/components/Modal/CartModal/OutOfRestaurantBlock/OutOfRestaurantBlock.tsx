import { DeepMap, FieldError, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { ORDER_TYPE_BUTTONS } from '../../../../constants/forms'
import { PropsForm } from '../../../../types'
import Input from '../../../Input/Input'
import RadioButton from '../../../RadioButton/RadioButton'
import FormBlock from '../FormBlock/FormBlock'

import styles from '../../../Input/Input.module.scss'

type PropsInput = {
  register: UseFormRegister<FieldValues>
  errors?: DeepMap<FieldValues, FieldError>
} & RegisterOptions

export const OutOfRestaurantInput = ({register, errors, ...registerOptions}: PropsInput) => (
  <Input
    name="email"
    label="E-mail"
    placeholder="exemplu@mail.com"
    register={register}
    errors={errors}
    {...registerOptions}
  />
)

export const OutOfRestaurantForm = ({orderType, setOrderType, errors, register, setValue, ...registerOptions}: PropsForm) => {
  const errorBlock = errors && errors['orderType'] && <p className={styles.inputContainer__error}>*{errors['orderType'].message}</p>

  const orderTypeRadio = ({ text, type }: typeof ORDER_TYPE_BUTTONS[0], index: number) =>
    (<RadioButton key={index} text={text} selected={orderType === type} onChange={() => {
      setOrderType(type)
      setValue('orderType', type, { shouldValidate: true })
    }} />)

  return(
    <FormBlock heading="Primirea comenzii">
      <div className="grid grid-flow-col gap-2">
        {ORDER_TYPE_BUTTONS.map(orderTypeRadio)}
      </div>
      <input
        type="text"
        hidden={true}
        value={orderType}
        {...register('orderType', registerOptions)}
      />
      {errorBlock}
    </FormBlock>
  )
}
