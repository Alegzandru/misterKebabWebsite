import classNames from 'classnames'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import { useTranslation } from 'next-i18next'

type Props = PropsWithChildren<{
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}>

const Button = ({ type, className, onClick, children }: Props) => {
  const { t } = useTranslation('careers')
  return(
    <button
      type={type}
      className={classNames(
        styles.buttonContainer, className,
        'flex justify-center items-center font-medium w-full rounded h-13 transition-colors'
      )}
      onClick={onClick}
    >
      {t(children as string)}
    </button>
  )
}

export default Button
