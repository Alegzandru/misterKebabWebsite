import { Dispatch } from 'react'

import { ACTIONS } from '../../constants/actions'
import { AnyAction, Product } from '../../types'

const useActions = (dispatch: Dispatch<AnyAction>) => ({
  addMenuProducts: (menuProducts: Product[]) => dispatch({ type: ACTIONS.addMenuProducts, payload: { menuProducts } }),
  addProduct: (name: string, count: number) => dispatch({ type: ACTIONS.addProducts, payload: { name, count } }),
})

export default useActions
