import { Dispatch } from 'react'

import { ACTIONS } from '../../constants/actions'
import { AnyAction, Product, Toppings } from '../../types'

const useActions = (dispatch: Dispatch<AnyAction>) => ({
  addMenuProducts: (menuProducts: Product[]) => dispatch({ type: ACTIONS.addMenuProducts, payload: { menuProducts } }),
  changeCount: (index: number, count: number) => dispatch({ type: ACTIONS.changeCount, payload: { index, count } }),
  removeProduct: (index: number) => dispatch({ type: ACTIONS.removeProduct, payload: { index } }),
  addProducts: (name: string, nameru: string, count: number, toppings: Toppings[] = []) =>
    dispatch({ type: ACTIONS.addProducts, payload: { name, nameru, count, toppings } }),
})

export default useActions
