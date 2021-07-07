/* eslint-disable max-len */
import { SVGAttributes } from 'react'

type Props = Pick<SVGAttributes<SVGSVGElement>, 'className'>

const LiraLogo = ({ className }: Props) => (
  <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.29498 0.00850014C2.18535 0.0228952 2.07463 0.0241469 1.96611 0.045896C1.62292 0.113167 1.29756 0.251246 1.01082 0.451304C0.166722 1.04197 -0.219621 2.21955 0.126631 3.19387C0.204934 3.41528 0.314557 3.63198 0.457223 3.81975C0.762132 4.21952 1.17416 4.52197 1.4858 4.91502C2.06399 5.64573 2.28323 6.69876 2.11316 7.60627C2.01293 8.13998 1.8106 8.6532 1.48674 9.09272C1.37328 9.24986 1.24518 9.39593 1.10416 9.52895C0.910907 9.70685 0.698864 9.85331 0.535996 10.0633C-0.0525242 10.822 -0.184385 11.9289 0.313147 12.7702C0.773408 13.5475 1.68344 14.0955 2.60819 13.9861C3.10932 13.9269 3.57632 13.7602 3.97065 13.4358C4.33084 13.1394 4.59503 12.7456 4.97291 12.4648C5.59416 12.003 6.41462 11.7985 7.18104 11.832C7.8311 11.8605 8.49761 12.0814 9.02443 12.4637C9.42142 12.7517 9.71208 13.1607 10.1028 13.4574C10.7356 13.9377 11.6609 14.0989 12.4116 13.8274C12.72 13.716 13.0125 13.5524 13.2526 13.3267C13.9182 12.7027 14.1766 11.6605 13.8751 10.7982C13.7226 10.3601 13.4613 10.0026 13.1096 9.70482C12.88 9.51017 12.5902 9.36669 12.302 9.2811C11.5317 9.05266 10.6556 9.21601 10.0312 9.72266C9.581 10.088 9.24415 10.5915 8.72876 10.8769C8.46582 11.0226 8.16404 11.1479 7.8701 11.2141C7.54123 11.2881 7.20656 11.352 6.86783 11.3288C5.60074 11.2421 4.50968 10.4236 3.68876 9.5072C3.38307 9.1661 3.11339 8.78275 2.93894 8.35732C2.47914 7.23528 2.63262 5.95804 3.314 4.96196C3.56457 4.59458 3.92476 4.34861 4.21918 4.02315C4.51109 3.70067 4.70011 3.32484 4.77591 2.89659C4.9975 1.64296 4.15873 0.310953 2.89007 0.0574746C2.69933 0.0194529 2.48964 -0.0170041 2.29498 0.00850014Z" fill="url(#paint0_linear)" />
    <defs>
      <linearGradient id="paint0_linear" x1="7" y1="0" x2="7" y2="14" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFB199" />
        <stop offset="1" stopColor="#FF0844" />
      </linearGradient>
    </defs>
  </svg>
)

export default LiraLogo