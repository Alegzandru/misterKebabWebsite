import classNames from 'classnames'
import { SVGAttributes } from 'react'
import { BADGES } from '../../constants/badges'

type Props = {
  type: 'big' | 'small'
  badges: string[]
  className?: SVGAttributes<SVGSVGElement>['className']
}

const Badges = ({ badges, type, className }: Props) => (
  <div className={classNames(className, 'flex')}>
    {badges.map((badgeName, index) => <div key={index}>{BADGES[badgeName][type]}</div>)}
  </div>
)

export default Badges
