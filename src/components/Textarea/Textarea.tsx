import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import styles from './Textarea.module.scss'

type Props = {
  placeholder: string
  register: UseFormRegister<FieldValues>
}

const Textarea = ({ placeholder, register}: Props) => {
  const { t } = useTranslation('cart')

  return(
    <textarea
      className={classNames(styles.textarea, 'w-full p-4')}
      placeholder={t(placeholder)}
      {...register('commentary')}
    />
  )
}

export default Textarea
