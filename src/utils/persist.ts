import { useCallback } from 'react'

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

const usePersist = <T, K extends keyof State>(
  reducer: (state: T, { type, payload }: AnyAction) => T,
  key: K,
  options: Partial<Options> = {}
): ReturnType<T, K> => {
  const { exclude }: Options = { exclude: [], ...options }

  const updateCookie = useCallback<typeof reducer>((state, action) => {
    const next = reducer(state, action)

    const objectToSave = { ...next, timestamp: Date.now() }

    localStorage.setItem(key, JSON.stringify(exclude ? removeProperties(objectToSave, exclude) : objectToSave))

    return next
  }, [reducer])

  const { timestamp, ...data } = JSON.parse(localStorage.getItem(key) || 'null') || {}

  const isRelatable = timestamp && Date.now() - timestamp < DAY

  const initialState = isRelatable ? data : DEFAULT_STATE[key]

  return ({ reducer: updateCookie, initialState })
}

export default usePersist
