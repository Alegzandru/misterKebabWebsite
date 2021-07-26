import { useState } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { DROPDOWN_DATA } from '../../../../constants/forms'
import Dropdown from '../../../Dropdown/Dropdown'
import Textarea from '../../../Textarea/Textarea'
import FormBlock from '../FormBlock/FormBlock'

type Props = {
  register: UseFormRegister<FieldValues>
}

const TakeawayBlock = ({ }: Props) => {
  const [, setTakeawayLocation] = useState('')

  return (
    <FormBlock heading="Punctul de primire">
      <Dropdown className="mb-6 w-full" onChange={(_, value) => setTakeawayLocation(value || '')} {...DROPDOWN_DATA.takeaway} />
      <Textarea placeholder="Comentarii către comanda.." />
    </FormBlock>
  )
}

export default TakeawayBlock
