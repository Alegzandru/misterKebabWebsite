import classNames from 'classnames'
import styles from './Pagination.module.scss'

type Props = {
  slides: string[]
  activeSlide: number

  onClick: (index: number) => void
}

const Pagination = ({ slides, activeSlide, onClick }: Props) => (
  <div className={classNames(styles.paginationContainer, 'absolute flex justify-center w-full')}>
    {slides.map((_, index) => (
      <button
        key={index}
        className={classNames(
          styles.paginationContainer__button,
          { [styles.paginationContainer__button_active]: activeSlide === index },
          'w-full h-full flex-1 transition-colors duration-1000'
        )}
        title="Change slide"
        aria-label="Change slide"
        onClick={() => onClick(index)}
      />
    ))}
  </div>
)

export default Pagination
