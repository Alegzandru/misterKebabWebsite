import { CartProduct, Modals, Product } from '.'

export type State = {
  modal: ModalState
  cart: CartState
}

export type ModalState = {
  show: Modals
  product: Product
}

export type CartState = {
  menuProducts: Product[]
  products: Record<string, CartProduct>
  price: number
}
