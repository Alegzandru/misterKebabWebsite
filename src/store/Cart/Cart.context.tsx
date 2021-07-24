import { createContext, PropsWithChildren, useReducer } from 'react'
import { DEFAULT_STATE } from '../../constants/initialState'
import useActions from './Cart.actions'
import cartReducer from './Cart.reducers'

export const CartContext = createContext({
  state: DEFAULT_STATE.cart,
  actions: {} as ReturnType<typeof useActions>,
})

export const CartContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(cartReducer, DEFAULT_STATE.cart)

  const actions = useActions(dispatch)

  return (
    <CartContext.Provider value={{ state, actions }} >
      {children}
    </CartContext.Provider>
  )
}
