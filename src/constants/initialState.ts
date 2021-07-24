import { State } from '../types/state'

export const DEFAULT_STATE: State = {
  modal: {
    show: '',
    product: {
      badges: [],
      image: '',
      name: '',
      nameru: '',
      price: 0,
      weight: 0,
      ingredients: '',
      ingredientsru: '',
      toppings: {
        topping: [],
        without: [],
      },
      subcategory: '',
    },
  },
  cart: {
    products: {},
    menuProducts: [],
    price: 0,
  },
}
