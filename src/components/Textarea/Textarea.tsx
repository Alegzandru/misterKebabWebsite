import classNames from 'classnames'
import styles from './Textarea.module.scss'

type Props = {
  placeholder: string
}

const Textarea = ({ placeholder }: Props) => (
  <textarea
    className={classNames(styles.textarea, 'w-full p-4')}
    placeholder={placeholder}
  />
)

export default Textarea
