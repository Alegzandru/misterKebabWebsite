import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import { useTranslation } from 'next-i18next'

import styles from './FormBlock.module.scss'

type Props = PropsWithChildren<{
  heading: string
}>

const FormBlock = ({ heading, children }: Props) => {
  const { t } = useTranslation('cart')

  return(
    <div className="mt-14">
      <h2 className={classNames(styles.formBlockContainer__heading, 'font-bold mb-6')}>{t(heading)}</h2>
      {children}
    </div>
  )
}

export default FormBlock
