import classNames from 'classnames'
import { ChangeEvent, PropsWithChildren } from 'react'
import styles from './Checkbox.module.scss'

type Props = PropsWithChildren<{
  className?: string
  defaultChecked?: boolean
  checked?: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}>

const Checkbox = ({ className, children, defaultChecked, checked, onChange }: Props) => (
  <label
    className={classNames(
      styles.checkboxContainer, className,
      'relative flex items-center font-medium select-none pl-7 mb-6 md:mb-4'
    )}
  >
    <input className="absolute opacity-0 h-0 w-0" type="checkbox" defaultChecked={defaultChecked} checked={checked} onChange={onChange} />
    <span className={classNames(styles.checkboxContainer__checkMark, 'absolute left-px h-4 w-4')} />
    {children}
  </label>
)

export default Checkbox
