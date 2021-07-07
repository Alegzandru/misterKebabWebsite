import { SVGAttributes } from 'react'

type Props = Pick<SVGAttributes<SVGSVGElement>, 'className'>

const ArrowUp = ({ className }: Props) => (
  <svg className={className} width="20" height="14" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.25 8.125L8 1.875L1.75 8.125" stroke="#cacaca" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default ArrowUp
