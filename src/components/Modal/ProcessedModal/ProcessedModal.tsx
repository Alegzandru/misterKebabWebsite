import lottie from 'lottie-web'
import { useTranslation } from 'next-i18next'
import { useContext, useEffect, useRef } from 'react'

import { ModalContext } from '../../../store/Modal/Modal.context'
import styles from './ProcessedModal.module.scss'

const ProcessedModal = () => {

  const { t } = useTranslation('common')

  const confettiRef = useRef<HTMLDivElement>(null)
  const doneRef = useRef<HTMLDivElement>(null)

  const {
    state: {
      heading,
      subheading,
    },
    actions: { closeModal },
  } = useContext(ModalContext)

  useEffect(() => {
    (
      async () => {
        const confettiJson = await import('../../../../public/lottie/confetti.json')
        const doneJson = await import('../../../../public/lottie/done.json')

        lottie.loadAnimation({
          container: confettiRef.current as HTMLDivElement,
          animationData: confettiJson,
          renderer: 'svg',
          loop: false,
          autoplay: true,
        })

        lottie.loadAnimation({
          container: doneRef.current as HTMLDivElement,
          animationData: doneJson,
          renderer: 'svg',
          loop: true,
          autoplay: true,
        })

      }
    )()
  }, [])

  return (
    <div className={styles.processedModal_container}>
      <div className={styles.processedModal_confetti} ref={confettiRef} onClick={() => closeModal()}>
      </div>
      <div className={styles.processedModal_done} ref={doneRef}>
      </div>
      <h4 className={styles.processedModal_heading}>
        {t(heading)}
      </h4>
      <div className={styles.processedModal_subheading}>
        {t(subheading)}
      </div>
      <button
        className={styles.processedModal_button}
        onClick={() => closeModal()}
      >
        {t('Navighează mai departe')}
      </button>
    </div>
  )
}

export default ProcessedModal
