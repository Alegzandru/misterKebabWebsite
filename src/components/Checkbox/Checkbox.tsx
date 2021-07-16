import classNames from 'classnames'
import { ChangeEvent, PropsWithChildren } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import styles from './Checkbox.module.scss'

type Props = PropsWithChildren<{
  className?: string
  name?: string
  defaultChecked?: boolean
  checked?: boolean
  register?: UseFormRegister<FieldValues>
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}>

const Checkbox = ({ className, name, children, defaultChecked, checked, register, onChange }: Props) => (
  <label
    className={classNames(
      styles.checkboxContainer, className,
      'relative flex items-center font-medium select-none pl-7 mb-6 md:mb-4'
    )}
  >
    <input
      className="absolute opacity-0 h-0 w-0"
      type="checkbox"
      defaultChecked={defaultChecked}
      checked={checked}
      {...(register ? register(name as string) : { name, onChange })}
    />
    <span className={classNames(styles.checkboxContainer__checkMark, 'absolute left-px h-4 w-4')} />
    {children}
  </label>
)

export default Checkbox
