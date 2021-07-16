import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import { FieldValues, UseFormRegister, ValidationRule } from 'react-hook-form'

import styles from './Input.module.scss'

type Props = PropsWithChildren<{
  label: string
  name: string
  type?: string
  className?: string
  placeholder?: string
  required?: boolean
  pattern?: ValidationRule<RegExp>
  register: UseFormRegister<FieldValues>
}>

const Input = ({ label, name, type, placeholder, className, required, pattern, register }: Props) => (
  <div className={classNames(styles.inputContainer, className, 'flex flex-col')}>
    <label className={classNames(styles.inputContainer__label, 'font-medium')}>{label}</label>
    <input
      className={classNames(styles.inputContainer__input, 'h-12 w-full px-4')}
      type={type || 'text'}
      placeholder={placeholder}
      {...register(name, { required, pattern })}
    />
  </div>
)

export default Input
