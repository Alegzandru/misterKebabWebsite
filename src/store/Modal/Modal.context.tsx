import { createContext, PropsWithChildren, useReducer } from 'react'
import { DEFAULT_STATE } from '../../constants/initialState'
import useActions from './Modal.actions'
import modalReducer from './Modal.reducers'

export const ModalContext = createContext({
  state: DEFAULT_STATE.modal,
  actions: {} as ReturnType<typeof useActions>,
})

export const ModalContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(modalReducer, DEFAULT_STATE.modal)

  const actions = useActions(dispatch)

  return (
    <ModalContext.Provider value={{ state, actions }} >
      {children}
    </ModalContext.Provider>
  )
}
