import { createContext, PropsWithChildren, useReducer } from 'react'
import { DEFAULT_STATE } from '../../constants/initialState'
import useLogger from '../../utils/logger'
import useActions from './ProductToppings.actions'
import productToppingsReducer from './ProductToppings.reducers'

export const ProductToppingsContext = createContext({
  state: DEFAULT_STATE.productToppings,
  actions: {} as ReturnType<typeof useActions>,
})

export const ProductToppingsContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(useLogger(productToppingsReducer), DEFAULT_STATE.productToppings)

  const actions = useActions(dispatch)

  return (
    <ProductToppingsContext.Provider value={{ state, actions }} >
      {children}
    </ProductToppingsContext.Provider>
  )
}
