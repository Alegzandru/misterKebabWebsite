import { Dispatch } from 'react'

import { ACTIONS } from '../../constants/actions'
import { Additive, AnyAction } from '../../types'

const useActions = (dispatch: Dispatch<AnyAction>) => ({
  setCurrentProduct: (name: string) => dispatch({ type: ACTIONS.setCurrentProduct, payload: { name } }),
  setCount: (count: number) => dispatch({ type: ACTIONS.setCount, payload: { count } }),
  setAdditive: (additive: Additive[], type: string, index: number) =>
    dispatch({ type: ACTIONS.setAdditive, payload: { additive, type, index } }),
})

export default useActions
