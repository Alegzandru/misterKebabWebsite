import classNames from 'classnames'

import Close from '../Svgs/Close/Close'
import styles from './CloseButton.module.scss'

type Props = {
  className?: string
  onClick?: () => void
}

const CloseButton = ({ className, onClick }: Props) => (
  <button
    className={classNames(
      styles.closeButtonContainer,
      className,
      'flex justify-center items-center w-10 h-10 rounded-full'
    )}
    onClick={onClick}
    aria-label="Close button"
    type="button"
  >
    <Close className={styles.closeButtonContainer__sign} />
  </button>
)

export default CloseButton
