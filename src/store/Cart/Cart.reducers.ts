import { INITIAL_TOPPINGS } from '../../constants'
import { ACTIONS } from '../../constants/actions'
import { AnyAction, Product } from '../../types'
import { CartState } from '../../types/state'

const addMenuProducts = (state: CartState, payload: Record<string, any>): CartState => {
  const { menuProducts } = payload as { menuProducts: Product[] }

  return ({ ...state, menuProducts })
}

const addProducts = (state: CartState, payload: Record<string, any>): CartState => {
  const { name, count } = payload as { name: string; count: number }

  const {
    products,
    menuProducts,
    price: totalPrice,
    count: totalCount,
  } = state

  const newToppings = [...new Array(count)].map(() => ({ ...INITIAL_TOPPINGS }))

  const currentProductIndex = products.findIndex((product) => product.name === name)
  const { image, price } = menuProducts.find((product) => product.name === name) as Product

  if (currentProductIndex === -1) {
    return ({
      ...state,
      products: [
        ...products,
        {
          name,
          image,
          price,
          allProductsToppings: newToppings,
        },
      ],
      price: price * count,
      count: totalCount + count,
    })
  }

  const { allProductsToppings } = products[currentProductIndex]
  const newProducts = [...products]

  newProducts[currentProductIndex].allProductsToppings = [...allProductsToppings, ...newToppings]

  return ({
    ...state,
    products: newProducts,
    price: totalPrice + price * count,
    count: totalCount + count,
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
