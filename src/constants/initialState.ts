import { State } from '../types/state'

export const DEFAULT_STATE: State = {
  modal: {
    show: '',
    product: {
      badges: [],
      image: '',
      name: '',
      price: 0,
      weight: 0,
    },
  },
}
