import { clone } from 'ramda'
import { INITIAL_TOPPINGS } from '../../constants'
import { ACTIONS } from '../../constants/actions'
import { Additive, AnyAction, Product, Toppings } from '../../types'
import { ProductToppingsState } from '../../types/state'

const setCurrentProduct = (state: ProductToppingsState, payload: Record<string, any>): ProductToppingsState => {
  const { name } = payload as Pick<Product, 'name'>

  const { name: currentName } = state

  return name === currentName ? state : ({ ...state, name, toppings: [clone(INITIAL_TOPPINGS)], count: 1 })
}

const setCount = (state: ProductToppingsState, payload: Record<string, any>): ProductToppingsState => {
  const { count } = payload as Pick<ProductToppingsState, 'count'>

  const { count: previousCount, toppings } = state

  const newToppings: Toppings[] = count > previousCount
    ? [...toppings, clone(INITIAL_TOPPINGS)]
    : toppings.slice(0, -1)

  return ({
    ...state,
    count,
    toppings: newToppings,
  })
}

const setAdditive = (state: ProductToppingsState, payload: Record<string, any>): ProductToppingsState => {
  const { additive, index, type } = payload as { additive: Additive[]; type: string; index: number }

  const newToppings = clone(state.toppings)

  newToppings[index][type] = additive

  return ({
    ...state,
    toppings: newToppings,
  })
}

const removeToppings = (state: ProductToppingsState, payload: Record<string, any>): ProductToppingsState => {
  const { index } = payload as { index: number }

  const { toppings, count } = state

  const newToppings = clone(toppings)

  newToppings.splice(index, 1)

  return ({
    ...state,
    toppings: newToppings,
    count: count - 1,
  })
}

const productToppingsReducer = (state: ProductToppingsState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTIONS.setCurrentProduct:
      return setCurrentProduct(state, payload)

    case ACTIONS.setCount:
      return setCount(state, payload)

    case ACTIONS.setAdditive:
      return setAdditive(state, payload)

    case ACTIONS.removeToppings:
      return removeToppings(state, payload)

    default:
      return state
  }
}

export default productToppingsReducer
