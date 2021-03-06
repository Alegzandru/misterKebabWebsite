import classNames from 'classnames'
import { useTranslation } from 'next-i18next'

import styles from './RadioButton.module.scss'

type Props = {
  text: string
  selected: boolean
  onChange: () => void
}

const RadioButton = ({ selected, text, onChange }: Props) => {
  const onClickHandler = () => {
    if (!selected) {
      onChange()
    }
  }

  const { t } = useTranslation('cart')

  return (
    <button
      type="button"
      className={classNames(
        styles.radioButtonContainer,
        selected ? styles.radioButtonContainer_active : '',
        'flex justify-center items-center w-full font-bold p-1 h-13',
      )}
      onClick={onClickHandler}
    >
      {t(text)}
    </button >
  )
}

export default RadioButton
