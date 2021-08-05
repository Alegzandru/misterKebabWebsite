import classNames from 'classnames'
import styles from './Loader.module.scss'
import Image from 'next/image'
import gif from '../../../public/gifs/meat res.gif'
import logo from '../../../public/images/logos/logo-text-big.png'

type Props = {
  small?: boolean
}

const Loader = ({ small }: Props) => {
  const loader = (
    <div className={classNames(styles.loaderContainer, 'h-56 w-56 relative rounded-full flex justify-center')}>
      <Image src={gif} layout="fill" objectFit="cover" priority={true} alt="loader" />
      <div className={classNames(styles.loaderContainer__logo, 'h-14 w-48 absolute rounded-full z-10')}>
        <Image src={logo} layout="fill" objectFit="cover" priority={true} alt="Logo text Mr. Kebab" />
      </div>
    </div>
  )

  return small ? loader : (
    <div className={classNames(styles.loaderContainerWrapper, 'flex justify-center items-center')}>
      {loader}
    </div>
  )
}

export default Loader
