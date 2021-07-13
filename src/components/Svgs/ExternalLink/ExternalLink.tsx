/* eslint-disable max-len */
import { SVGAttributes } from 'react'

type Props = Pick<SVGAttributes<SVGSVGElement>, 'className'>

const ExternalLink = ({ className }: Props) => (
  <svg className={className} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 8.08333V11.5833C10.5 11.8928 10.3771 12.1895 10.1583 12.4083C9.9395 12.6271 9.64275 12.75 9.33333 12.75H2.91667C2.60725 12.75 2.3105 12.6271 2.09171 12.4083C1.87292 12.1895 1.75 11.8928 1.75 11.5833V5.16667C1.75 4.85725 1.87292 4.5605 2.09171 4.34171C2.3105 4.12292 2.60725 4 2.91667 4H6.41667" stroke="white" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.75 2.25H12.25V5.75" stroke="white" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.83325 8.66667L12.2499 2.25" stroke="white" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default ExternalLink
