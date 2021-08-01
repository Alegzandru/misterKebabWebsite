import { useCallback, useRef } from 'react'
import Cookies from 'universal-cookie'

import { removeProperties } from '.'
import { DAY } from '../constants/common'
import { DEFAULT_STATE } from '../constants/initialState'
import { AnyAction } from '../types'
import { State } from '../types/state'

type ReturnType<T, K extends keyof State> = {
  reducer: (state: T, { type, payload }: AnyAction) => T
  initialState: State[K]
}

type Options = {
  exclude: string[]
}

const useCookiePersist = <T, K extends keyof State>(
  reducer: (state: T, { type, payload }: AnyAction) => T,
  key: K,
  options: Partial<Options> = {}
): ReturnType<T, K> => {
  const { exclude }: Options = { exclude: [], ...options }

  const cookiesRef = useRef<Cookies>(new Cookies())

  const updateCookie = useCallback<typeof reducer>((state, action) => {
    const next = reducer(state, action)

    cookiesRef.current.set(key, exclude ? removeProperties(next, exclude) : next, { maxAge: DAY })

    return next
  }, [reducer])

  return ({
    reducer: updateCookie,
    initialState: cookiesRef.current.get(key) || DEFAULT_STATE[key],
  })
}

export default useCookiePersist
