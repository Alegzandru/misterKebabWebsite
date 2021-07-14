import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import styles from './Button.module.scss'

type Props = PropsWithChildren<{
  className?: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}>

const Button = ({ className, onClick, children }: Props) => (
  <button
    className={classNames(
      styles.buttonContainer, className,
      'flex justify-center items-center font-medium w-full rounded h-13 transition-colors'
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
