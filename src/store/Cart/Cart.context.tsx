import { createContext, PropsWithChildren, useReducer } from 'react'

import { DEFAULT_STATE } from '../../constants/initialState'
import useLogger from '../../utils/logger'
import usePersist from '../../utils/persist'
import useActions from './Cart.actions'
import cartReducer from './Cart.reducers'

export const CartContext = createContext({
  state: DEFAULT_STATE.cart,
  actions: {} as ReturnType<typeof useActions>,
})

export const CartContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { reducer, initialState } = usePersist(useLogger(cartReducer), 'cart', { exclude: ['menuProducts'] })

  const [state, dispatch] = useReducer(reducer, initialState)

  const actions = useActions(dispatch)

  return (
    <CartContext.Provider value={{ state, actions }} >
      {children}
    </CartContext.Provider>
  )
}
