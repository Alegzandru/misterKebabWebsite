import { useState } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { DROPDOWN_DATA, LOCATIONS_INPUTS } from '../../../../constants/forms'
import Dropdown from '../../../Dropdown/Dropdown'
import Input from '../../../Input/Input'
import RadioButton from '../../../RadioButton/RadioButton'
import Textarea from '../../../Textarea/Textarea'
import FormBlock from '../FormBlock/FormBlock'

type Props = {
  register: UseFormRegister<FieldValues>
}

const DeliveryBlock = ({ register }: Props) => {
  const [showLocationDetails, setShowLocationDetails] = useState(false)
  const [, setRegionToDeliver] = useState('')

  const onChangeDropdownHandler = (_event: any, value: string | null) => {
    if (!showLocationDetails) {
      setShowLocationDetails(true)
    }

    setRegionToDeliver(value || '')
  }

  const locationInputs = (
    <div>
      <Input className="mb-6" register={register} {...LOCATIONS_INPUTS.street} />
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

  return (
    <>
      <FormBlock heading="Achitare">
        <RadioButton text="În numerar" selected={true} onChange={() => null} />
      </FormBlock>
      <FormBlock heading="Detaliile livrării">
        <Dropdown className="mb-6 w-full" onChange={onChangeDropdownHandler} {...DROPDOWN_DATA.delivery} />
        {showLocationDetails && locationInputs}
        <Textarea placeholder="Comentarii către comanda.." />
      </FormBlock>
    </>
  )
}

export default DeliveryBlock
