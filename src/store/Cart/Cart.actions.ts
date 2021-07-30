import { Dispatch } from 'react'

import { ACTIONS } from '../../constants/actions'
import { AnyAction, Product, Toppings } from '../../types'

const useActions = (dispatch: Dispatch<AnyAction>) => ({
  addMenuProducts: (menuProducts: Product[]) => dispatch({ type: ACTIONS.addMenuProducts, payload: { menuProducts } }),
  addProducts: (name: string, nameru: string, count: number, toppings: Toppings[] = []) =>
    dispatch({ type: ACTIONS.addProducts, payload: { name, nameru, count, toppings } }),
})

export default useActions
