import { Modals, Product } from '.'

export type State = {
  modal: ModalState
}

export type ModalState = {
  show: Modals
  product: Product
}
