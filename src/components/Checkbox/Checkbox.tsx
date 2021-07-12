import classNames from 'classnames'
import { ChangeEvent, PropsWithChildren } from 'react'
import styles from './Checkbox.module.scss'

type Props = PropsWithChildren<{
  className?: string
  defaultChecked?: boolean
  checked?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}>

const Checkbox = ({ className, children, defaultChecked, checked, onChange }: Props) => (
  <label className={classNames(styles.checkboxContainer, className, 'font-normal')}>
    <input type="checkbox" defaultChecked={defaultChecked} checked={checked} onChange={onChange} />
    <span />
    {children}
  </label>
)

export default Checkbox
