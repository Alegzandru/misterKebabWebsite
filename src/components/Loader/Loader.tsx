import classNames from 'classnames'
import styles from './Loader.module.scss'
import Image from 'next/image'
import gif from '../../../public/gifs/loading.gif'
import logo from '../../../public/images/logos/logo-text-big.png'

const Loader = () => (
  <div className={classNames(styles.loaderContainer, 'flex justify-center items-center')}>
    <div className={classNames(styles.loaderContainer__wrapper, 'h-56 w-56 relative rounded-full flex justify-center')}>
      <Image src={gif} layout="fill" objectFit="cover" priority={true} alt="loader" />
      <div className={classNames(styles.loaderContainer__logo, 'h-14 w-48 absolute rounded-full z-10')}>
        <Image src={logo} layout="fill" objectFit="cover" priority={true} alt="logo" />
      </div>
    </div>
  </div>
)

export default Loader
