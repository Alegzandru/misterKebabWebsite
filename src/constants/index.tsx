/* eslint-disable max-len */
import CartModal from '../components/Modal/CartModal/CartModal'
import ProductModal from '../components/Modal/ProductModal/ProductModal'
import { Toppings } from '../types'

export const INITIAL_TOPPINGS: Toppings = { topping: [], without: [] }

export const SOCIALS_LINKS = [
  {
    href: '#facebook',
    svgPath: <path d="M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8022 4.62609 22.6116 10.1836 23.4844V15.3605H7.23047V12H10.1836V9.43875C10.1836 6.52547 11.918 4.91625 14.5744 4.91625C15.8466 4.91625 17.1769 5.14313 17.1769 5.14313V8.0025H15.7106C14.2669 8.0025 13.8164 8.89875 13.8164 9.81797V12H17.0405L16.5248 15.3605H13.8164V23.4844C19.3739 22.6116 23.625 17.8022 23.625 12Z" />,
  }, {
    href: '#instagram',
    svgPath: <path d="M12 0C8.7435 0 8.334 0.015 7.0545 0.072C5.775 0.132 4.9035 0.333 4.14 0.63C3.33914 0.931229 2.61374 1.40374 2.0145 2.0145C1.40411 2.61404 0.931661 3.33936 0.63 4.14C0.333 4.902 0.1305 5.775 0.072 7.05C0.015 8.3325 0 8.7405 0 12.0015C0 15.2595 0.015 15.6675 0.072 16.947C0.132 18.225 0.333 19.0965 0.63 19.86C0.9375 20.649 1.347 21.318 2.0145 21.9855C2.6805 22.653 3.3495 23.064 4.1385 23.37C4.9035 23.667 5.7735 23.8695 7.0515 23.928C8.3325 23.985 8.7405 24 12 24C15.2595 24 15.666 23.985 16.947 23.928C18.2235 23.868 19.098 23.667 19.8615 23.37C20.6618 23.0686 21.3867 22.5961 21.9855 21.9855C22.653 21.318 23.0625 20.649 23.37 19.86C23.6655 19.0965 23.868 18.225 23.928 16.947C23.985 15.6675 24 15.2595 24 12C24 8.7405 23.985 8.3325 23.928 7.0515C23.868 5.775 23.6655 4.902 23.37 4.14C23.0684 3.33934 22.5959 2.61401 21.9855 2.0145C21.3864 1.40351 20.661 0.930968 19.86 0.63C19.095 0.333 18.222 0.1305 16.9455 0.072C15.6645 0.015 15.258 0 11.997 0H12.0015H12ZM10.9245 2.163H12.0015C15.2055 2.163 15.585 2.1735 16.8495 2.232C18.0195 2.2845 18.6555 2.481 19.0785 2.6445C19.638 2.862 20.0385 3.123 20.4585 3.543C20.8785 3.963 21.138 4.362 21.3555 4.923C21.5205 5.3445 21.7155 5.9805 21.768 7.1505C21.8265 8.415 21.8385 8.7945 21.8385 11.997C21.8385 15.1995 21.8265 15.5805 21.768 16.845C21.7155 18.015 21.519 18.6495 21.3555 19.0725C21.1631 19.5935 20.856 20.0647 20.457 20.451C20.037 20.871 19.638 21.1305 19.077 21.348C18.657 21.513 18.021 21.708 16.8495 21.762C15.585 21.819 15.2055 21.8325 12.0015 21.8325C8.7975 21.8325 8.4165 21.819 7.152 21.762C5.982 21.708 5.3475 21.513 4.9245 21.348C4.40325 21.1559 3.93169 20.8494 3.5445 20.451C3.14513 20.0641 2.83758 19.5925 2.6445 19.071C2.481 18.6495 2.2845 18.0135 2.232 16.8435C2.175 15.579 2.163 15.1995 2.163 11.994C2.163 8.79 2.175 8.412 2.232 7.1475C2.286 5.9775 2.481 5.3415 2.646 4.9185C2.8635 4.359 3.1245 3.9585 3.5445 3.5385C3.9645 3.1185 4.3635 2.859 4.9245 2.6415C5.3475 2.4765 5.982 2.2815 7.152 2.2275C8.259 2.1765 8.688 2.1615 10.9245 2.16V2.163ZM18.4065 4.155C18.2174 4.155 18.0301 4.19225 17.8554 4.26461C17.6807 4.33698 17.522 4.44305 17.3883 4.57677C17.2545 4.71048 17.1485 4.86923 17.0761 5.04394C17.0037 5.21864 16.9665 5.4059 16.9665 5.595C16.9665 5.7841 17.0037 5.97135 17.0761 6.14606C17.1485 6.32077 17.2545 6.47952 17.3883 6.61323C17.522 6.74695 17.6807 6.85302 17.8554 6.92539C18.0301 6.99775 18.2174 7.035 18.4065 7.035C18.7884 7.035 19.1547 6.88329 19.4247 6.61323C19.6948 6.34318 19.8465 5.97691 19.8465 5.595C19.8465 5.21309 19.6948 4.84682 19.4247 4.57677C19.1547 4.30671 18.7884 4.155 18.4065 4.155ZM12.0015 5.838C11.1841 5.82525 10.3723 5.97523 9.61347 6.27921C8.85459 6.58319 8.16377 7.03511 7.58123 7.60863C6.99868 8.18216 6.53605 8.86585 6.22026 9.61989C5.90448 10.3739 5.74185 11.1833 5.74185 12.0007C5.74185 12.8182 5.90448 13.6276 6.22026 14.3816C6.53605 15.1356 6.99868 15.8193 7.58123 16.3929C8.16377 16.9664 8.85459 17.4183 9.61347 17.7223C10.3723 18.0263 11.1841 18.1763 12.0015 18.1635C13.6193 18.1383 15.1623 17.4779 16.2975 16.3249C17.4326 15.1719 18.0689 13.6188 18.0689 12.0007C18.0689 10.3827 17.4326 8.82962 16.2975 7.67662C15.1623 6.52363 13.6193 5.86324 12.0015 5.838ZM12.0015 7.9995C13.0625 7.9995 14.08 8.42098 14.8303 9.17122C15.5805 9.92146 16.002 10.939 16.002 12C16.002 13.061 15.5805 14.0785 14.8303 14.8288C14.08 15.579 13.0625 16.0005 12.0015 16.0005C10.9405 16.0005 9.92296 15.579 9.17272 14.8288C8.42248 14.0785 8.001 13.061 8.001 12C8.001 10.939 8.42248 9.92146 9.17272 9.17122C9.92296 8.42098 10.9405 7.9995 12.0015 7.9995Z" />,
  },
]

export const LOCATIONS = [
  {
    name: 'Malina Mică',
    address: 'Strada Nicolae Testemiţanu 17/6',
    position: { lat: 46.99737, lng: 28.83526 },
  },
  {
    name: 'Telecentru',
    address: 'Strada Vladimir Korolenko 12',
    position: { lat: 46.995146, lng: 28.825689 },
  },
  {
    name: 'Râşcani',
    address: 'Bd. Moscova 10/1',
    position: { lat: 47.04887, lng: 28.86357 },
  },
  {
    name: 'Botanica',
    address: 'Strada Independenţei 4/3',
    position: { lat: 46.98538, lng: 28.84468 },
  },
]

export const HERO_BUTTONS = [
  { name: 'Lavaș', id: 'mr-lavas' },
  { name: 'Burger', id: 'mr-chicken-burger' },
  { name: 'Pita', id: 'mr-pita' },
]

export const CATEGORIES = [
  { id: 'mr-kebab', name: 'Mr. Kebab', nameru: 'Mr. Kebab' },
  { id: 'saorma', name: 'Șaorma', nameru: 'Шаурма Mr. Лаваш' },
  { id: 'mr-wrap', name: 'Mr. Wrap', nameru: 'Mr. Wrap' },
  { id: 'mr-lavas', name: 'Mr. Lavaș', nameru: 'Mr. Лаваш' },
  { id: 'mr-chicken-burger', name: 'Mr. Chicken Burger', nameru: 'Mr. Chicken Бургер' },
  { id: 'mr-beef-burger', name: 'Mr. Beef Burger', nameru: 'Mr. Beef Бургер' },
  { id: 'mr-vegetarian-burger', name: 'Mr. Vegetarian Burger', nameru: 'Mr. Vegetarian Бургер' },
  { id: 'mr-kids-burger', name: 'Mr. Kids Burger', nameru: 'Mr. Kids Бургер' },
  { id: 'mr-baghet', name: 'Mr. Baghet', nameru: 'Mr. Багет' },
  { id: 'mr-pita', name: 'Mr. Pită', nameru: 'Mr. Пита' },
  { id: 'supe', name: 'Supe', nameru: 'Cупы' },
  { id: 'snacks', name: 'Snacks', nameru: 'Закуски' },
  { id: 'la-farfurie', name: 'La Farfurie', nameru: 'В Тарелке' },
  { id: 'salate', name: 'Salate', nameru: 'Салаты' },
  { id: 'combo-menu', name: 'Combo Menu', nameru: 'Сеты' },
  { id: 'combo-kids', name: 'Combo Kids', nameru: 'Сеты для Детей' },
  { id: 'sosuri', name: 'Sosuri', nameru: 'Соусы' },
  { id: 'cold-drinks', name: 'Cold Drinks', nameru: 'Холодные напитки' },
  { id: 'bauturi-dulci', name: 'Băuturi dulci', nameru: 'Сладкие напитки' },
  { id: 'hot-drinks', name: 'Hot Drinks', nameru: 'Горячие напитки' },
  { id: 'deserturi', name: 'Deserturi', nameru: 'Десерты' },
]

export const DRINKS = [
  'Cold Drinks',
  'Băuturi Dulci',
  'Hot Drinks',
]

export const WEIGHT_TYPE = {
  grams: 'g',
  milliliters: 'ml',
}

export const MODALS = {
  product: 'product' as 'product',
  cart: 'cart' as 'cart',
}

export const MODAL_COMPONENTS = {
  product: ProductModal,
  cart: CartModal,
}

export const RECOMMENDED_SLIDER_BREAKPOINTS = {
  512: {
    slidesPerView: 3,
  },
  816: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 3,
  },
  1440: {
    slidesPerView: 4,
  },
}

export const CAREERS_FORM_INITIAL_DATA = {
  name: '',
  age: '',
  tel: '',
  email: '',
  services: [] as string[],
  languages: [] as string[],
  locations: [] as string[],
  workType: [] as string[],
}

export const CAREERS_CHECKBOXES_CATEGORY = {
  services: 'services' as 'services',
  languages: 'languages' as 'languages',
  locations: 'locations' as 'locations',
  workType: 'workType' as 'workType',
}

export const CAREERS_SERVICES = ['Bucatar', 'Chelner', 'Casier Operator', 'Sofer de livrare', 'Handyman', 'Operator de livrare']
export const CAREERS_OTHERS = [
  {
    heading: 'Cunosc limbile',
    name: 'languages',
    values: ['Rusa', 'Romana', 'Engleza'],
  },
  {
    heading: 'Doresc să lucrez la',
    name: 'locations',
    values: ['Malina Mica', 'Botanica', 'Telecentru', 'Râșcani'],
  },
  {
    heading: 'Sunt dispus să lucrez',
    name: 'workType',
    values: ['Full-time', 'Part-time'],
  },
]

export const BANNER_PLACEHOLDER = 'iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAMAAACd425HAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAXVBMVEX6ztr20dv22uTx1ODsz9zmxNHkyNXox9XlxNLgu8f55fH34Ovz1+DkucbftMLdtbXatbfjxdPgwM/et8b75/H44uv13uft093ducTMi4S9fX3VssDcs8Peprb///8aGuotAAAAAWJLR0QecgogKwAAAAd0SU1FB+UHHQkUHzZ5kuwAAAApSURBVAjXY2BgZGJmYWVj5+Bk4OLm4eXjFxAUEmYQERUTl5CUkpaRBQASmwG0/WmHKAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNy0yOVQwOToyMDoyMCswMDowMMURozQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDctMjlUMDk6MjA6MjArMDA6MDC0TBuIAAAAAElFTkSuQmCC'
