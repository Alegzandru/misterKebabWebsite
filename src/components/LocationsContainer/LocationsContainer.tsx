import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import styles from './LocationsContainer.module.scss'

type Props = PropsWithChildren<unknown>

const LocationsContainer = ({ children }: Props) => (
  <div className={classNames(styles.locationsContainer, 'relative w-full')}>
    <div className="w-full flex flex-col items-center pt-10 px-5">
      <h1 className={classNames(styles.locationsContainer__heading, 'font-bold mb-4')}>Locațiile noastre</h1>
      {children}
    </div>
    <div className={classNames(styles.locationsContainer__placeholder, 'w-full')} />
  </div>
)

export default LocationsContainer
