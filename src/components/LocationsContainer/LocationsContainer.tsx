import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import { Parallax } from 'react-scroll-parallax'
import { useTranslation } from 'next-i18next'

import styles from './LocationsContainer.module.scss'

type Props = PropsWithChildren<unknown>

const LocationsContainer = ({ children }: Props) => {
  const { t } = useTranslation('locations')

  const parallaxBackgroundImage = (image: string) => (
    <div className={classNames(styles[image], 'hidden md:block absolute pointer-events-none z-10')} >
      <Parallax y={[-20, 30]}>
        <div className={styles.locationsContainer__parallax} />
      </Parallax>
    </div>
  )

  return (
    <div className={classNames(styles.locationsContainer, 'relative w-full overflow-hidden')}>
      <div className="w-full flex flex-col items-center px-5">
        <h1 className={classNames(styles.locationsContainer__heading, 'font-bold mb-4')}>{t('Locațiile noastre')}</h1>
        {children}
      </div>
      {parallaxBackgroundImage('meat')}
      {parallaxBackgroundImage('tomato')}
      {parallaxBackgroundImage('salad')}
      <div className={classNames(styles.locationsContainer__placeholder, 'w-full')} />
    </div>
  )
}

export default LocationsContainer
