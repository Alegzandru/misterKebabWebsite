import classNames from 'classnames'

import { SIZES } from '../../constants/common'
import styles from './ProductCount.module.scss'

type Props = {
  className?: string
  background: 'white' | 'gray'
  size?: number
  value: number
  onChange: (value: number) => void
}

const ProductCount = ({ className, background, size, value: count, onChange }: Props) => {
  const onClickHandler = (value: number) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()

    onChange(value)
  }

  const changeCountButton = (sign: string, onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) =>
    <button className={classNames(styles.productCountContainer__changeCountButton, 'transition-colors font-bold')} onClick={onClick}>{sign}</button>

  return (
    <div className={classNames(
      styles.productCountContainer,
      size === SIZES.sm ? styles.productCountContainer_small : '',
      styles[background],
      'flex items-center mr-4',
      className
    )}>
      {changeCountButton('-', onClickHandler(count > 1 ? count - 1 : count))}
      <span className={classNames(styles.productCountContainer__count, 'rounded h-9 flex justify-center items-center')}>{count}</span>
      {changeCountButton('+', onClickHandler(count + 1))}
    </div >
  )
}

export default ProductCount
