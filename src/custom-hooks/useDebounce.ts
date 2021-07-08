import debounce from 'lodash.debounce'
import { useCallback, useEffect, useRef } from 'react'

const useIsMounted = () => {
  const isMountedRef = useRef(true)

  useEffect(() => () => {
    isMountedRef.current = false
  }, [])

  return () => isMountedRef.current
}

export const useDebounce = (callback: (...args: any[]) => any, delay: number) => {
  const inputsRef = useRef({ callback, delay })
  const isMounted = useIsMounted()

  useEffect(() => {
    inputsRef.current = { callback, delay }
  })

  return useCallback(
    debounce((...args) => {
      if (inputsRef.current.delay === delay && isMounted()) {
        inputsRef.current.callback(...args)
      }
    }, delay),
    [delay, debounce]
  )
}
