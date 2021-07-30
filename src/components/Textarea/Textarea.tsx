import classNames from 'classnames'
import { useTranslation } from 'next-i18next'

type Props = {
  placeholder: string
}

const Textarea = ({ placeholder }: Props) => {
  const { t } = useTranslation('cart')
  return(
    <textarea
      className={classNames('w-full')}
      placeholder={t(placeholder)}
    />
  )
}

export default Textarea
