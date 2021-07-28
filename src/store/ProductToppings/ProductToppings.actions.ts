import { Dispatch } from 'react'

import { ACTIONS } from '../../constants/actions'
import { AnyAction, Topping, Without } from '../../types'

const useActions = (dispatch: Dispatch<AnyAction>) => ({
  setCurrentProduct: (name: string) => dispatch({ type: ACTIONS.setCurrentProduct, payload: { name } }),
  setCount: (count: number) => dispatch({ type: ACTIONS.setCount, payload: { count } }),
  setToppings: (toppings: Topping[] | Without[], type: string, index: number) =>
    dispatch({ type: ACTIONS.setToppings, payload: { toppings, type, index } }),
})

export default useActions
