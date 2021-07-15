import { Dispatch } from 'react'

import { ACTIONS } from '../../constants/actions'
import { AnyAction, Product } from '../../types'

const useActions = (dispatch: Dispatch<AnyAction>) => ({
  showProductModal: (product: Product) => dispatch({ type: ACTIONS.showProductModal, payload: { product } }),
  closeModal: () => dispatch({ type: ACTIONS.closeModal, payload: {} }),
})

export default useActions
