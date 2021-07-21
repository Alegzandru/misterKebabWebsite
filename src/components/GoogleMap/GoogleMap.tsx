import { Loader } from '@googlemaps/js-api-loader'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

import pointer from '../../../public/images/pointer.png'
import { LOCATIONS } from '../../constants'
import styles from './GoogleMap.module.scss'

const GoogleMap = () => {
  const googleMapRef = useRef<HTMLDivElement>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const mapRef = useRef<google.maps.Map>()

  const router = useRouter()

  useEffect(() => {
    (async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyCamdMqHPXVLEDFdMPuypOCZUtFGMz1DJo',
        version: 'weekly',
      })

      await loader.load()

      const google = window.google

      mapRef.current = new google.maps.Map(googleMapRef.current as Element, {
        center: { lat: 47.025, lng: 28.857 },
        zoom: 12.3,
        streetViewControl: false,
      })

      const locations = LOCATIONS.map(({ position }) => new google.maps.LatLng(position))

      locations.forEach((position) => {
        const marker = new google.maps.Marker({
          position,
          icon: pointer.src,
          map: mapRef.current,
        })

        marker.addListener('click', () => {
          mapRef.current?.setZoom(16)
          mapRef.current?.panTo(marker.getPosition() as google.maps.LatLng)
        })
      })
    })()
  }, [])

  useEffect(() => {
    const position = LOCATIONS.find(({ address }) => address === router.query.address)?.position

    if (position) {
      mapContainerRef.current?.scrollIntoView(true)

      mapRef.current?.setZoom(12)

      setTimeout(() => {
        mapRef.current?.panTo(position)
        mapRef.current?.setZoom(16)
      }, 500)
    }
  }, [router.query])

  return (
    <div ref={mapContainerRef} className={classNames(styles.mapContainer, 'w-full pt-16 max-w-screen')}>
      <div id="map" ref={googleMapRef} className="h-full" />
    </div>
  )
}

export default GoogleMap
