import { SOCIALS_LINKS } from '../../../constants'
import styles from './Socials.module.scss'
import classNames from 'classnames'

type Props = {
  className?: string
  color?: string
}

const Socials = ({ className, color }: Props) => {
  const anchor = ({ href, svgPath }: typeof SOCIALS_LINKS[0], index: number) => (
    <a key={index} href={href} className="ml-6">
      <svg
        className={classNames(styles.socialAnchor, 'transition-all')}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={color || '#E1E1E1'}
        xmlns="http://www.w3.org/2000/svg"
      >
        {svgPath}
      </svg>
    </a>
  )

  return (
    <div className={className}>{SOCIALS_LINKS.map(anchor)}</div>
  )
}

export default Socials
