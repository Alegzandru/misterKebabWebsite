import { ACTIONS } from '../../constants/actions'
import { AnyAction, Product } from '../../types'
import { CartState } from '../../types/state'

const addMenuProducts = (state: CartState, payload: Record<string, any>): CartState => {
  const { menuProducts } = payload as { menuProducts: Product[] }

  return ({ ...state, menuProducts })
}

const addProducts = (state: CartState, payload: Record<string, any>): CartState => {
  const { name, count } = payload as { name: string; count: number }

  // eslint-disable-next-line no-console
  console.log(name, count)

  // const { products, menuProducts } = state
  // const currentProduct = products[name]

  // products: {
  //   ...products,
  //   [name]: currentProduct ? {
  //     // add product
  //   } : {
  //     // add product with names and other fields
  //   }
  // },
  return ({
    ...state,
  })
}

const cartReducer = (state: CartState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTIONS.addMenuProducts:
      return addMenuProducts(state, payload)

    case ACTIONS.addProducts:
      return addProducts(state, payload)

    default:
      return state
  }
}

export default cartReducer
