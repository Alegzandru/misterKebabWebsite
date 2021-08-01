import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import styles from './Textarea.module.scss'

type Props = {
  placeholder: string
}

const Textarea = ({ placeholder }: Props) => {
  const { t } = useTranslation('cart')

  return(
    <textarea
      className={classNames(styles.textarea, 'w-full p-4')}
      placeholder={t(placeholder)}
    />
  )
}

export default Textarea
