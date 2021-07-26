import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { UseAutocompleteProps } from '@material-ui/lab/useAutocomplete'

type Props = {
  className?: string
  label: string
  items: string[]
  onChange: UseAutocompleteProps<string, undefined, undefined, undefined>['onChange']
}

const Dropdown = ({ className, label, items, onChange }: Props) => (
  <Autocomplete
    className={className}
    options={items}
    renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
    onChange={onChange}
  />
)

export default Dropdown
