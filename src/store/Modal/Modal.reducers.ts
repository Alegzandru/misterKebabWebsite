import { MODALS } from '../../constants'
import { ACTIONS } from '../../constants/actions'
import { AnyAction } from '../../types'
import { ModalState } from '../../types/state'

const showProductModal = (state: ModalState, payload: Record<string, any>): ModalState => ({
  ...state,
  show: MODALS.product,
  ...payload,
})

const showProcessedModal = (state: ModalState, payload: Record<string, any>): ModalState => ({
  ...state,
  show: MODALS.processed,
  ...payload,
})

const showCartModal = (state: ModalState): ModalState => ({
  ...state,
  show: MODALS.cart,
})

const closeModal = (state: ModalState): ModalState => ({
  ...state,
  show: '',
})

const modalReducer = (state: ModalState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTIONS.showProductModal:
      return showProductModal(state, payload)

    case ACTIONS.showProcessedModal:
      return showProcessedModal(state, payload)

    case ACTIONS.showCartModal:
      return showCartModal(state)

    case ACTIONS.closeModal:
      return closeModal(state)

    default:
      return state
  }
}

export default modalReducer
