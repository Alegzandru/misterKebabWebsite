/* eslint-disable max-len */
import classNames from 'classnames'

import styles from './LanguageButton.module.scss'

type Props = {
  className?: string
  color?: string
  backgroundColor?: string
  text: string
  transparent: boolean
}

const LanguageButton = ({ color, className, text, transparent }: Props) => (
  <button className={classNames(styles.languageButtonContainer, 'flex justify-center items-center font-bold group', className)}>
    <span style={{ color: color || '#F9F9F9' }} className="absolute">{text}</span>
    <svg width="32" height="32" viewBox="0 0 32 32" className={`${transparent ? 'text-darkRed group-hover:text-red' : 'text-yellow group-hover:text-red'} fill-current transition duration-300`} xmlns="http://www.w3.org/2000/svg">
      <path d="M16 0L18.4972 3.44595L22.1229 1.21793L23.1113 5.35719L27.3137 4.68629L26.6428 8.8887L30.7821 9.87707L28.5541 13.5028L32 16L28.5541 18.4972L30.7821 22.1229L26.6428 23.1113L27.3137 27.3137L23.1113 26.6428L22.1229 30.7821L18.4972 28.5541L16 32L13.5028 28.5541L9.87707 30.7821L8.8887 26.6428L4.68629 27.3137L5.35719 23.1113L1.21793 22.1229L3.44595 18.4972L0 16L3.44595 13.5028L1.21793 9.87707L5.35719 8.8887L4.68629 4.68629L8.8887 5.35719L9.87707 1.21793L13.5028 3.44595L16 0Z" />
    </svg>
  </button>
)

export default LanguageButton
