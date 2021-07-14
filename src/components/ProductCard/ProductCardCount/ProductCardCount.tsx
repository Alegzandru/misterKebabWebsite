import classNames from 'classnames'
import { useState } from 'react'

type Props = {
  styles: {
    readonly [key: string]: string
  }
}

const ProductCardCount = ({ styles }: Props) => {
  const [count, setCount] = useState(1)

  const onClickHandler = (value: number) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    setCount(value)
  }

  const changeCountButton = (sign: string, onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) =>
    <button className={classNames(styles.productCardContainer__changeCountButton, 'transition-colors font-bold')} onClick={onClick}>{sign}</button>

  return (
    <div className="hidden lg:flex items-center mr-4">
      {changeCountButton('-', onClickHandler(count > 1 ? count - 1 : count))}
      <span className={styles.productCardContainer__count}>{count}</span>
      {changeCountButton('+', onClickHandler(count + 1))}
    </div>
  )
}

export default ProductCardCount
