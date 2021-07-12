import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

import { LOCATIONS } from '../../constants'
import { THEMES } from '../../constants/common'
import ExternalLink from '../Svgs/ExternalLink/ExternalLink'
import styles from './Locations.module.scss'

type Props = {
  theme: keyof typeof THEMES
}

const Locations = ({ }: Props) => {
  const block = ({ name, address }: typeof LOCATIONS[0], index: number) => (
    <div key={index} className="p-8 my-1 sm:my-0">
      <h5 className={styles.locationsContainer__heading}>{name}</h5>
      <p className={classNames(styles.locationsContainer__address, 'mt-4 mb-6')}>{address}</p>
      <Link href={{
        pathname: '/location',
        query: { address },
      }}>
        <a className={classNames(styles.locationsContainer__anchor, 'flex items-center')}>
          Deschide pe hartă
          <ExternalLink className="ml-2" />
        </a>
      </Link>
    </div>
  )

  return (
    <div className={classNames(styles.locationsContainer, 'grid grid-cols-1 mt-6 mb-16 sm:grid-cols-2 lg:grid-cols-4 lg:mt-11 lg:mb-0')}>
      {LOCATIONS.map(block)}
    </div>
  )
}

export default Locations
