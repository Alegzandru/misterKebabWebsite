import classNames from 'classnames'
import { ChangeEvent, PropsWithChildren } from 'react'
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

import styles from './Checkbox.module.scss'

type Props = PropsWithChildren<{
  className?: string
  name?: string
  defaultChecked?: boolean
  checked?: boolean
  register?: UseFormRegister<FieldValues>
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}> & RegisterOptions

const Checkbox = ({ className, name, children, defaultChecked, checked, register, onChange, ...registerOptions }: Props) => {
  const { t } = useTranslation('careers')
  return(
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
        {...(register ? register(name as string, registerOptions) : { name })}
        onChange={onChange}
      />
      <span className={classNames(styles.checkboxContainer__checkMark, 'absolute left-px h-4 w-4')} />
      {t(children as string)}
    </label>
  )
}

export default Checkbox
