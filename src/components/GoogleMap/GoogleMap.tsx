import { Loader } from '@googlemaps/js-api-loader'
import classNames from 'classnames'
import pointer from '../../../public/images/pointer.png'
import { useEffect, useRef } from 'react'

import styles from './GoogleMap.module.scss'

const GoogleMap = () => {
  const googleMapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    (async () => {
      const loader = new Loader({
        apiKey: 'AIzaSyCamdMqHPXVLEDFdMPuypOCZUtFGMz1DJo',
        version: 'weekly',
      })

      await loader.load()

      const google = window.google

      const map = new google.maps.Map(googleMapRef.current as Element, {
        center: { lat: 47.025, lng: 28.857 },
        zoom: 12.3,
        streetViewControl: false,
      })

      const getPosition = (lat: number, lng: number): google.maps.LatLng => new google.maps.LatLng(lat, lng)

      const locations = [
        getPosition(46.98538, 28.84468),
        getPosition(47.04887, 28.86357),
        getPosition(46.99737, 28.83526),
        getPosition(46.995146, 28.825689),
      ]

      locations.forEach((position) => {
        new google.maps.Marker({
          position,
          icon: pointer.src,
          map,
        })
      })
    })()
  }, [])

  return (
    <div className={classNames(styles.mapContainer, 'w-full max-w-screen')}>
      <div id="map" ref={googleMapRef} className="h-full" />
    </div>
  )
}

export default GoogleMap
