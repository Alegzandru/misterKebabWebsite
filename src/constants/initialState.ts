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
    heading: '',
    subheading: '',
  },
  cart: {
    products: [],
    menuProducts: [],
    groupedByToppingsProducts: [],
    price: 0,
    count: 0,
  },
  productToppings: {
    name: '',
    toppings: [{ topping: [], without: [], drinks: [] }],
    count: 1,
  },
}
