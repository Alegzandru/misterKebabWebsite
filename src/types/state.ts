import { CartProduct, Modals, Product, Toppings } from '.'

export type State = {
  modal: ModalState
  cart: CartState
  productToppings: ProductToppingsState
}

export type ModalState = {
  show: Modals
  product: Product
}

export type CartState = {
  menuProducts: Product[]
  products: (CartProduct & { allProductsToppings: Toppings[] })[]
  groupedByToppingsProducts: (CartProduct & { toppings: Toppings; count: number })[]
  price: number
  count: number
}

export type ProductToppingsState = {
  name: string
  toppings: Toppings[]
  count: number
}
