import classNames from 'classnames'
import styles from './CategoryHeading.module.scss'

type Props = {
  name: string
}

const CategoryHeading = ({ name }: Props) => {
  const dashedLine = <hr className={classNames(styles.headingContainer__line, 'w-full')} />

  return (
    <div className={classNames(styles.headingContainer, 'w-full flex items-center')}>
      {dashedLine}
      <h2 className={styles.headingContainer__heading}>{name}</h2>
      {dashedLine}
    </div>
  )
}

export default CategoryHeading
