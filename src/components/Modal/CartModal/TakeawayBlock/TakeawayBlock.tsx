import { useState } from 'react'
import { DeepMap, FieldError, FieldValues, UseFormRegister, RegisterOptions, UseFormSetValue } from 'react-hook-form'

import { DROPDOWN_DATA } from '../../../../constants/forms'
import Dropdown from '../../../Dropdown/Dropdown'
import Textarea from '../../../Textarea/Textarea'
import FormBlock from '../FormBlock/FormBlock'
import styles from '../../../Input/Input.module.scss'

type Props = {
  register: UseFormRegister<FieldValues>
  errors?: DeepMap<FieldValues, FieldError>
  setValue: UseFormSetValue<Record<string, any>>
} & RegisterOptions

const TakeawayBlock = ({ errors, setValue, register, ...registerOptions }: Props) => {
  const errorBlock = errors && errors['takeawayLocation'] && <p className={styles.inputContainer__error}>*{errors['takeawayLocation'].message}</p>
  const [takeawayLocation, setTakeawayLocation] = useState('')

  return (
    <FormBlock heading="Punctul de primire">
      <Dropdown
        className="w-full"
        onChange={(_, value) => {
          setTakeawayLocation(value || '')
          setValue('takeawayLocation', value, { shouldValidate: true })
        }}
        {...DROPDOWN_DATA.takeaway}
      />

      <input
        type="text"
        hidden={true}
        value={takeawayLocation}
        {...register('takeawayLocation', registerOptions)}
      ></input>
      <div className="mb-6">{errorBlock}</div>

      <Textarea placeholder="Comentarii către comanda.." register={register}/>
    </FormBlock>
  )
}

export default TakeawayBlock
