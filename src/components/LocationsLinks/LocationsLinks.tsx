import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

import { LOCATIONS } from '../../constants'
import { PAGES, THEMES } from '../../constants/common'
import ExternalLink from '../Svgs/ExternalLink/ExternalLink'
import styles from './LocationsLinks.module.scss'

type Props = {
  theme: keyof typeof THEMES
}

const LocationsLinks = ({ theme }: Props) => {
  const isLight = theme === THEMES.light

  const router = useRouter()
  const ro = router.locale === 'ro'

  const block = ({ name, address, nameru, addressru }: typeof LOCATIONS[0], index: number) => (
    <div
      key={index}
      className={classNames(styles.locationsContainer__wrapper, 'transition-all p-6 sm:my-0')}
    >
      <h5 className={styles.locationsContainer__heading}>{ro ? name : nameru}</h5>
      <p className={classNames(styles.locationsContainer__address, 'mt-4 mb-6')}>{ro ? address : addressru}</p>
      <Link href={{
        pathname: PAGES.locations.pathname,
        query: { address },
      }}>
        <a className={classNames(styles.locationsContainer__anchor, 'flex items-center relative w-max font-medium transition-all')}>
          {ro ? 'Deschide pe hartă' : 'Открыть в карте'}
          <ExternalLink className="ml-2" />
        </a>
      </Link>
    </div>
  )

  return (
    <div className={classNames(
      styles.locationsContainer,
      styles[theme],
      isLight ? 'gap-4' : 'gap-2 mb-16 lg:mb-0',
      'grid grid-cols-1 mt-6 mx-auto w-full max-w-screen sm:grid-cols-2 lg:grid-cols-4 lg:mt-11',
    )}>
      {LOCATIONS.map(block)}
    </div>
  )
}

export default LocationsLinks
