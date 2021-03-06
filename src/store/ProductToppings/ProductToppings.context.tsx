import { createContext, PropsWithChildren, useReducer } from 'react'
import { DEFAULT_STATE } from '../../constants/initialState'
import useLogger from '../../utils/logger'
import usePersist from '../../utils/persist'
import useActions from './ProductToppings.actions'
import productToppingsReducer from './ProductToppings.reducers'

export const ProductToppingsContext = createContext({
  state: DEFAULT_STATE.productToppings,
  actions: {} as ReturnType<typeof useActions>,
})

export const ProductToppingsContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const { reducer, initialState } = usePersist(useLogger(productToppingsReducer), 'productToppings')

  const [state, dispatch] = useReducer(reducer, initialState)

  const actions = useActions(dispatch)

  return (
    <ProductToppingsContext.Provider value={{ state, actions }} >
      {children}
    </ProductToppingsContext.Provider>
  )
}
