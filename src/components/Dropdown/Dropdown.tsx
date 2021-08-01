import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { UseAutocompleteProps } from '@material-ui/lab/useAutocomplete'
import { useTranslation } from 'next-i18next'
import classNames from 'classnames'

import styles from './Dropdown.module.scss'

type Props = {
  className?: string
  label: string
  items: {
    name: string
    price?: number
  }[]
  onChange: UseAutocompleteProps<string, undefined, undefined, undefined>['onChange']
}

const Dropdown = ({ className, label, items, onChange }: Props) => {
  const { t } = useTranslation('cart')
  return(
    <Autocomplete
      className={classNames(className, styles.dropdownContainer)}
      options={items.map((item) => item.name)}
      renderInput={(params) => <TextField {...params} label={t(label)} variant="outlined" />}
      onChange={onChange}
    />
  )
}

export default Dropdown
