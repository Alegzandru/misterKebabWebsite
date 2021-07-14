import classNames from 'classnames'
import styles from './CategoryHeading.module.scss'

type Props = {
  name: string
}

const CategoryHeading = ({ name }: Props) => {
  const dashedLine = <hr className={classNames(styles.headingContainer__line, 'w-full')} />

  return (
    <div className={classNames(styles.headingContainer, 'w-full flex items-center max-w-screen')}>
      {dashedLine}
      <h2 className={classNames(styles.headingContainer__heading, 'my-0 mx-4 font-bold')}>{name}</h2>
      {dashedLine}
    </div>
  )
}

export default CategoryHeading
