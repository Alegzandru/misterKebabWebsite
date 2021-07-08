import throttle from 'lodash.throttle'
import { useCallback, useEffect, useRef } from 'react'

export const useThrottle = (callback: (...args: any[]) => any, delay: number) => {
  const cbRef = useRef(callback)

  useEffect(() => {
    cbRef.current = callback
  })

  return useCallback(
    throttle((...args) => cbRef.current(...args), delay),
    [delay]
  )
}
