import { useState } from 'react'
import { DeepMap, FieldError, FieldValues, RegisterOptions, UseFormRegister, UseFormSetValue } from 'react-hook-form'
// import { FieldValues, UseFormRegister } from 'react-hook-form'
import { DROPDOWN_DATA, LOCATIONS_INPUTS, VALIDATIONS } from '../../../../constants/forms'
import { OrderPayment } from '../../../../types'
import Dropdown from '../../../Dropdown/Dropdown'
import Input from '../../../Input/Input'
import RadioButton from '../../../RadioButton/RadioButton'
import Textarea from '../../../Textarea/Textarea'
import FormBlock from '../FormBlock/FormBlock'
import styles from '../../../Input/Input.module.scss'

type Props = {
  orderPayment: OrderPayment
  setOrderPayment: React.Dispatch<React.SetStateAction<OrderPayment>>
  register: UseFormRegister<FieldValues>
  setValue: UseFormSetValue<Record<string, any>>
  errors?: DeepMap<FieldValues, FieldError>
} & RegisterOptions

const DeliveryBlock = ({ orderPayment, setOrderPayment, register, setValue, errors, ...registerOptions }: Props) => {

  const [showLocationDetails, setShowLocationDetails] = useState(false)
  const [regionToDeliver, setRegionToDeliver] = useState('')

  const onChangeDropdownHandler = (_event: any, value: string | null) => {
    if (!showLocationDetails) {
      setShowLocationDetails(true)
    }

    setRegionToDeliver(value || '')
    setValue('regionToDeliver', value, { shouldValidate: true })
  }

  const locationInputs = (
    <div>
      <Input className="mb-6" register={register} errors={errors} {...LOCATIONS_INPUTS.street} {...VALIDATIONS['street']}/>
      <div className="flex mb-6">
        <Input className="mr-4" register={register} {...LOCATIONS_INPUTS.block} />
        <Input register={register} {...LOCATIONS_INPUTS.stair} />
      </div>
      <div className="flex mb-6">
        <Input className="mr-4" register={register} {...LOCATIONS_INPUTS.floor} />
        <Input register={register} {...LOCATIONS_INPUTS.flat} />
      </div>
    </div>
  )

  // const orderPaymentButton = ({text, type}: typeof ORDER_PAYMENT_BUTTONS[0], index: number) =>
  //   (<RadioButton
  //     key={index} text={text} selected={orderPayment === type}
  //     onChange={() => {
  //       setOrderPayment(type)
  //       setValue('orderPayment', type, { shouldValidate: true })
  //     }} />)

  // const errorBlockPayment = errors && errors['orderPayment'] && <p className={styles.inputContainer__error}>*{errors['orderPayment'].message}</p>
  const errorBlockLocation = errors && errors['regionToDeliver'] &&
  <p className={styles.inputContainer__error}>*{errors['regionToDeliver'].message}</p>

  return (
    <>
      <FormBlock heading="Achitare">
        <RadioButton text="În numerar" selected={true} onChange={() => null} />
        {/* <div className="grid grid-flow-col gap-2">
          {ORDER_PAYMENT_BUTTONS.map(orderPaymentButton)}
        </div> */}
        {/* {errorBlockPayment} */}
      </FormBlock>
      {/* <input
        type="text"
        hidden={true}
        value={orderPayment}
        {...register('orderPayment', registerOptions)}
      ></input> */}
      <FormBlock heading="Detaliile livrării">
        <Dropdown
          className="mb-6 w-full"
          onChange={onChangeDropdownHandler}
          {...DROPDOWN_DATA.delivery}
        />
        {errorBlockLocation}
        <input
          type="text"
          hidden={true}
          value={regionToDeliver}
          {...register('regionToDeliver', registerOptions)}
        ></input>
        {showLocationDetails && locationInputs}
        <Textarea placeholder="Comentarii către comanda.." register={register}/>
      </FormBlock>
    </>
  )
}

export default DeliveryBlock
