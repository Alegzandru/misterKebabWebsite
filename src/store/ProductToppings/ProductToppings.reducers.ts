import { ACTIONS } from '../../constants/actions'
import { AnyAction, Product, Topping, Toppings } from '../../types'
import { ProductToppingsState } from '../../types/state'

const setCurrentProduct = (state: ProductToppingsState, payload: Record<string, any>): ProductToppingsState => {
  const { name } = payload as Pick<Product, 'name'>

  const { name: currentName } = state

  return name === currentName ? state : ({ ...state, name, toppings: [{ topping: [], without: [] }], count: 1 })
}

const setCount = (state: ProductToppingsState, payload: Record<string, any>): ProductToppingsState => {
  const { count } = payload as Pick<ProductToppingsState, 'count'>

  const { count: previousCount, toppings } = state

  const newToppings: Toppings[] = count > previousCount
    ? [...toppings, { topping: [], without: [] }]
    : toppings.slice(0, -1)

  return ({
    ...state,
    count,
    toppings: newToppings,
  })
}

const setToppings = (state: ProductToppingsState, payload: Record<string, any>): ProductToppingsState => {
  const { toppings, index, type } = payload as { toppings: Topping[] | string[]; type: string; index: number }

  const newToppings = [...state.toppings]

  newToppings[index][type] = toppings

  return ({
    ...state,
    toppings: newToppings,
  })
}

const productToppingsReducer = (state: ProductToppingsState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTIONS.setCurrentProduct:
      return setCurrentProduct(state, payload)

    case ACTIONS.setCount:
      return setCount(state, payload)

    case ACTIONS.setToppings:
      return setToppings(state, payload)

    default:
      return state
  }
}

export default productToppingsReducer
