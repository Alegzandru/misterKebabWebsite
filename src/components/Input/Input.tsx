import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { DeepMap, FieldError, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

import styles from './Input.module.scss'

type Props = {
  name: string
  label?: string
  type?: string
  className?: string
  placeholder?: string
  errors?: DeepMap<FieldValues, FieldError>
  register: UseFormRegister<FieldValues>
} & RegisterOptions

const Input = ({ label, name, type, placeholder, className, errors, register, ...registerOptions }: Props) => {
  const errorBlock = errors && errors[name] && <p className={styles.inputContainer__error}>*{errors[name].message}</p>
  const { t } = useTranslation('careers')

  return (
    <div className={classNames(styles.inputContainer, className, 'flex flex-col')}>
      {label && <label className={classNames(styles.inputContainer__label, 'font-medium')}>{t(label)}</label>}
      <input
        className={classNames(
          styles.inputContainer__input,
          { [styles.inputContainer__input_border]: errors && errors[name] },
          'h-12 w-full px-4'
        )}
        type={type || 'text'}
        placeholder={t(placeholder || '')}
        {...register(name, registerOptions)}
      />
      {errorBlock}
    </div>
  )
}

export default Input
