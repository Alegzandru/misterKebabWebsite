import { clone, equals } from 'ramda'

import { INITIAL_TOPPINGS } from '../../constants'
import { ACTIONS } from '../../constants/actions'
import { AnyAction, Product, Toppings } from '../../types'
import { CartState } from '../../types/state'
import { productToppingsPrice } from '../../utils/products'

const addMenuProducts = (state: CartState, payload: Record<string, any>): CartState => {
  const { menuProducts } = payload as { menuProducts: Product[] }

  return ({ ...state, menuProducts })
}

const groupByToppings = (state: CartState): CartState => {
  const { products } = state

  const groupedByToppingsProducts = products.reduce<CartState['groupedByToppingsProducts']>((accumulator, { allProductsToppings, ...product }) => {
    const [firstProductToppings, ...restToppings] = allProductsToppings

    return [...accumulator, ...restToppings.reduce((acc, currentTopping) => {
      const sameToppingIndex = acc.findIndex(({ toppings }) => equals(toppings, currentTopping))

      if (sameToppingIndex === -1) {
        const price = productToppingsPrice(currentTopping) + product.price

        return [...acc, { ...product, toppings: currentTopping, price, count: 1 }]
      }

      const { count, price: oldPrice } = acc[sameToppingIndex]

      acc[sameToppingIndex].count = count + 1
      acc[sameToppingIndex].price = oldPrice + oldPrice / count

      return acc
    }, [{
      ...product,
      toppings: firstProductToppings,
      price: productToppingsPrice(firstProductToppings) + product.price,
      count: 1,
    }])]
  }, [])

  return { ...state, groupedByToppingsProducts }
}

const addProducts = (state: CartState, payload: Record<string, any>): CartState => {
  const { name, count, toppings } = payload as { name: string; count: number; toppings: Toppings[] }

  const {
    products,
    menuProducts,
    price: totalPrice,
    count: totalCount,
  } = state

  const newToppings = toppings.length ? toppings : [...new Array(count)].map(() => (clone(INITIAL_TOPPINGS)))

  const newToppingsPrice = newToppings.reduce(
    (accumulator, toppingsToCalculate) => accumulator + productToppingsPrice(toppingsToCalculate),
    0
  )

  const currentProductIndex = products.findIndex((product) => product.name === name)
  const { image, price } = menuProducts.find((product) => product.name === name) as Product

  const commonData = {
    price: totalPrice + price * count + newToppingsPrice,
    count: totalCount + count,
  }

  if (currentProductIndex === -1) {
    return ({
      ...state,
      ...commonData,
      products: [
        ...products,
        {
          name,
          image,
          price,
          allProductsToppings: newToppings.sort((first, second) => first.topping.length - second.topping.length),
        },
      ],
    })
  }

  const { allProductsToppings } = products[currentProductIndex]
  const newProducts = [...products]

  newProducts[currentProductIndex].allProductsToppings = [...allProductsToppings, ...newToppings]
    .sort((first, second) => first.topping.length - second.topping.length)

  return ({
    ...state,
    ...commonData,
    products: newProducts,
  })
}

const cartReducer = (state: CartState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTIONS.addMenuProducts:
      return addMenuProducts(state, payload)

    case ACTIONS.addProducts:
      return groupByToppings(addProducts(state, payload))

    default:
      return state
  }
}

export default cartReducer
