import { Product } from '.'
import { MODALS } from '../constants'

export type State = {
  modal: ModalState
}

export type ModalState = {
  show: keyof typeof MODALS | ''
  product: Product
}
