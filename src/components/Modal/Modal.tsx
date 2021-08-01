import classNames from 'classnames'
import React, { useContext, useEffect } from 'react'

import { MODALS, MODAL_COMPONENTS } from '../../constants'
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

    const onKeyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && show) {
        closeModal()
        document.removeEventListener('keydown', onKeyDownHandler)
      }
    }

    document.addEventListener('keydown', onKeyDownHandler)

    return () => document.removeEventListener('keydown', onKeyDownHandler)
  }, [show])

  const CurrentModal = MODAL_COMPONENTS[show]

  return (
    <>
      <div
        className={classNames(
          styles.modalContainerBackground,
          'z-90 fixed inset-0 bg-black',
          show ? 'block' : 'hidden'
        )}
        onClick={closeModal}
      />
      <div
        className={classNames(
          styles.modalContainer,
          { [styles.modalContainer_cart]: show === MODALS.cart },
          'z-100 fixed inset-0 overflow-y-auto mx-auto py-18 px-3 md:py-24 md:px-5 lg:inset-5 lg:px-12',
          show ? 'block' : 'hidden',
        )}
      >
        {CurrentModal && <CurrentModal />}
        <button
          aria-label="Close button"
          className={classNames(
            styles.modalContainer__close,
            show === MODALS.product ? 'md:top-6 md:right-6 lg:top-10 lg:right-10' : '',
            'fixed flex justify-center items-center w-10 h-10 top-4 right-4 rounded-full'
          )}
          onClick={closeModal}
        >
          <Close />
        </button>
      </div>
    </>
  )
}

export default Modal
