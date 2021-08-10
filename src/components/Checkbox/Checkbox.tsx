import classNames from 'classnames'
import { ChangeEvent, PropsWithChildren } from 'react'
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

import styles from './Checkbox.module.scss'

type Props = PropsWithChildren<{
  className?: string
  name?: string
  asRadio?: boolean
  defaultChecked?: boolean
  checked?: boolean
  register?: UseFormRegister<FieldValues>
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}> & RegisterOptions

const Checkbox = ({ className, name, children, asRadio, defaultChecked, checked, onChange, register, ...registerOptions }: Props) => {
  const { t } = useTranslation('careers')

  const { onChange: registerOnChange, ...restRegister } = register ? register(name as string, registerOptions) : { name, onChange: () => null }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }

    registerOnChange(event)
  }

  return (
    <label
      className={classNames(
        styles.checkboxContainer,
        checked ? styles.checkboxContainer_active : '',
        className,
        'relative flex items-center font-medium select-none h-5 pl-7 mb-4'
      )}
    >
      <input
        className="absolute opacity-0 h-0 w-0"
        type={asRadio ? 'radio' : 'checkbox'}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChangeHandler}
        {...restRegister}
      />
      <span className={classNames(
        styles.checkboxContainer__checkMark,
        asRadio ? styles.checkboxContainer__checkMark_asRadio : '',
        'absolute left-px h-4 w-4 '
      )} />
      <span className="leading-none">{t(children as string)}</span>
    </label>
  )
}

export default Checkbox
