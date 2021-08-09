import classNames from 'classnames'
import React, { useContext, useEffect } from 'react'

import { MODAL_COMPONENTS, MODALS } from '../../constants'
import { ModalContext } from '../../store/Modal/Modal.context'
import CloseButton from '../CloseButton/CloseButton'
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
          { [styles.modalContainer_processed]: show === MODALS.processed },
          'z-100 fixed overflow-y-auto animate-fadeIn mx-auto',
          `${show === MODALS.processed ? 'inset-x-5 inset-y-processedPopup px-8 py-10' :
            'inset-0 py-18 px-3 md:py-24 md:px-5 lg:inset-5 lg:px-12'}`,
          show ? 'block' : 'hidden',
        )}
      >
        {CurrentModal && <CurrentModal />}
        <CloseButton
          className={classNames(
            styles.modalContainer__close,
            show === MODALS.product ? 'md:top-6 md:right-6 lg:top-10 lg:right-10' : '',
            'fixed top-4 right-4'
          )}
          onClick={closeModal}
        />
      </div>
    </>
  )
}

export default Modal
