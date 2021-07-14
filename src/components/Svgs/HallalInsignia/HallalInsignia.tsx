/* eslint-disable max-len */
import { SVGAttributes } from 'react'

type Props = Pick<SVGAttributes<SVGSVGElement>, 'className' | 'width' | 'height'>

const HallalInsignia = (props: Props) => {
  const { width, height, className } = { width: '86', height: '95', ...props }

  return (
    <svg className={className} width={width} height={height} viewBox="0 0 86 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M47.0509 60.9433L31.1771 95.0001L25.849 87.5647L16.9746 88.5034L32.8477 54.4463L47.0509 60.9433Z" fill="#3FA535" />
      <path d="M38.9512 60.9433L54.8236 95.0001L60.1518 87.5647L69.0265 88.5034L53.153 54.4463L38.9512 60.9433Z" fill="#3FA535" />
      <path d="M80.0576 42.85L83 38.6802L79.2489 35.2188L81.2523 30.5332L76.8552 27.9188L77.8312 22.9233L72.9841 21.2714L72.8896 16.1842L67.8006 15.567L66.6409 10.6102L61.5324 11.0546L59.3594 6.44475L54.4562 7.93237L51.3624 3.8701L46.8782 6.3351L42.9997 3L39.1307 6.3351L34.637 3.8701L31.5527 7.92965L26.6402 6.44475L24.4751 11.0512L19.3584 10.6102L18.2063 15.5602L13.1094 16.1842L13.022 21.2639L8.1671 22.9233L9.14823 27.909L4.74738 30.5332L6.75213 35.2079L3 38.6802L5.94646 42.8446L3 47.0101L6.75453 50.4772L4.74739 55.1581L9.1496 57.7755L8.16711 62.7679L13.022 64.4222L13.1094 69.5074L18.2063 70.1239L19.3584 75.081L24.4734 74.6356L26.6402 79.2455L31.5493 77.7572L34.637 81.8201L39.1266 79.3518L42.9997 82.6909L46.8714 79.3518L51.3624 81.8201L54.4504 77.7572L59.3594 79.2455L61.5262 74.6356L66.6409 75.081L67.7937 70.1239L72.8896 69.5074L72.977 64.4222L77.8312 62.7679L76.8507 57.7755L81.2523 55.1581L79.2444 50.4772L83 47.0101L80.0576 42.85Z" fill="#3FA535" />
      <path d="M80.0576 42.85L83 38.6802L79.2489 35.2188L81.2523 30.5332L76.8552 27.9188L77.8312 22.9233L72.9841 21.2714L72.8896 16.1842L67.8006 15.567L66.6409 10.6102L61.5324 11.0546L59.3594 6.44475L54.4562 7.93237L51.3624 3.8701L46.8782 6.3351L42.9997 3L39.1307 6.3351L34.637 3.8701L31.5527 7.92965L26.6402 6.44475L24.4751 11.0512L19.3584 10.6102L18.2063 15.5602L13.1094 16.1842L13.022 21.2639L8.1671 22.9233L9.14823 27.909L4.74738 30.5332L6.75213 35.2079L3 38.6802L5.94646 42.8446L3 47.0101L6.75453 50.4772L4.74739 55.1581L9.1496 57.7755L8.1671 62.7679L13.022 64.4222L13.1094 69.5074L18.2063 70.1239L19.3584 75.081L24.4734 74.6356L26.6402 79.2455L31.5493 77.7572L34.637 81.8201L39.1266 79.3518L42.9997 82.6909L46.8714 79.3518L51.3624 81.8201L54.4504 77.7572L59.3594 79.2455L61.5263 74.6356L66.6409 75.081L67.7937 70.1239L72.8896 69.5074L72.977 64.4222L77.8312 62.7679L76.8507 57.7755L81.2523 55.1581L79.2444 50.4772L83 47.0101L80.0576 42.85Z" stroke="white" strokeWidth="3.16818" />
      <path d="M52.5099 36.4185C56.2504 36.045 58.1986 34.6494 58.835 34.2224C58.835 34.2224 57.2713 33.2976 56.4924 32.9557C55.6812 32.6 54.8132 32.4319 53.9403 32.3715C53.4779 32.3413 53.0141 32.4057 52.5778 32.5606C51.7262 32.8695 50.0576 34.2074 49.9538 34.3113C49.9929 34.1609 51.0288 31.8168 51.7502 30.9351C52.4092 30.1299 53.1439 29.4129 54.2196 29.1895C54.8618 29.0557 55.5109 29.1077 56.1442 29.2482C57.7497 29.6054 59.1198 30.4636 60.5032 31.2919C61.497 31.8874 62.4812 32.5212 63.6433 32.7517C64.426 32.9072 64.669 33.0118 65.4596 33.1139C65.8417 33.1628 66.8968 33.2535 66.8968 33.2535C66.8968 33.2535 66.3557 34.0122 66.1532 34.2936C65.7104 34.9081 64.7824 36.3306 64.7824 36.3306C64.7824 36.3306 63.4116 36.2511 62.6536 36.2725C59.1198 36.227 57.1363 39.0811 50.9442 38.4764C48.7763 38.1916 48.0018 36.3007 47.262 34.7258C46.8257 33.797 46.6383 32.8081 46.5269 31.8042C46.4272 30.9042 46.3668 29.9995 46.3106 29.0958C46.2764 28.5608 46.2726 28.0234 46.2788 27.4873C46.2911 26.3976 46.3346 24.1173 46.3309 24.0663C46.3079 24.1173 45.9289 25.6354 45.7205 26.331C45.2846 27.7861 44.8432 29.2401 44.359 30.6795C44.0043 31.7346 43.552 32.7534 42.9475 33.7009C42.2213 34.8372 41.2546 35.7341 40.1374 36.4735C38.3496 37.6556 36.3678 38.2921 34.2345 38.5063C32.9525 38.6346 31.6801 38.5559 30.406 38.4408C30.2145 38.4182 30.0245 38.385 29.8368 38.3413C29.7953 38.3328 29.7604 38.2921 29.7227 38.2663C29.7549 38.2323 29.7813 38.1729 29.8203 38.1644C30.0067 38.1162 30.1993 38.0891 30.3854 38.0395C32.5533 37.4607 34.6197 36.6476 36.5576 35.509C38.0693 34.6206 39.4613 33.5868 40.6645 32.3216C42.05 30.8642 43.1771 29.2268 43.8302 27.3176C44.2072 26.219 44.492 25.0906 44.8042 23.9713C45.0269 23.1715 45.2229 22.3642 45.4354 21.5609C45.6674 20.6851 45.8946 19.8078 46.1431 18.9364C46.2832 18.4452 46.4604 17.9641 46.6228 17.479C46.6736 17.3279 46.7226 17.2773 46.8939 17.4036C47.2236 17.6463 47.4114 17.9549 47.5299 18.3358C47.7698 19.1017 45.6517 37.1025 52.5096 36.4205L52.5099 36.4185Z" fill="white" />
      <path d="M31.7592 30.1469C31.7329 29.252 31.725 28.1385 31.6605 27.0284C31.592 25.8701 31.482 24.7131 31.3593 23.5589C31.2541 22.5744 31.1061 21.5919 30.9755 20.6088C30.8532 19.6874 30.7356 18.7654 30.6033 17.8454C30.5173 17.2526 30.3929 16.6653 30.3145 16.0716C30.2116 15.4204 31.9251 13.3312 31.9834 13.2715C32.5491 15.0708 34.1574 16.446 33.888 17.0662C33.0659 18.4459 32.9549 19.9715 32.9892 21.5203C33.0094 22.4267 33.0711 23.3321 33.1136 24.2362C33.1581 25.1915 33.3425 31.0479 33.3486 31.4305C33.3706 32.7718 33.1122 34.124 32.2664 35.1516C31.4673 36.1225 30.3408 36.7838 29.2734 37.4601C28.0153 38.2592 26.6542 38.7542 25.1408 38.6537C23.5271 38.5464 22.0066 38.137 20.7448 37.0581C20.0835 36.4966 19.5978 35.7597 19.3449 34.934C18.8552 33.3812 19.1444 31.9065 19.8089 30.4671C20.2811 29.4428 21.8993 27.5709 21.9336 27.5699C21.9336 27.6038 21.0251 29.4554 20.6009 31.5347C20.5076 32.1078 20.5824 32.6852 20.7657 33.2403C20.937 33.7645 21.2993 34.1484 21.7595 34.4316C22.6204 34.958 23.588 35.2897 24.5932 35.4032C24.9633 35.4473 25.3345 35.5128 25.7056 35.5152C27.3193 35.5267 28.8611 35.2209 30.2737 34.4115C30.8562 34.0785 31.2428 33.6195 31.409 32.9382C31.6146 32.0874 31.6958 31.2306 31.7606 30.1469L31.7592 30.1469Z" fill="white" />
      <path d="M41.0228 31.0027C40.9927 30.9524 40.4091 29.1643 40.0976 28.3384C39.7946 27.5318 39.3735 26.7747 38.8101 26.1168C38.3255 25.5509 37.6792 25.1907 36.9938 24.8997C36.4362 24.6621 35.8773 24.4268 35.3321 24.1641C34.8273 23.921 34.3688 23.6073 34.145 23.0648C34.0478 22.8432 33.978 22.6108 33.937 22.3726C33.789 21.365 33.8736 20.3534 33.9199 19.3434C33.9349 19.011 34.0484 18.9615 34.3801 19.1058C35.4604 19.5692 36.4659 20.1877 37.3643 20.9414C38.3334 21.7602 39.1877 22.6802 39.8316 23.7777C40.6489 25.1633 41.1198 26.7223 41.2051 28.3248C41.2295 28.7461 41.052 30.9521 41.0204 31.0027L41.0228 31.0027Z" fill="white" />
      <path d="M20.7664 42.7607L20.7664 48.0326L15.4074 48.0326L15.4074 42.7607L12.7402 42.7607L12.7402 55.9833L15.4074 55.9833L15.4074 50.6745L20.7664 50.6745L20.7664 55.9833L23.4332 55.9833L23.4332 42.7607L20.7664 42.7607ZM29.6253 52.1743L31.4968 48.2169L33.3682 52.1736L29.6253 52.1743ZM31.4968 42.7607L24.8044 55.9833L27.9324 55.9833L28.4413 54.878L34.5272 54.878L35.0238 55.9833L38.1518 55.9833L31.4968 42.7607ZM39.523 42.7607L39.523 55.9833L48.3466 55.9833L48.3466 53.3537L42.1898 53.3537L42.1898 42.7618L39.523 42.7607ZM54.5387 52.1743L56.4101 48.2169L58.2802 52.1743L54.5387 52.1743ZM56.4101 42.7607L49.7173 55.9833L52.8458 55.9833L53.3547 54.878L59.4405 54.878L59.9371 55.9833L63.0652 55.9833L56.4101 42.7607ZM64.436 42.7607L64.436 55.9833L73.2599 55.9833L73.2599 53.3537L67.1031 53.3537L67.1031 42.7618L64.436 42.7607Z" fill="white" />
      <path d="M32.1337 64.2676C31.8824 64.6721 31.5228 64.8742 31.0549 64.8739C30.719 64.8709 30.3978 64.7372 30.1606 64.5016C29.9234 64.2661 29.7891 63.9475 29.7869 63.6148C29.784 63.4514 29.8157 63.2891 29.8799 63.1386C29.9441 62.988 30.0394 62.8525 30.1598 62.7406C30.2754 62.6218 30.4144 62.5277 30.5682 62.4641C30.7219 62.4006 30.8872 62.369 31.0538 62.3713C31.522 62.3713 31.8816 62.5695 32.1326 62.966L32.7327 62.3713C32.3091 61.8168 31.7494 61.5396 31.0535 61.5399C30.776 61.5359 30.5006 61.5875 30.2438 61.6917C29.987 61.7958 29.7541 61.9503 29.559 62.1458C29.1512 62.5503 28.9473 63.0399 28.9473 63.6148C28.9453 63.8894 28.9985 64.1617 29.1037 64.4157C29.2089 64.6698 29.364 64.9006 29.5601 65.0947C29.7562 65.2888 29.9893 65.4423 30.2459 65.5464C30.5025 65.6504 30.7773 65.7028 31.0545 65.7006C31.7502 65.7006 32.3099 65.4247 32.7337 64.8729L32.1337 64.2676ZM33.1655 61.5399L33.1655 65.7006L36.1127 65.7006L36.1127 64.8729L34.0044 64.8729L34.0044 64.0296L35.7696 64.0296L35.7696 63.1979L34.0044 63.1979L34.0044 62.3702L36.1109 62.3702L36.1109 61.5388L33.1655 61.5399ZM37.3806 64.0307L37.3806 62.3597L38.2281 62.3597C38.3752 62.3627 38.5194 62.4014 38.6479 62.4724C38.9275 62.6082 39.0673 62.8504 39.0673 63.1989C39.0673 63.5436 38.9275 63.7871 38.6479 63.9295C38.5174 63.994 38.3739 64.0288 38.2281 64.0313L37.3806 64.0307ZM39.0673 61.7419C38.809 61.6048 38.5211 61.5315 38.2281 61.5283L36.5414 61.5283L36.5414 65.7006L37.3806 65.7006L37.3806 64.8614L38.2281 64.8614C38.275 64.8614 38.3391 64.8573 38.4203 64.8495L38.738 65.7006L39.6324 65.7006L39.2164 64.5698C39.6765 64.2771 39.9067 63.8198 39.9069 63.1979C39.9069 62.5035 39.6271 62.0179 39.0673 61.7408L39.0673 61.7419ZM40.1814 61.5382L40.1814 62.3658L41.4367 62.3658L41.4367 65.7006L42.2838 65.7006L42.2838 62.3665L43.5391 62.3665L43.5391 61.5388L40.1814 61.5382ZM43.9706 61.5382L43.9706 65.7006L44.8102 65.7006L44.8102 61.5399L43.9706 61.5382ZM45.2416 61.5382L45.2416 65.7006L46.0812 65.7006L46.0812 64.0296L47.8464 64.0296L47.8464 63.1979L46.0812 63.1979L46.0812 62.3702L48.1877 62.3702L48.1877 61.5388L45.2416 61.5382ZM48.6188 61.5382L48.6188 65.7006L49.4584 65.7006L49.4584 61.5399L48.6188 61.5382ZM49.8899 61.5382L49.8899 65.7006L52.837 65.7006L52.837 64.8729L50.7305 64.8729L50.7305 64.0296L52.4957 64.0296L52.4957 63.1979L50.7305 63.1979L50.7305 62.3702L52.837 62.3702L52.837 61.5388L49.8899 61.5382ZM54.105 64.8722L54.105 62.3696L54.9521 62.3696C55.1694 62.3729 55.3829 62.4261 55.5758 62.525C55.9994 62.7348 56.2112 63.097 56.2112 63.6114C56.2112 64.1349 55.9994 64.5015 55.5758 64.7113C55.3836 64.8126 55.1698 64.8672 54.9521 64.8705L54.105 64.8722ZM53.2654 61.5382L53.2654 65.7006L54.9521 65.7006C55.3154 65.6969 55.6728 65.609 55.9956 65.4439C56.6991 65.0918 57.0508 64.4817 57.0508 63.6138C57.0508 62.7458 56.7 62.1401 55.9984 61.7965C55.6754 61.6317 55.3181 61.544 54.9549 61.5402L53.2654 61.5382Z" fill="white" />
      <path d="M34.9219 67.3529L34.9219 71.5147L35.7611 71.5147L35.7611 69.8424L37.5263 69.8424L37.5263 69.0106L35.7611 69.0106L35.7611 68.183L37.8677 68.183L37.8677 67.3516L34.9219 67.3529ZM38.868 69.4279C38.8648 69.2642 38.8963 69.1017 38.9605 68.9509C39.0246 68.8001 39.12 68.6643 39.2405 68.5523C39.3562 68.4335 39.4953 68.3394 39.6491 68.2759C39.8029 68.2124 39.9683 68.1807 40.1349 68.183C40.4665 68.1883 40.7831 68.3209 41.0179 68.5528C41.2528 68.7848 41.3876 69.098 41.3939 69.4265C41.3961 69.5919 41.3637 69.756 41.2988 69.9085C41.234 70.061 41.138 70.1985 41.017 70.3125C40.9047 70.4328 40.768 70.5282 40.616 70.5925C40.4639 70.6568 40.2999 70.6887 40.1346 70.686C39.7986 70.6831 39.4773 70.5495 39.2401 70.3139C39.0028 70.0782 38.8687 69.7596 38.8666 69.4268L38.868 69.4279ZM38.0284 69.4279C38.0262 69.7025 38.0793 69.9748 38.1844 70.2289C38.2895 70.4831 38.4445 70.714 38.6406 70.9082C38.8366 71.1024 39.0697 71.256 39.3262 71.3601C39.5828 71.4643 39.8577 71.5168 40.1349 71.5147C40.7177 71.5147 41.2119 71.3126 41.6174 70.9083C41.815 70.7153 41.9711 70.4846 42.0763 70.2301C42.1815 69.9757 42.2336 69.7028 42.2294 69.4279C42.2294 68.8528 42.0254 68.3631 41.6174 67.9589C41.2094 67.5547 40.7152 67.3527 40.1349 67.3529C39.8574 67.3489 39.582 67.4005 39.3252 67.5047C39.0684 67.6088 38.8354 67.7633 38.6404 67.9589C38.2322 68.3633 38.0281 68.853 38.0284 69.4279ZM43.5005 69.4279C43.4975 69.2644 43.5291 69.1022 43.5932 68.9517C43.6574 68.8011 43.7527 68.6655 43.873 68.5537C43.9887 68.4349 44.1278 68.3408 44.2816 68.2773C44.4354 68.2137 44.6008 68.1821 44.7674 68.1843C45.099 68.1896 45.4156 68.3222 45.6504 68.5542C45.8853 68.7862 46.0201 69.0994 46.0265 69.4279C46.0286 69.5933 45.9962 69.7574 45.9313 69.9099C45.8665 70.0623 45.7705 70.1999 45.6495 70.3139C45.5372 70.4341 45.4005 70.5295 45.2485 70.5939C45.0964 70.6582 44.9324 70.6901 44.7671 70.6873C44.4311 70.6845 44.1098 70.5508 43.8726 70.3152C43.6353 70.0796 43.5012 69.761 43.4991 69.4282L43.5005 69.4279ZM42.6609 69.4279C42.6587 69.7025 42.7118 69.9748 42.8169 70.2289C42.922 70.4831 43.0771 70.714 43.2731 70.9082C43.4691 71.1024 43.7022 71.256 43.9587 71.3601C44.2153 71.4643 44.4902 71.5168 44.7674 71.5147C45.3504 71.5147 45.8447 71.3126 46.2502 70.9083C46.4477 70.7152 46.6036 70.4844 46.7087 70.23C46.8139 69.9756 46.866 69.7027 46.8619 69.4279C46.8619 68.8528 46.658 68.3631 46.2502 67.9589C45.8424 67.5547 45.3482 67.3527 44.7674 67.3529C44.4899 67.3489 44.2145 67.4005 43.9577 67.5047C43.7009 67.6088 43.4679 67.7633 43.2729 67.9589C42.8649 68.3633 42.6609 68.853 42.6609 69.4279ZM48.133 70.687L48.133 68.1843L48.9801 68.1843C49.1974 68.1876 49.4109 68.2408 49.6038 68.3398C50.0278 68.5496 50.2397 68.9117 50.2395 69.4262C50.2395 69.9496 50.0276 70.3162 49.6038 70.5257C49.4116 70.6272 49.1978 70.6818 48.9801 70.6853L48.133 70.687ZM47.2934 67.3529L47.2934 71.5147L48.9801 71.5147C49.3434 71.5109 49.7008 71.423 50.0236 71.258C50.7273 70.9059 51.079 70.2958 51.0788 69.4279C51.0785 68.5599 50.7268 67.9537 50.0236 67.6092C49.7007 67.4443 49.3434 67.3565 48.9801 67.3529L47.2934 67.3529Z" fill="white" />
    </svg>
  )
}

export default HallalInsignia
