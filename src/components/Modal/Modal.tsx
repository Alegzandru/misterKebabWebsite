import classNames from 'classnames'
import React, { useContext, useEffect } from 'react'

import { MODAL_COMPONENTS } from '../../constants'
import { ModalContext } from '../../store/Modal/Modal.context'
import Close from '../Svgs/Close/Close'
import styles from './Modal.module.scss'

const Modal = () => {
  const {
    state: { show },
    actions: { closeModal },
  } = useContext(ModalContext)

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'auto'
  }, [show])

  useEffect(() => {
    const onKeyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && show) {
        closeModal()
      }
    }

    document.addEventListener('keydown', onKeyDownHandler)

    return () => document.removeEventListener('keydown', onKeyDownHandler)
  }, [])

  const CurrentModal = MODAL_COMPONENTS[show] as () => JSX.Element

  return (
    <div className={classNames(styles.modalContainer, 'z-100 fixed inset-0 pt-18 pb-8 px-4 overflow-y-auto', show ? 'block' : 'hidden')}>
      {CurrentModal ? <CurrentModal /> : null}
      <button
        className="absolute flex justify-center items-center w-10 h-10 top-4 right-4"
        onClick={closeModal}
      >
        <Close />
      </button>
    </div>
  )
}

export default Modal
