import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

import { LOCATIONS } from '../../constants'
import { PAGES, THEMES } from '../../constants/common'
import ExternalLink from '../Svgs/ExternalLink/ExternalLink'
import styles from './LocationsLinks.module.scss'

type Props = {
  theme: keyof typeof THEMES
}

const LocationsLinks = ({ theme }: Props) => {
  const isLight = theme === THEMES.light

  const block = ({ name, address }: typeof LOCATIONS[0], index: number) => (
    <div
      key={index}
      className={classNames(
        styles.locationsContainer__wrapper,
        isLight ? 'px-8 py-6' : 'p-8',
        'p-8 sm:my-0'
      )}
    >
      <h5 className={styles.locationsContainer__heading}>{name}</h5>
      <p className={classNames(styles.locationsContainer__address, 'mt-4 mb-6')}>{address}</p>
      <Link href={{
        pathname: PAGES.locations.pathname,
        query: { address },
      }}>
        <a className={classNames(styles.locationsContainer__anchor, 'flex items-center font-medium')}>
          Deschide pe hartă
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
      'grid grid-cols-1 mt-6 w-full max-w-screen sm:grid-cols-2 lg:grid-cols-4 lg:mt-11',
    )}>
      {LOCATIONS.map(block)}
    </div>
  )
}

export default LocationsLinks
